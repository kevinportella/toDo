import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NotesProvider } from './hooks/useNotes';
import { GlobalStyled } from './styles/global';


Modal.setAppElement('#root')

export function App() {

  return (
    <NotesProvider>

      <Header />

      <Dashboard />

      <GlobalStyled />

    </NotesProvider>
  );
}
