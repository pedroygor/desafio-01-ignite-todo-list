import React from "react";
import {PlusCircle} from 'phosphor-react'
import { ChangeEvent, useState } from 'react'

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
    <section>
      <input 
        type="text" 
        name="task" 
        id="task" 
        placeholder="Adicione uma nova Tarefa"
        value={inputTask}
        onChange={handleChangeInputTask}
      />
      <button 
      type="button"
      onClick={handleClickButton}
      >
        Criar 
        <PlusCircle />
     </button>
    </section>
  )
}