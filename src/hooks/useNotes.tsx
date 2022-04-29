import { createContext, useEffect, useState, ReactNode, useContext } from 'react'

import { api } from '../services/api';

interface Note {
  id: number;
  title: string;
  createdAt: string;
  completed: boolean;
}
type NoteInput = Omit<Note, 'id' | 'createdAt'>;

interface NotesProviderProps {
  children: ReactNode;
}
interface NotesContextData {
  notes: Note[];
  createNote: (note: NoteInput) => Promise<void>;
  removeNote: (id: number) => void;
  toggleComplete: (id: number) => void;
  editNote: (id: number, title: string) => void;
}

const NotesContext = createContext<NotesContextData>(
  {} as NotesContextData
);

export function NotesProvider({ children }: NotesProviderProps) {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    api.get('notes')
      .then(response => setNotes(response.data.notes))
  }, [])

  async function createNote(noteInput: NoteInput) {
    const response = await api.post('/notes', {
      ...noteInput,
      createdAt: new Date(),
      completed: false
    })
    const { note } = response.data;

    setNotes([
      ...notes,
      note,
    ]);
  }

  const removeNote = (id: number) => {
    const deleteNote = [...notes]
    const noteId = deleteNote.filter(note => note.id !== id);

    setNotes(noteId);
  };

  const toggleComplete = (id: number) => {
    const updateNote = [...notes]
    const notesId = updateNote.map(note => {
      if (note.id === id) {
        note.completed = !note.completed
      }
      return note;
    })
    setNotes(notesId);
  };

  const editNote = (id: number, title: string) => {
    const updateNote = [...notes]
    const notesId = updateNote.map(note => {
      if (note.id === id) {
        note.title = title
      }
      return note;
    })
    setNotes(notesId);
  }

  return (
    <NotesContext.Provider value={{ notes, createNote, removeNote, toggleComplete, editNote }}>
      {children}
    </NotesContext.Provider>
  )
}

export function useNotes() {
  const context = useContext(NotesContext);

  return context;
}

