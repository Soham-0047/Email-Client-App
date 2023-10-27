import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';


import { selectEmail, markAsFavorite, fetchEmails } from '../actions/emailactions';

import { setFilter } from '../actions/filteractions';
import Emailitem from './Emailitem';

import './appstyle/emailist.css'

const Emaillist = () => {

  const emails = useSelector((state) => state.emails);

  const selectedEmail = useSelector((state) => state.selectedEmail);
  const filter = useSelector((state) => state.filter);
  const [emailContent, setEmailContent] = useState([]);


  const dispatch = useDispatch();


  // useEffect(() => {
  //   dispatch(fetchEmails());
  //   // Fetch and load all emails when the component mounts



  // }, [dispatch]);


  useEffect(() => {

    const fetchEmailContent = async () => {
      try {
        const response = await fetch(`https://flipkart-email-mock.now.sh`); // Replace with your API URL
        const data = await response.json();
        
        // setEmailContent(data);
        const emailsArray = Array.isArray(data) ? data : data.list;

        dispatch(fetchEmails(emailsArray))
        setEmailContent(emailsArray);
        console.log(emailsArray)
        // setEmailContent(data);

        console.log(data.list)
        console.log(data.data)
        dispatch(setFilter('all'));

      } catch (error) {
        console.error('Error fetching email content:', error);
      }
    };

    fetchEmailContent()

    
  }, [dispatch])




console.log("After fetchemails",emailContent)


  const filterEmails = (filter) => {
    switch (filter) {
      case 'all':
        return emails;
      case 'favorites':
        return emails.filter((email) => email.isFavorite);
      case 'read':
        return emails.filter((email) => email.isRead);
      case 'unread':
        return emails.filter((email) => !email.isRead);
      default:
        return emails;
    }
  };

  const filteredEmails = filterEmails(filter);

  // const filterem = useSelector((state) => state.emails)

  

  const handleSelectEmail = (email) => {
    dispatch(selectEmail(email));

  };

  const handleMarkAsFavorite = (emailId) => {
    dispatch(markAsFavorite(emailId));
    // After marking as favorite, change the filter to "Favorites"
    dispatch(setFilter('favorites'));
  };
  console.log("Here",filteredEmails)
  return (


    <main className="email-list">

  
      <aside className='sidebar'>
      <section>
        {emailContent.length > 0 ?
          (emailContent.map((email, index) => (
            <Emailitem 
            key={email.id} 
            email={email}
            handleSelectEmail={handleSelectEmail}
            handleMarkAsFavorite={handleMarkAsFavorite}
            selectedEmailId={selectedEmail?.id}
            />
         
          ))) : (<p>Loading..</p>)}

      </section>
      </aside>


      <section className="right">
        <h2>Welcome</h2>
      </section>


{/* <aside className="sidebar">
        <section>
          {filteredEmails.length > 0 ? (
            filteredEmails.map((email) => (
              <Emailitem
                key={email.id}
                email={email}
                handleSelectEmail={handleSelectEmail}
                handleMarkAsFavorite={handleMarkAsFavorite}
                selectedEmailId={selectedEmail?.id}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </aside>
      <section className="right">
        <h2>Welcome</h2>
      </section> */}


    </main>
  )
}

export default Emaillist

/* {selectedEmail && (
      <div className="email-content">
        <h1>{selectedEmail.subject}</h1>
        <p>From: {selectedEmail.from}</p>
        <p>Date: {selectedEmail.date}</p>
        <div dangerouslySetInnerHTML={{ __html: selectedEmail.body }} />
      </div>
    )} */