import React from "react";
import {PlusCircle} from 'phosphor-react'

interface PropsInsertTasks {
  handleClick: () => void,
  changeInputTask: () => void,
  inputTask: string,
}

export function InsertTasks({handleClick, inputTask, changeInputTask}: PropsInsertTasks) {
  return (
    <section>
      <input 
        type="text" 
        name="task" 
        id="task" 
        placeholder="Adicione uma nova Tarefa"
        value={inputTask}
        onChange={changeInputTask}
      />
      <button 
      type="button"
      onClick={handleClick}
      >
        Criar 
        <PlusCircle />
     </button>
    </section>
  )
}