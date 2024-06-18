import { createSlice } from "@reduxjs/toolkit";

const initialState= [{
    id: 0,
    text: '吃饭',
    completed: false
}]

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo(state,action){
            state.push(action.payload)
        },
        completeTodo(state,action){
            const todo = state.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo(state,action){
            state.pop(todo => todo.id === action.payload)
        },
        editTodo(state,action){
            const todo = state.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        }
    }
})

const {addTodo, completeTodo, deleteTodo, editTodo} = todoSlice.actions

export {addTodo, completeTodo, deleteTodo, editTodo}
export default todoSlice.reducer