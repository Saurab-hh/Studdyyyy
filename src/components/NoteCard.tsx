import { Edit3, Trash2, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Note } from '@/types/note';
import { countWords } from '@/lib/notesStorage';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

/**
 * NoteCard component
 * Displays a single note with title, content preview, and actions
 */
const NoteCard = ({ note, onEdit, onDelete }: NoteCardProps) => {
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Truncate content for preview
  const truncateContent = (content: string, maxLength: number = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + '...';
  };

  const wordCount = countWords(note.content);

  return (
    <Card variant="elevated" className="note-card group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-2 flex-1">
            {note.title || 'Untitled Note'}
          </CardTitle>
          {/* Action buttons - visible on hover */}
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onEdit(note)}
              aria-label="Edit note"
              className="h-8 w-8"
            >
              <Edit3 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDelete(note.id)}
              aria-label="Delete note"
              className="h-8 w-8 text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Content preview */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-4">
          {truncateContent(note.content) || 'No content'}
        </p>
        
        {/* Footer with metadata */}
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{formatDate(note.updatedAt)}</span>
          </div>
          <span>{wordCount} words</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
