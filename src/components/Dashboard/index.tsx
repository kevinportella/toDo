import { useState } from "react";
import { NewTaskModal } from "../NewTaskModal";
import { NotesTable } from "../NotesTable";
import { Container } from "./styles";

export function Dashboard () {
  const [ isNewTaskModalOpen , setIsNewTaskModalOpen] = useState(false);
  const [ noteId, setNoteId] = useState<null | number>(null);

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }

  return (
    <Container>

      <NotesTable setNoteId={setNoteId} onOpenNewTaskModal={handleOpenNewTaskModal}/>

      <NewTaskModal
        setNoteId={setNoteId}
        noteId={noteId}
        isOpen={isNewTaskModalOpen}
        onRequestClose={handleCloseNewTaskModal}
      />
    </Container>
  )
}
