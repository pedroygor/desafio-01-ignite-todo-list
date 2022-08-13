import React from "react";
import { Tasks } from "./Tasks";

interface infoTasks {
  numberOfTaksCreated: number, 
  numberOfTaksCompleted: number, 
  tasks?: []
}

export function TaskBoard({numberOfTaksCreated, numberOfTaksCompleted, tasks} :infoTasks) {
  return(
    <section>
      <div>
        <div>
          <span>Tarefas criadas:</span>
          <span>{numberOfTaksCreated}</span>
        </div>
        <div>
          <span>Tarefas criadas:</span>
          <span>{numberOfTaksCompleted}</span>
        </div>
      </div>
      
    </section>
  )
}