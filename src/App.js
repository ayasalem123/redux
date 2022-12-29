import './App.css';
import { donearray,done,add,Delete,edit } from './redux/reducer';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';

function App() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.list.todolist)
 
  const [todo,setTodo]=useState("")
  const [el,setEl]=useState("")
  const [value,setValue]=useState("")
  const [but,setBut]=useState("add")
  const handleChange=(event)=>{
    event.preventDefault()
      setTodo(event.target.value)
      setValue(event.target.value)
  
  }
  const submit=(event)=>{
    event.preventDefault()
    dispatch(add(todo))
    
  }
  console.log(todo)
  const handlevalue=(event)=>{
    event.preventDefault()
    dispatch(edit({id:el.id,todo:todo}))
    setValue(el.val)
    setBut("add")
    
  }
  return (
    <div className="App">
      <form onSubmit={but=="add"?submit:handlevalue}>
      <input value={value} onChange={handleChange} placeholder></input>
      <button type='submit' >{but}</button>
      </form>
      <button onClick={()=> dispatch(donearray())}>filter done</button>
     
      <ol>
        {todos.map((el)=>{return <div><li>{el.val}<button onClick={()=> dispatch(Delete(el.id))}> 
        delete</button><button onClick={()=>{setEl(el);setBut("ok") } }>edit</button> </li> 
        <button onClick={()=> dispatch(done(el.id))}>done</button></div>})}
      </ol>
    </div>
  );
}

export default App;
