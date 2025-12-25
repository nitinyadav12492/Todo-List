
import { useState } from 'react'
import './App.css'
import InputContainer from './component/InputContainer'
import TodoContainer from './component/TodoContainer'

function App() {
 
  const[value,setValue] = useState('')
   
const[todos,setTodos]=useState([])

  function addTodo(){
  if(value!=''){
    setTodos((prev)=>[...prev,value])
    setValue('')
  }
  }
  function deleteTodo(todoIndex){
    setTodos((prevTodos)=>prevTodos.filter((prevTodos,prevTodosIndex)=>{
 return prevTodosIndex!=todoIndex;
    }))
  }
  return (
    <>
     <div>
      <h1>To Do List</h1>
     </div>
    <InputContainer value={value} setValue={setValue} addTodo={addTodo}/>
    <TodoContainer todos={todos} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
