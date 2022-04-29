
import { useNotes } from "../../hooks/useNotes";
import { Button, ButtonDelete, Container, Options } from "./styles";

interface NotesTableProps {
  onOpenNewTaskModal: () => void
}

export function NotesTable({ onOpenNewTaskModal }: NotesTableProps) {
  const { notes, removeNote, } = useNotes();

  const handleRemoveNote = (id: number) => {
    removeNote(id);
  }

  return (
    <Container>
      <table>

        <thead>

          <tr>

            <th>Title</th>

            <th>Status</th>

            <th>Data</th>

            <th>Options</th>

          </tr>

        </thead>

        <tbody>
          {notes.map(note => (
            <tr key={note.id}>

              <td>{note.title}</td>

              <td>
                <input type="checkbox"
                  // onChange={() => toggleComplete(note.id)}
                  checked={note.completed}
                />
              </td>

              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(note.createdAt)
                )}
              </td>

              <Options>

                <Button
                  onClick={onOpenNewTaskModal}
                >
                  Edit
                </Button>

                <ButtonDelete onClick ={() => handleRemoveNote(note.id)}>Delete</ButtonDelete>

              </Options>

            </tr>
          ))}
        </tbody>

      </table>
    </Container>
  )
}
