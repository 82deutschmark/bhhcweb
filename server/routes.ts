import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import express from "express";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function registerRoutes(app: Express): Promise<Server> {
  // prefix all routes with /api
  app.use(express.json());

  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI assistant for Big Happy Holding Company (BHHC). Be professional, concise, and friendly. Focus on providing information about BHHC's portfolio and services."
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 500,
      });

      return res.json({
        response: response.choices[0].message.content
      });
    } catch (error) {
      console.error('Chat API Error:', error);
      return res.status(500).json({ error: 'Failed to process chat request' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}