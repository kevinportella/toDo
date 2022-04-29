import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    width: 100%;
    font-size: 1.5rem;
    color: var(--text-title);
    margin-bottom: 1rem;
  }

  /* input {
    width: 100%;
    font-weight: 400;
    font-size: 1rem;
    padding: 0 1.5rem;
    height: 4rem;
    margin-bottom: 1rem;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    background: #e7e9ee;

    &::placeholder {
     color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  table{
    width:100%;

    td {
      padding: 0 0.5rem;
    }
  } */
`;

export const Options = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Checked = styled.input.attrs({ type: "checkbox" })``;

export const Input = styled.input`
  width: 100%;
  font-weight: 400;
  font-size: 1rem;
  padding: 0 1.5rem;
  height: 4rem;
  margin-bottom: 1rem;

  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;

  background: #e7e9ee;

  &::placeholder {
    color: var(--text-body);
  }

  & + input {
    margin-top: 1rem;
  }
`;

export const Label = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NoteTypeContainer = styled.div`
  margin: 0.5rem auto;
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  padding: 1rem 1.5rem;
  height: 4rem;
  background: var(--green);
  color:#FFF;

  border-radius: 0.25rem;
  border:0;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ButtonDelete = styled(Button)`
  background: var(--red);
`;

export const ButtonUndo = styled(Button)`
  width: 100%;

`;
export const ButtonRedo = styled(ButtonUndo)`

`;
export const ButtonReverse = styled(ButtonUndo)`

`;

export const ButtonSave = styled(ButtonUndo)`
  width: 40%;
`;
