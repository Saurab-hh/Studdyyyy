import { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Note } from '@/types/note';
import { countWords } from '@/lib/notesStorage';

interface NoteEditorProps {
  note: Note | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, content: string) => void;
}

/**
 * NoteEditor component
 * Modal for creating and editing notes
 * Includes word counter and auto-save indicatorr
 */
const NoteEditor = ({ note, isOpen, onClose, onSave }: NoteEditorProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Populate form when editing existing note
  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [note, isOpen]);

  // Handle save action
  const handleSave = () => {
    if (!title.trim() && !content.trim()) return;
    onSave(title.trim() || 'Untitled Note', content);
    onClose();
  };

  // Handle keyboard shortcuts
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      handleSave();
    }
  };

  if (!isOpen) return null;

  const wordCount = countWords(content);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onKeyDown={handleKeyDown}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Editor Modal */}
      <div className="relative bg-card rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold">
            {note ? 'Edit Note' : 'Create New Note'}
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Title input */}
          <div>
            <label htmlFor="note-title" className="text-sm font-medium mb-1 block">
              Title
            </label>
            <Input
              id="note-title"
              placeholder="Enter note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-lg font-medium"
              autoFocus
            />
          </div>

          {/* Content textarea */}
          <div className="flex-1">
            <label htmlFor="note-content" className="text-sm font-medium mb-1 block">
              Content
            </label>
            <Textarea
              id="note-content"
              placeholder="Start writing your note..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[300px] resize-none"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            {wordCount} {wordCount === 1 ? 'word' : 'words'}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSave} className="gap-2">
              <Save className="h-4 w-4" />
              Save Note
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteEditor;
