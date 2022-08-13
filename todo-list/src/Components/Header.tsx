import react from "react";
import Logo from '../assets/Logo.svg'
export function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo da lista de tarefas" />
    </header>
  )
}