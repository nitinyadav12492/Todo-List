import React from 'react'
import Todo from './Todo'

const TodoContainer = ({ todos , deleteTodo}) => {
  return (
    <div className='container'>
      {
        todos.map((todo, index) => (
          <Todo index={index} todo={todo} deleteTodo={deleteTodo} />
        ))
      }
    </div>
  )
}

export default TodoContainer
