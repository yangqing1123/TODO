import { createSlice } from "@reduxjs/toolkit";

const visibilityFilterSlice = createSlice({
    name:'visibilityFilter',
    initialState:'All',
    reducers:{
        setVisibilityFilter(state,action){
            return action.payload
        }
    }
})


const {setVisibilityFilter} = visibilityFilterSlice.actions

export {setVisibilityFilter}
export default visibilityFilterSlice.reducer