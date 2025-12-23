import { useState, useEffect } from 'react';
import { Plus, Search, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import NoteCard from './NoteCard';
import NoteEditor from './NoteEditor';
import DeleteConfirmDialog from './DeleteConfirmDialog';
import { Note } from '@/types/note';
import { 
  getNotes, 
  createNote, 
  updateNote, 
  deleteNote, 
  searchNotes,
  exportNotes 
} from '@/lib/notesStorage';
import { toast } from 'sonner';

/**
 * NotesSection component
 * Main section for displaying, creating, and managing notes
 * Features search, CRUD operations, and export functionality
 */
const NotesSection = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState<Note | null>(null);

  // Load notes on mount
  useEffect(() => {
    setNotes(getNotes());
  }, []);

  // Filter notes based on search query
  const displayedNotes = searchQuery ? searchNotes(searchQuery) : notes;

  // Handle creating a new note
  const handleCreateNote = () => {
    setEditingNote(null);
    setIsEditorOpen(true);
  };

  // Handle editing an existing note
  const handleEditNote = (note: Note) => {
    setEditingNote(note);
    setIsEditorOpen(true);
  };

  // Handle saving a note (create or update)
  const handleSaveNote = (title: string, content: string) => {
    if (editingNote) {
      // Update existing note
      updateNote(editingNote.id, title, content);
      toast.success('Note updated successfully!');
    } else {
      // Create new note
      createNote(title, content);
      toast.success('Note created successfully!');
    }
    setNotes(getNotes());
  };

  // Handle delete button click
  const handleDeleteClick = (id: string) => {
    const note = notes.find(n => n.id === id);
    if (note) {
      setNoteToDelete(note);
      setDeleteDialogOpen(true);
    }
  };

  // Confirm deletion
  const handleConfirmDelete = () => {
    if (noteToDelete) {
      deleteNote(noteToDelete.id);
      setNotes(getNotes());
      toast.success('Note deleted successfully!');
      setNoteToDelete(null);
    }
  };

  // Handle export
  const handleExport = () => {
    if (notes.length === 0) {
      toast.error('No notes to export!');
      return;
    }
    exportNotes(notes);
    toast.success('Notes exported successfully!');
  };

  return (
    <section id="notes" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Notes</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create, organize, and manage your notes. All data is stored locally in your browser.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport} className="gap-2">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Export</span>
            </Button>
            <Button onClick={handleCreateNote} className="gap-2">
              <Plus className="h-4 w-4" />
              Create Note
            </Button>
          </div>
        </div>

        {/* Notes Grid */}
        {displayedNotes.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {displayedNotes.map((note, index) => (
              <div 
                key={note.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <NoteCard
                  note={note}
                  onEdit={handleEditNote}
                  onDelete={handleDeleteClick}
                />
              </div>
            ))}
          </div>
        ) : (
          // Empty state
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {searchQuery ? 'No notes found' : 'No notes yet'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery 
                ? 'Try a different search term'
                : 'Create your first note to get started!'
              }
            </p>
            {!searchQuery && (
              <Button onClick={handleCreateNote} className="gap-2">
                <Plus className="h-4 w-4" />
                Create Your First Note
              </Button>
            )}
          </div>
        )}

        {/* Note Editor Modal */}
        <NoteEditor
          note={editingNote}
          isOpen={isEditorOpen}
          onClose={() => setIsEditorOpen(false)}
          onSave={handleSaveNote}
        />

        {/* Delete Confirmation Dialog */}
        <DeleteConfirmDialog
          isOpen={deleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
          onConfirm={handleConfirmDelete}
          noteTitle={noteToDelete?.title || ''}
        />
      </div>
    </section>
  );
};

export default NotesSection;
