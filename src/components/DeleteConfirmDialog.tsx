import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

interface DeleteConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  noteTitle: string;
}

/**
 * DeleteConfirmDialog componenttt
 * Confirmation popup before deleting a note
 */
const DeleteConfirmDialog = ({ isOpen, onClose, onConfirm, noteTitle }: DeleteConfirmDialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative bg-card rounded-2xl shadow-xl w-full max-w-md p-6 animate-scale-in">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-destructive/10">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold mb-2">Delete Note?</h3>
          <p className="text-muted-foreground">
            Are you sure you want to delete "{noteTitle || 'Untitled Note'}"? 
            This action cannot be undone.
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            variant="destructive" 
            className="flex-1"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmDialog;
