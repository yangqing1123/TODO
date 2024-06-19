import { createSlice } from "@reduxjs/toolkit";
import undoable, { includeAction } from 'redux-undo';

const initialState= []

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
        },
        completeAllTodo(state){
            
        },
    }
})

const {addTodo, completeTodo, deleteTodo, editTodo, completeAllTodo} = todoSlice.actions
const undoableTodoReducer = undoable(todoSlice.reducer);

export {addTodo, completeTodo, deleteTodo, editTodo, completeAllTodo}
export default undoableTodoReducer