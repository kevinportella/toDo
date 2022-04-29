import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table{
    width:100%;
    border-spacing: 0 0.5rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    th{
      color: var(--text-title);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      color: var(--text-body);
      border-radius: 0.25rem;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Button = styled.button`
  font-size: 1rem;
  color: #fff;
  background: var(--green);
  border: 0;
  padding: 0 1rem;
  border-radius: 0.25rem;
  height: 3rem;

  transition : filter 0.2s;

  &:hover{
    filter: brightness(0.7);
  }
`;

export const ButtonDelete = styled(Button)`
  background: var(--red);

`;

