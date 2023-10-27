import React, { useEffect } from 'react'
import Emaillist from './Emaillist'
import { useDispatch } from 'react-redux'
import {fetchEmails} from '../actions/emailactions'
import Filteroptions from './Filteroptions'
import Emailbody from './Emailbody'
const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchEmails())
  }, [dispatch])
  return ( 
    <main>
      <Filteroptions/>
      <Emaillist/>
      <Emailbody/>
    </main>
  )
}

export default Layout