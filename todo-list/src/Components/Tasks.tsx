import React, { useState } from "react";
import {Trash} from 'phosphor-react'

interface Props {
  contentTask: string,
  changeTasksCompleted: (isChecked: boolean) => void,
  deleteTask: (contentTask: string, isChecked: boolean) => void,
}

export function Tasks({ contentTask, changeTasksCompleted, deleteTask }: Props){
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setIsTaskCompleted(e.target.checked)
    changeTasksCompleted(e.target.checked)
  }

  function handleClick() {
    deleteTask(contentTask, isTaskCompleted)
  }

  return(
    <div>
      <input 
        type="checkbox"
        name="task"
        id="task" 
        onChange={handleChange}
        checked={isTaskCompleted}
      />
      <p>{contentTask}</p>
      <Trash 
        onClick={handleClick}
      />
    </div>
  )
}