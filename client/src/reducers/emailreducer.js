import { createSlice } from "@reduxjs/toolkit";

const emailSlice   =  createSlice({

    name:'emails',
    // initialState:[],

    initialState:[],
    reducers:{
        setEmails:(state,action) => action.payload,
        selectEmail: (state, action) => {
            state.selectedEmail = action.payload;
          },
        markAsFavourite: (state,action) =>{
            const emailId =  action.payload;
            return state.map((email) =>
            email.id === emailId ? { ...email,isFavourite:true} : email
            )
        }
    }
})


export const {setEmails,selectEmail,   markAsFavourite} =  emailSlice.actions

export default emailSlice.reducer

