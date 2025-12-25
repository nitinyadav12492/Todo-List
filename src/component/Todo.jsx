import React from 'react'

const Todo = ({todo, index ,deleteTodo}) => {
  return (
    <div>
       <div className='todo'>
              <p>{todo}</p>
     <div className="action">
            <input type="checkbox" />
               <button onClick={()=>deleteTodo(index)}>delete</button>
      </div>
    </div>
    </div>
  )
}

export default Todo