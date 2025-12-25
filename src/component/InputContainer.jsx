import React from 'react'

const InputContainer = ({value,setValue,addTodo}) => {
  return (
    <div className='input-container'>
      <input type="text" placeholder='add items ... ' value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={addTodo}>
        Add
      </button>
     </div>
  )
}

export default InputContainer