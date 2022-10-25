import React, { useState } from 'react'
import { CheckCircle, Trash, Circle } from 'phosphor-react'
import styled from 'styled-components'
import circle from '../assets/circle.svg'

const TaskStyle = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  gap: 12px;
  font-size: 0.875rem;
  line-height: 1;
  background: var(--gray-500);
  border: 1px solid var(--gray-400);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  width: 100%;
  height: 72px;

  div {
    width: 100%;
  }

  p {
    font-weight: 400;
    line-height: 140%;
    color: var(--gray-100);
  }

  input[type='checkbox']:checked ~ p {
    text-decoration: line-through;
    color: var(--gray-300);
  }
`

const ButtonTrashStyle = styled(Trash)`
  color: var(--gray-300);
  font-weight: bold;
  transition: color 0.2s;
  :hover {
    color: var(--danger);
  }
`

const CircleStyle = styled(Circle)`
  width: 20px;
  height: 20px;
  color: var(--gray-400);
  border-radius: 50%;
  background: var(--blue);
`
const CheckCircleStyle = styled(CheckCircle)`
  width: 20px;
  height: 20px;
  color: var(--purple-dark);
`

interface Props {
  contentTask: string
  changeTasksCompleted: (isChecked: boolean) => void
  deleteTask: (contentTask: string, isChecked: boolean) => void
}

export function Tasks({
  contentTask,
  changeTasksCompleted,
  deleteTask
}: Props) {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false)

  function handleChange(e: React.MouseEvent<any>): void {
    setIsTaskCompleted(!isTaskCompleted)
    changeTasksCompleted(!isTaskCompleted)
  }

  function handleClick() {
    deleteTask(contentTask, isTaskCompleted)
  }

  return (
    <TaskStyle>
      {isTaskCompleted ? (
          <CheckCircleStyle
            weight="fill"
            type="checkbox"
            name="task-created"
            id="task-created"
            onClick={handleChange}
          />
      ) : (
        <CircleStyle
          weight="fill"
          type="checkbox"
          name="task-created"
          id="task-created"
          onClick={handleChange}
        />
      )}

      <div>
        <p>{contentTask}</p>
      </div>
      <ButtonTrashStyle size={20} onClick={handleClick} />
    </TaskStyle>
  )
}
