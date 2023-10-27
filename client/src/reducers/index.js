import { combineReducers } from "@reduxjs/toolkit";
import emailreducer from "./emailreducer";
import filterreducer from "./filterreducer";


// const initialState = {
//     emails:[],
//     selectedEmail:null,
//     filter:'all',
// }
const rootReducer =  combineReducers({
    
    emails:emailreducer,
    filter:filterreducer,
//   preloadedState:initialState,
})

export default rootReducer