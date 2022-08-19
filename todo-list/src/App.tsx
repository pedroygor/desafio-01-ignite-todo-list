import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { InsertTasks } from './Components/InsertTasks'
import { TaskBoard } from './Components/TaskBoard';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState(0)

  function getTasks(task: string): void {
    setTasks((state: string[]) => {
      return [...state, task]
    })
  }

  function changeTasksCompleted(isChecked: boolean) {
    if(isChecked) {
      setTasksCompleted((state) => {
        return state + 1
      })
    } else {
      setTasksCompleted((state) => {
        return state - 1
      })
    }
  } 

  function deleteTask(contentTask: string, isChecked: boolean) {
    isChecked && setTasksCompleted((state) => state - 1)
    setTasks((state) => {
      const newTasks = state.filter((task) => task !== contentTask)
      return [...newTasks]
    })
  }

  return (
    <div className="App">
      <Header />
      <InsertTasks 
        getTasks={getTasks}
      />

      <TaskBoard
        numberOfTaksCreated={tasks.length}
        numberOfTaksCompleted={tasksCompleted}
        tasks={tasks}
        changeTasksCompleted={changeTasksCompleted}
        deleteTask={deleteTask}
      />
    </div>
  )
}

export default App
