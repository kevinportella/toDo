import { FormEvent, useState } from 'react';
import { useNotes } from '../../hooks/useNotes';

import { Container, Content } from './styles'

export function Header() {
  const { createNote } = useNotes();

  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  async function handleCreateNewNote(event: FormEvent) {
    event.preventDefault()
    if (!title.trim()) return

    await createNote({ title, completed })
    setCompleted(false)
    setTitle('')
  };

  return (
    <Container onSubmit={handleCreateNewNote} >
      <Content>

        <header>toDo</header>

        <input
          placeholder="Title"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <button
          type="submit"
        >
          New note
        </button>

      </Content>
    </Container>
  )
}
