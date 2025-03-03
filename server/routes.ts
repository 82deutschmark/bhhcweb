import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import express from "express";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Use the specific assistant ID
const ASSISTANT_ID = "asst_njeoIssy75OfIctRtm15loXX";
const VECTOR_STORE_ID = "vs_67c5f4fbc5d48191ac1994b4b293bff4";

export async function registerRoutes(app: Express): Promise<Server> {
  app.use(express.json());

  // Store threads in memory (in production, use a database)
  const threads = new Map<string, string>();

  app.post('/api/chat/thread', async (req, res) => {
    try {
      const thread = await openai.beta.threads.create({
        tools: [{
          type: "file_search",
          config: {
            vector_store_id: VECTOR_STORE_ID
          }
        }]
      });
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

      // Add the message to the thread
      await openai.beta.threads.messages.create(threadId, {
        role: "user",
        content: message,
      });

      // Run the assistant on the thread with the specific assistant ID
      const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: ASSISTANT_ID,
        tools: [{
          type: "file_search",
          config: {
            vector_store_id: VECTOR_STORE_ID
          }
        }]
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