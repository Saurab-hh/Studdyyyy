/**
 * AI Response Generator
 * Simulates AI responses for the chat helper
 * Since there's no backend, this uses predefined logic
 */

interface AIResponse {
  type: 'summarize' | 'explain' | 'revision' | 'general';
  response: string;
}

/**
 * Generates simulated AI responses based on user input
 */
export const generateAIResponse = (userMessage: string, noteContent?: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Check for summarize requests
  if (lowerMessage.includes('summarize') || lowerMessage.includes('summary')) {
    if (noteContent) {
      const sentences = noteContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
      const keyPoints = sentences.slice(0, Math.min(3, sentences.length));
      return `📋 **Summary:**\n\n${keyPoints.map((point, i) => `${i + 1}. ${point.trim()}`).join('\n')}\n\n*This is a simulated summary. In a full implementation, an AI model would analyze and condense your content.*`;
    }
    return "📋 I'd be happy to summarize your notes! Please share the content you'd like me to summarize, or select a note first.";
  }
  
  // Check for explanation requests
  if (lowerMessage.includes('explain') || lowerMessage.includes('what is') || lowerMessage.includes('what are')) {
    const topic = lowerMessage.replace(/explain|what is|what are/gi, '').trim();
    if (topic) {
      return `📚 **Explanation of "${topic}":**\n\nThis is a simulated explanation. In a production app, an AI model would provide a detailed explanation of "${topic}" with examples and context relevant to your studies.\n\n*Tip: For best results, be specific about what aspect you'd like explained!*`;
    }
    return "📚 I'd be happy to explain any topic! What would you like me to explain? Try asking something like 'Explain photosynthesis' or 'What is machine learning?'";
  }
  
  // Check for revision points requests
  if (lowerMessage.includes('revision') || lowerMessage.includes('review') || lowerMessage.includes('study points') || lowerMessage.includes('key points')) {
    if (noteContent) {
      const words = noteContent.split(/\s+/).filter(w => w.length > 4);
      const uniqueWords = [...new Set(words)].slice(0, 5);
      return `📝 **Revision Points:**\n\n• Focus on key concepts\n• Review the main ideas: ${uniqueWords.join(', ')}\n• Practice applying these concepts\n• Test yourself on definitions\n• Create flashcards for memorization\n\n*These are simulated revision points. A real AI would analyze your content and generate targeted study tips.*`;
    }
    return "📝 I can create revision points for your notes! Share the content you want to review, or select a note first.";
  }
  
  // Check for help/greeting
  if (lowerMessage.includes('help') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
    return `👋 **Hello! I'm your AI Study Helper!**\n\nHere's what I can help you with:\n\n• **Summarize** - "Summarize this note"\n• **Explain** - "Explain [topic]"\n• **Revision Points** - "Create revision points"\n\n*Note: This is a demo AI. Responses are simulated for this project.*`;
  }
  
  // Check for thanks
  if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
    return "You're welcome! 😊 Happy studying! Let me know if you need any more help with your notes.";
  }
  
  // Default response
  return `🤔 I'm here to help with your studies! Try asking me to:\n\n• **Summarize** your notes\n• **Explain** a topic\n• **Create revision points**\n\nFor example: "Summarize my notes" or "Explain quantum physics"\n\n*This is a simulated AI helper for demonstration purposes.*`;
};

/**
 * Generates typing delay to simulate AI thinking
 */
export const getTypingDelay = (): number => {
  return Math.random() * 1000 + 500; // 500-1500ms delay
};
