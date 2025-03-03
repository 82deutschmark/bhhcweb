import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Create a new thread when the component mounts
    const createThread = async () => {
      try {
        const response = await fetch('/api/chat/thread', {
          method: 'POST',
        });
        if (!response.ok) throw new Error('Failed to create thread');
        const data = await response.json();
        setThreadId(data.threadId);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to initialize chat. Please refresh the page.",
          variant: "destructive",
        });
      }
    };

    createThread();
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || !threadId) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    // Add user message immediately
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const response = await fetch('/api/chat/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          threadId,
          message: userMessage 
        }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      const errorResponse = error instanceof Error ? error.cause as any : null;
      
      // Check if this is a rate limit error with our custom kid-friendly message
      if (errorResponse?.status === 429 && errorResponse?.data?.isKidFriendly) {
        // Add the error message to the chat as a special assistant message
        setMessages(prev => [
          ...prev, 
          { 
            role: 'assistant', 
            content: errorResponse.data.message || "Oops! My little robot brain needs a quick nap. Can you wait a tiny bit? 🤖💤" 
          }
        ]);
      } else {
        // If not a rate limit error, show the error toast
        setMessages(prev => [
          ...prev, 
          { 
            role: 'assistant', 
            content: "Oh no! Something went wrong with my robot circuits! 🤖⚡ Can you try again in a little bit?" 
          }
        ]);
        
        toast({
          title: "Oopsie Daisy!",
          description: "My robot friend had a little trouble. Let's try again!",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="fixed bottom-4 right-4 w-96 h-[500px] flex flex-col p-4 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="h-5 w-5" />
        <h3 className="font-semibold">Chat with BHHC Assistant</h3>
      </div>

      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-primary text-primary-foreground ml-8'
                  : msg.content.includes('robot') || msg.content.includes('Oops')
                    ? 'bg-yellow-100 border-2 border-yellow-300 mr-8 animate-bounce-once'
                    : 'bg-muted mr-8'
              }`}
            >
              {msg.content.includes('robot') || msg.content.includes('Oops') ? (
                <div className="flex items-center">
                  <span className="mr-2 text-xl">🤖</span>
                  <span>{msg.content}</span>
                </div>
              ) : (
                msg.content
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex gap-2 mt-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          disabled={isLoading || !threadId}
        />
        <Button
          onClick={sendMessage}
          disabled={isLoading || !threadId}
          size="icon"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}