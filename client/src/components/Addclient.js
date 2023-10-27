import React, { useState } from 'react'

import {useDispatch} from 'react-redux'
import { addClient } from '../features/slice'

const Addclient = () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addClientHandler = (e) =>{
        e.preventDefault()
        dispatch(addClient(input))
        setInput('')
    }

  return (
    <>
    <form onSubmit={addClientHandler}>
        <input type='text' placeholder='Enter Client'
        value={input}
        onChange={(e) => setInput(e.target.value)}></input>

        <button type="submit">
           send 
        </button>
    </form>
    
    </>
  )
}

export default Addclient