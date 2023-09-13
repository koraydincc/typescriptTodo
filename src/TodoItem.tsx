import React from 'react'
import {type} from 'os'
import { todoType } from './apptypes'

type PropsType={
  task: todoType
  deleteTask(nameToDelete:string):void
}

function TodoItem({task, deleteTask}:PropsType) {
  return (
    <div>
      <div className='card'>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <button onClick={()=>deleteTask(task.taskName)}>Sil</button>
      </div>
    </div>
  )
}

export default TodoItem
