import { useState } from 'react'
import { Header } from './Components/Header'
import { InsertTasks } from './Components/InsertTasks'
import { TaskBoard } from './Components/TaskBoard';
import styled from 'styled-components';
import Global from './global';

const Main = styled.main`
  height: 100vh;
  width: 100%;
`

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
    <Main>
      <Global />
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
    </Main>
  )
}

export default App
