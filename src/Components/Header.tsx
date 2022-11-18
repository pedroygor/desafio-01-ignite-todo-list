import react from "react";
import Logo from '../assets/Logo.svg'
import styled from "styled-components";

const HeaderStyle = styled.header`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--gray-700);
  img {
    margin-bottom: 0.5rem;
  }
`
export function Header() {
  return (
    <HeaderStyle>
      <img src={Logo} alt="Logo da lista de tarefas" />
    </HeaderStyle>
  )
}