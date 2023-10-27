import { createAction, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchEmails = createAsyncThunk('emails/fetchEmails', async () => {
  const response = await fetch('https://flipkart-email-mock.now.sh/');
  return response.json();
});

export const fetchEmailBody = createAsyncThunk('emails/fetchEmailBody', async (emailId) => {
  const response = await fetch(`https://flipkart-email-mock.now.sh/?id=${emailId}`);
  return response.json();
});


export const selectEmail = createAction('emails/selectEmail');
export const markAsFavorite = createAction('emails/markAsFavorite');