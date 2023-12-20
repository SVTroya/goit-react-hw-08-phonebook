import { createSlice } from '@reduxjs/toolkit'
import { addContact, fetchContacts, removeContact } from './operations'

const contactsBookInitialState = {
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

const contactsBookSlice = createSlice({
  name: 'contactsBook',
  initialState: contactsBookInitialState,
  reducers: {
    setFilterValue: (state, action) => {
      state.filter = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        handleFulfilled(state)
        state.contacts.items = action.payload
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        handleFulfilled(state)
        state.contacts.items.push(action.payload)
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.fulfilled, (state, action) => {
        handleFulfilled(state)
        const index = state.contacts.items.findIndex(contact => contact.id === action.payload)
        state.contacts.items.splice(index, 1)
      })
      .addCase(removeContact.rejected, handleRejected)
  }
})

export const { setFilterValue } = contactsBookSlice.actions
export const contactsBookReducer = contactsBookSlice.reducer
