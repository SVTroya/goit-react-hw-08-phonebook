import { createSelector } from '@reduxjs/toolkit'

export function selectContacts(state) {
  return state.contactsBook.contacts.items
}

export function selectIsLoading(state) {
  return state.contactsBook.contacts.isLoading
}

export function selectError(state) {
  return state.contactsBook.contacts.error
}

export function selectFilterValue(state) {
  return state.contactsBook.filter
}

export const selectVisibleContacts = createSelector([selectContacts, selectFilterValue], (contacts, filterValue) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
})
