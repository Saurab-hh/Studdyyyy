import { Note } from '@/types/note';

// LocalStorage key for storing notes
const STORAGE_KEY = 'smart-notes-data';

/**
 * Retrieves all notes from localStorage
 * Returns an empty array if no notes exist
 */
export const getNotes = (): Note[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading notes from localStorage:', error);
    return [];
  }
};

/**
 * Saves all notes to localStorage
 */
export const saveNotes = (notes: Note[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    console.error('Error saving notes to localStorage:', error);
  }
};

/**
 * Creates a new note and saves it to localStorage
 */
export const createNote = (title: string, content: string): Note => {
  const notes = getNotes();
  const newNote: Note = {
    id: Date.now().toString(),
    title,
    content,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  notes.unshift(newNote);
  saveNotes(notes);
  return newNote;
};

/**
 * Updates an existing note by ID
 */
export const updateNote = (id: string, title: string, content: string): Note | null => {
  const notes = getNotes();
  const index = notes.findIndex(note => note.id === id);
  if (index === -1) return null;
  
  notes[index] = {
    ...notes[index],
    title,
    content,
    updatedAt: new Date().toISOString(),
  };
  saveNotes(notes);
  return notes[index];
};

/**
 * Deletes a note by ID
 */
export const deleteNote = (id: string): boolean => {
  const notes = getNotes();
  const filteredNotes = notes.filter(note => note.id !== id);
  if (filteredNotes.length === notes.length) return false;
  saveNotes(filteredNotes);
  return true;
};

/**
 * Searches notes by title or content
 */
export const searchNotes = (query: string): Note[] => {
  const notes = getNotes();
  const lowerQuery = query.toLowerCase();
  return notes.filter(
    note =>
      note.title.toLowerCase().includes(lowerQuery) ||
      note.content.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Exports notes as a text file
 */
export const exportNotes = (notes: Note[]): void => {
  const content = notes
    .map(note => {
      const date = new Date(note.createdAt).toLocaleString();
      return `📝 ${note.title}\nCreated: ${date}\n\n${note.content}\n\n${'─'.repeat(50)}\n`;
    })
    .join('\n');

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `smart-notes-export-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

/**
 * Counts words in a string
 */
export const countWords = (text: string): number => {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};
