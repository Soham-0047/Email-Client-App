import React from 'react'
import './appstyle/emailitem.css'


const Emailitem = ({ email, handleSelectEmail, handleMarkAsFavorite, selectedEmailId }) => {

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };


  return (
    <main className="email-item-upper">

      <section className='email-item-wrap'>
        <section className='email-item'>

          <section className='email-item-left'>
            <span id="pro">{email.from.name.charAt(0).toUpperCase()}</span>
          </section>


          <section className='email-item-right'>
            <p>From: {email.from.name}  <span>&lt;{email.from.email}&gt; </span> </p>
            <p>Subject: <span>{email.subject}</span></p>
            <p>From: {email.short_description}</p>
            <p>{formatDate(email.date)}  10.30am


            </p>
          </section>



        </section>

      </section>

      {/* <button onClick={() => handleSelectEmail(email)}>Select</button> */}
     
    </main>

  )
}

export default Emailitem