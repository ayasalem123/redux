import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
export const todoSlice = createSlice({
    name: 'todolist',
    initialState:{
        todolist:[]
    },
    reducers: {
       add: (state,action) => {
        state.todolist=[...state.todolist,{id:uuidv4(),isDone:false,val:action.payload}]
       
      },
      Delete: (state,action) => {
        state.todolist= state.todolist.filter((el)=>el.id!==action.payload)
       
      },
      edit: (state,action) => {
        console.log(action.payload.todo)
        state.todolist= state.todolist.map((el)=>{
            if(el.id==action.payload.id)
            return {...el,val:action.payload.todo}
            return el
        })
       
      },
      done: (state,action) => {
        state.todolist= state.todolist.map((el)=>{
            if(el.id==action.payload)
            return {...el,isDone:!el.isDone}
            return el
        })
       
      },
      donearray:(state) => {
        state.todolist= state.todolist.filter((el)=>el.isDone==true)

        console.log(state.todolist)
       
      },
      
     
    },
  })
  

  export const { donearray,done,add,Delete,edit } =  todoSlice.actions
  
  export default todoSlice.reducer