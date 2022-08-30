import React, { useState } from "react";
import { Trash } from 'phosphor-react'
import styled from 'styled-components'

const TaskStyle = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  gap: 12px;
  height: 72px;
  font-size: 0.875rem;
  line-height: 1.4;
  background: var(--gray-500);
  border: 1px solid var(--gray-400);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  width: 100%;

`

const ButtonTrashStyle = styled.button`
  :hover {
    width: 50px;
    background: var(--danger);
  }
`

interface Props {
  contentTask: string,
  changeTasksCompleted: (isChecked: boolean) => void,
  deleteTask: (contentTask: string, isChecked: boolean) => void,
}

export function Tasks({ contentTask, changeTasksCompleted, deleteTask }: Props) {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setIsTaskCompleted(e.target.checked)
    changeTasksCompleted(e.target.checked)
  }

  function handleClick() {
    deleteTask(contentTask, isTaskCompleted)
  }

  return (
    <TaskStyle >
      <input
        type="checkbox"
        name="task-created"
        id="task-created"
        onChange={handleChange}
        checked={isTaskCompleted}
      />

      <p>{contentTask}</p>
      <Trash
        size={15}
        weight="bold"
        onClick={handleClick}
        color="var(--gray-300)"
      />
    </TaskStyle>
  )
}