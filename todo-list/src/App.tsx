import { ChangeEvent, useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { InsertTasks } from './Components/InsertTasks'

function App() {
  const [inputTask, setInputTask] = useState('');

  function handleChangeInputTask(e: ChangeEvent<HTMLInputElement>) {
      setInputTask(e.target.value)
  }

  function handleClickButton() {
    alert('oie')
  }

  return (
    <div className="App">
      <Header />
      <InsertTasks 
        inputTask={inputTask}
        changeInputTask={handleChangeInputTask}
        handleClick={handleClickButton}
      />
    </div>
  )
}

export default App
