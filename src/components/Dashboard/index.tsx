import { useState } from "react";
import { NewTaskModal } from "../NewTaskModal";
import { NotesTable } from "../NotesTable";
import { Container } from "./styles";

export function Dashboard () {
  const [ isNewTaskModalOpen , setIsNewTaskModalOpen] = useState(false);

  function handleOpenNewTaskModal() {
    setIsNewTaskModalOpen(true);
  }

  function handleCloseNewTaskModal() {
    setIsNewTaskModalOpen(false);
  }
  return (
    <Container>

      <NotesTable onOpenNewTaskModal={handleOpenNewTaskModal}/>

      <NewTaskModal
        isOpen={isNewTaskModalOpen}
        onRequestClose={handleCloseNewTaskModal}
      />
    </Container>
  )
}
