import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './modules/todoSlice'
import visibilityFilterReducer from "./modules/visibilityFilterSlice";

const store = configureStore({
    reducer:{
        todo:todoReducer,
        visibilityFilter:visibilityFilterReducer
    }
})

export default store