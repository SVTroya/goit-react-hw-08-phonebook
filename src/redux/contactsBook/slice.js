import { createSlice } from '@reduxjs/toolkit'
import { addContactThunk, fetchContactsThunk, removeContactThunk } from './operations'
import { logOutThunk } from '../auth/operations'

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },
  filter: ''
}

function handlePending(state) {
  state.contacts.isLoading = true
}

function handleFulfilled(state) {
  state.contacts.isLoading = false
  state.contacts.error = null
}

function handleRejected(state, action) {
  state.contacts.isLoading = false
  state.contacts.error = action.payload
}

const slice = createSlice({
  name: 'contactsBook',
  initialState,
  reducers: {
    setFilterValue: (state, action) => {
      state.filter = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, handlePending)
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        handleFulfilled(state)
        state.contacts.items = action.payload
      })
      .addCase(logOutThunk.fulfilled, (state, {payload})=>{
        state.contacts.items=[]
      })
      .addCase(fetchContactsThunk.rejected, handleRejected)

      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, (state, action) => {
        handleFulfilled(state)
        state.contacts.items.push(action.payload)
      })
      .addCase(addContactThunk.rejected, handleRejected)

      .addCase(removeContactThunk.pending, handlePending)
      .addCase(removeContactThunk.fulfilled, (state, action) => {
        handleFulfilled(state)
        const index = state.contacts.items.findIndex(contact => contact.id === action.payload)
        state.contacts.items.splice(index, 1)
      })
      .addCase(removeContactThunk.rejected, handleRejected)
  }
})

export const { setFilterValue } = slice.actions
export const contactsBookReducer = slice.reducer
