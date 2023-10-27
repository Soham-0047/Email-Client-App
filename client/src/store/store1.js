import {configureStore} from '@reduxjs/toolkit'
import slice from '../features/slice'

export const store1 = configureStore({

    //just an object

    reducer :slice,

})