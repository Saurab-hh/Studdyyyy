import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChatMessage } from '@/types/note';
import { generateAIResponse, getTypingDelay } from '@/lib/aiHelper';

/**
 * AIHelperSection component
 * Chat-style interface for AI assistance
 * Simulates AI responses for summarization, explanation, and revisionn
 */
const AIHelperSection = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "👋 Hi! I'm your AI Study Helper. I can help you summarize notes, explain topics, or create revision points. What would you like help with?",
      sender: 'ai',
      timestamp: new Date().toISOString(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking delay
    await new Promise(resolve => setTimeout(resolve, getTypingDelay()));

    // Generate AI response
    const aiResponse = generateAIResponse(userMessage.content);
    
    const aiMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      content: aiResponse,
      sender: 'ai',
      timestamp: new Date().toISOString(),
    };

    setIsTyping(false);
    setMessages(prev => [...prev, aiMessage]);
  };

  // Handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Quick action buttons
  const quickActions = [
    { label: 'Summarize', prompt: 'Can you help me summarize my notes?' },
    { label: 'Explain', prompt: 'Can you explain a topic for me?' },
    { label: 'Revision Points', prompt: 'Create revision points for studying' },
  ];

  return (
    <section id="ai-helper" className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Study Helper</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get instant help with summarizing notes, explaining topics, and creating revision points.
            Ask anything about your studies!
          </p>
        </div>

        {/* Chat Container */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden">
            {/* Messages Area */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 animate-fade-in ${
                    message.sender === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent/20 text-accent'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground rounded-tr-sm'
                        : 'bg-secondary text-foreground rounded-tl-sm'
                    }`}
                  >
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3 animate-fade-in">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-accent/20 text-accent">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3">
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 border-t border-border bg-secondary/30">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {quickActions.map((action) => (
                  <Button
                    key={action.label}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setInputValue(action.prompt);
                    }}
                    className="whitespace-nowrap text-xs"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything about your studies..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isTyping}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={!inputValue.trim() || isTyping}
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                * This is a simulated AI for demonstration purposes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHelperSection;
