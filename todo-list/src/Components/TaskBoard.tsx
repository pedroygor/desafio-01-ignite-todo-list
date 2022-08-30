import React from "react";
import { Tasks } from "./Tasks";
import styled from 'styled-components'

const TaskBoardContainerStyle = styled.section`
  height: 80%;
  color: var(--gray-100);
  background: var(--gray-500);
  padding-top: 5.7rem;
`

const TaskBoardStyle = styled.div`
    width: 46rem;
    height: 18rem;
    margin: 0 auto;
`

const HeaderBoardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: var(--blue);
  margin-bottom: 1.5rem;
`

const InfoTask = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 1.15rem;
  align-items: center;
  span {
    font-weight: 700;
    color: ${ (props: { purple?: boolean }) => props.purple && "var(--purple)" };
  }
`

const Count = styled.span`
  background: var(--gray-400);
  padding: 2px 8px;
  border-radius: 999px;
`

const ContentTaskStyle = styled.section`
  width: 100%;
  border-top: 1px solid var(--gray-400);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`

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
    <TaskBoardContainerStyle>
      <TaskBoardStyle>
        <HeaderBoardStyle>
          <InfoTask>
            <span>Tarefas criadas</span>
            <Count>{numberOfTaksCreated}</Count>
          </InfoTask>
          <InfoTask purple>
            <span>Concluídas</span>
            <Count>{numberOfTaksCompleted === 0 ? 0 :  `${numberOfTaksCompleted} de ${numberOfTaksCreated}`}</Count>
          </InfoTask>
        </HeaderBoardStyle>
        <ContentTaskStyle>
          {tasks.map((item) => (
            <Tasks 
            key={item}
            contentTask={item}
            changeTasksCompleted={changeTasksCompleted}
            deleteTask={deleteTask}
            />
            ))}
        </ContentTaskStyle>
        </TaskBoardStyle>
    </TaskBoardContainerStyle>
  )
}