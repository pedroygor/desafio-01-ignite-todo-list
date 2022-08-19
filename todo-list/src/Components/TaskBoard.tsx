import React from "react";
import { Tasks } from "./Tasks";

interface infoTasks {
  numberOfTaksCreated: number, 
  numberOfTaksCompleted: number, 
  tasks: string[],
  changeTasksCompleted: (isChecked: boolean) => void,
  deleteTask: (contentTask: string, isChecked: boolean) => void,
}

export function TaskBoard({numberOfTaksCreated, numberOfTaksCompleted, tasks, 
  changeTasksCompleted, deleteTask} :infoTasks) {
  return(
    <section>
      <div>
        <div>
          <span>Tarefas criadas</span>
          <span>{numberOfTaksCreated}</span>
        </div>
        <div>
          <span>Concluídas</span>
          <span>{numberOfTaksCompleted === 0 ? 0 :  `${numberOfTaksCompleted} de ${numberOfTaksCreated}`}</span>
        </div>
      </div>
      {tasks.map((item) => (
        <Tasks 
          key={item}
          contentTask={item}
          changeTasksCompleted={changeTasksCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </section>
  )
}