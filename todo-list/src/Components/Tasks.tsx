import React from "react";
import {Trash} from 'phosphor-react'

export function Tasks(contentTask: string){
  return(
    <div>
      <input type="checkbox" name="task" id="task" />
      <p>{contentTask}</p>
      <Trash />
    </div>
  )
}