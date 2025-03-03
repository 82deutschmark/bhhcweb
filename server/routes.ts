import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import express from "express";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Create an assistant for BHHC
let assistantId: string;

async function createAssistant() {
  const assistant = await openai.beta.assistants.create({
    name: "BHHC Assistant",
    instructions: `You are a helpful AI assistant for Big Happy Holding Company (BHHC). 
    Be professional, concise, and friendly. Focus on providing information about BHHC's portfolio and services.
    Specifically, you should be knowledgeable about:
    1. Peekaboo Barn and other mobile applications in our portfolio
    2. Our investment approach and strategy
    3. Our leadership team and company values
    Always maintain a professional tone while being approachable and engaging.`,
    model: "gpt-4o",
  });
  return assistant.id;
}

// Initialize the assistant
(async () => {
  try {
    assistantId = await createAssistant();
    console.log('Assistant created successfully');
  } catch (error) {
    console.error('Failed to create assistant:', error);
  }
})();

export async function registerRoutes(app: Express): Promise<Server> {
  app.use(express.json());

  // Store threads in memory (in production, use a database)
  const threads = new Map<string, string>();

  app.post('/api/chat/thread', async (req, res) => {
    try {
      const thread = await openai.beta.threads.create();
      res.json({ threadId: thread.id });
    } catch (error) {
      console.error('Thread creation error:', error);
      res.status(500).json({ error: 'Failed to create chat thread' });
    }
  });

  app.post('/api/chat/message', async (req, res) => {
    try {
      const { threadId, message } = req.body;

      if (!threadId || !message) {
        return res.status(400).json({ error: 'ThreadId and message are required' });
      }

      if (!assistantId) {
        return res.status(500).json({ error: 'Assistant not initialized' });
      }

      // Add the message to the thread
      await openai.beta.threads.messages.create(threadId, {
        role: "user",
        content: message,
      });

      // Run the assistant on the thread
      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
      });

      // Wait for the run to complete
      let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
      while (runStatus.status === "in_progress" || runStatus.status === "queued") {
        await new Promise(resolve => setTimeout(resolve, 1000));
        runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
      }

      if (runStatus.status === "completed") {
        // Get the assistant's messages
        const messages = await openai.beta.threads.messages.list(threadId);
        const lastMessage = messages.data.find(msg => msg.role === "assistant");

        if (lastMessage && lastMessage.content[0].type === 'text') {
          return res.json({
            response: lastMessage.content[0].text.value
          });
        }
      }

      throw new Error(`Run ended with status: ${runStatus.status}`);
    } catch (error) {
      console.error('Chat API Error:', error);
      return res.status(500).json({ error: 'Failed to process chat request' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}