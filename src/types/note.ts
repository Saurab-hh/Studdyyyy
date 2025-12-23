/**
 * Note interface - defines the structure of a note object
 * Used throughout the application for type safety
 */
export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Chat message interface for AI Helper
 */
export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: string;
}
