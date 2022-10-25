import React from "react";
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import styled from "styled-components";

const InputTasksStyle = styled.section`
  position: absolute;
  top: calc(20% - 27px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  height: 54px;
  width: 46rem;
  left: 50%;
  transform: translate(-50%, 0);
`

const InputStyle = styled.input`
  background: var(--gray-500);
  border: 1px solid var(--gray-700);
  border-radius: 8px;
  padding: 16px;
  color: var(--gray-100);
  width: 100%;
  font-size: 16px;

  
  ::placeholder {
    color: var(--gray-300);
    font-size: 16px;
  }

  :focus {
    border: 1px solid var(--blue-dark);
    color: var(--gray-300);
  }
  
`

const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray-100);
  font-size: 0.875rem;
  font-weight: 700;
  background: var(--blue-dark);
  border: 1px solid var(--blue-dark);
  border-radius: 8px;
  padding: 16px;

  :hover {
    background: var(--blue);
  } 
`

interface Props {
  getTasks: (task: string) => void
}

export function InsertTasks({ getTasks }: Props) {
  const [inputTask, setInputTask] = useState('');

  function handleChangeInputTask(e: ChangeEvent<HTMLInputElement>) {
    setInputTask(e.target.value)
  }

  function handleClickButton() {
    getTasks(inputTask);
    setInputTask('');
  }

  return (
    <InputTasksStyle>
      <InputStyle
        type="text"
        name="task"
        id="task"
        placeholder="Adicione uma nova tarefa"
        value={inputTask}
        onChange={handleChangeInputTask}
      />
      <ButtonStyle
        type="button"
        onClick={handleClickButton}
      >
        Criar
        <PlusCircle size={14} weight="bold" />
      </ButtonStyle>
    </InputTasksStyle>
  )
}