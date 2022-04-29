
import { useNotes } from "../../hooks/useNotes";
import { Button, ButtonDelete, Container, Options } from "./styles";

interface NotesTableProps {
  onOpenNewTaskModal: () => void
  setNoteId: (id: number) => void
}

export function NotesTable({ onOpenNewTaskModal, setNoteId }: NotesTableProps) {
  const { notes, removeNote, } = useNotes();

  const handleRemoveNote = (id: number) => {
    removeNote(id);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>

            <th>Status</th>

            <th>Title</th>

            <th>Data</th>

            <th>Options</th>

          </tr>
        </thead>

        <tbody>
          {notes.map(note => (
            <tr key={note.id}>

              <td>
                <input type="checkbox"
                  checked={note.completed}
                />
              </td>

              <td>{note.title}</td>

              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(note.createdAt)
                )}
              </td>

              <Options>

                <Button
                  onClick={() => {
                    setNoteId(note.id)
                    onOpenNewTaskModal()
                  }}
                >
                  Edit
                </Button>

                <ButtonDelete onClick={() => handleRemoveNote(note.id)}>Delete</ButtonDelete>

              </Options>

            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
