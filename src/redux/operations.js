import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://6580bf4d3dfdd1b11c42098a.mockapi.io'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts')
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContactInfo, thunkAPI) => {
    try{
      const res = await axios.post('/contacts', newContactInfo)
      return res.data
    }
    catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId, thunkAPI) => {
    try{
      const res  = await axios.delete(`/contacts/${contactId}`)
      return res.data.id
    }
    catch (err) {
      return thunkAPI.rejectWithValue(err.message)
    }
  }
)

