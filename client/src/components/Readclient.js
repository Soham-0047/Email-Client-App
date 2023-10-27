import React from 'react'
import { useSelector } from 'react-redux'

const Readclient = () => {

  const client = useSelector((state) =>state.todos)
  console.log(client)


  return (
    <div>
      {client.map((e) =>(
        <h1 key={e.id}>{e.text}</h1>
      ))}
    </div>
  )
}

export default Readclient