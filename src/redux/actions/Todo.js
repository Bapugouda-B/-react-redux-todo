import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./Types.js";

//add todo action - (basically it is an object)
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo, //data payload
});

//delete todo action
export const deleteTodo =(id)=>({
    type: DELETE_TODO,
    payload: id
})

//update todo action
export const updateTodo =(todo,id)=>({
    type: UPDATE_TODO,
    payload: {todo:todo, todoId:id}
})