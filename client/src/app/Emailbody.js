import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { markAsFavorite } from '../actions/emailactions';

const Emailbody = () => {

  const selectedEmail = useSelector((state) => state.selectedEmail);
  const dispatch = useDispatch();

  if (!selectedEmail) {
    return <div className="email-body">Select an email to view its content.</div>;
  }
  return (
    <main>
      <h2>{selectedEmail.subject}</h2>
      <p>From: {selectedEmail.from}</p>
      <p>Date: {selectedEmail.date}</p>
      <p>{selectedEmail.body}</p>
      <button
        onClick={() => dispatch(markAsFavorite(selectedEmail.id))}
        disabled={selectedEmail.isFavorite}
      >
        Mark as Favorite
      </button>
    </main>
  )
}

export default Emailbody