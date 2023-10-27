import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState = {

    todos:[{id:1,text:'Soham'}],

}

export const slice = createSlice({

    name:'client app',
    initialState,
    reducers:{

        addClient: (state,action) =>{
            const todo = {
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
        },

        removeClient: (state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})


export const {addClient,removeClient} = slice.actions;

export default slice.reducer;

