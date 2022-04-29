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
}

export function NewTaskModal({ isOpen, onRequestClose }: NewTaskModalProps) {
  const { notes, removeNote } = useNotes();

  const handleRemoveNote = (id: number) => {
    removeNote(id);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>

      {notes.map(note => (
        <Container key={note.id}>
          <Label>

            <Checked type="checkbox" />

            <h2>{note.title}</h2>

          </Label>

          <NoteTypeContainer>

            <Input
              placeholder='Edit note...'
            />

            <ButtonSave type="submit">

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
              onClick={() => handleRemoveNote(note.id)}
            >
              Delete
            </ButtonDelete>

          </NoteTypeContainer>

        </Container>
      ))}

    </Modal>
  );
}
