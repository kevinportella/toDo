import Modal from 'react-modal';
import closeImg from '../../assets/vector.svg';
import { useNotes } from '../../hooks/useNotes';
import {
  ButtonDelete, ButtonRedo,
  ButtonReverse, ButtonSave, ButtonUndo, Container, Checked, Input, Label, NoteTypeContainer
} from './styles';
interface NewTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  setNoteId: (id: number | null) => void;
  noteId: number | null;
}

export function NewTaskModal({ isOpen, onRequestClose, setNoteId, noteId }: NewTaskModalProps) {
  const { notes, removeNote, toggleComplete } = useNotes();

  const handleRemoveNote = (id: number) => {
    removeNote(id);
  }

  const note = notes.find(note => note.id === noteId);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={() => {
          setNoteId(null)
          onRequestClose()
        }}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>

      {!!note && (
        <Container key={note.id}>
          <Label>

            <Checked type="checkbox"
              onChange={() => toggleComplete(note.id)}
              checked={note.completed}
            />

            <h2>{note.title}</h2>

          </Label>

          <NoteTypeContainer>

            <Input
              placeholder='Edit note...'
            />

            <ButtonSave>

              <span>Save</span>

            </ButtonSave>

          </NoteTypeContainer>

          <NoteTypeContainer>

            <ButtonUndo type="button">

              <span>Undo</span>

            </ButtonUndo>

            <ButtonRedo type="button">

              <span>Redo</span>

            </ButtonRedo>

            <ButtonReverse type="button">

              <span>Revert all</span>

            </ButtonReverse>

          </NoteTypeContainer>

          <NoteTypeContainer>

            <ButtonDelete
              type="submit"
              onClick={() => {
                handleRemoveNote(note.id)
                onRequestClose()
              }}
            >
              Delete
            </ButtonDelete>

          </NoteTypeContainer>

        </Container>
      )}

    </Modal>
  );
}
