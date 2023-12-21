import { createSlice } from '@reduxjs/toolkit'
import { logInThunk, logOutThunk, refreshUser, registerThunk } from './operations'

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false
}

function handleLogIn(state, { payload }) {
  state.user = payload.user
  state.token = payload.token
  state.isLoggedIn = true
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, handleLogIn)
      .addCase(logInThunk.fulfilled, handleLogIn)
      .addCase(logOutThunk.fulfilled, (state) => {
        state.user = { name: null, email: null }
        state.token = null
        state.isLoggedIn = false
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
  }
})

export const authReducer = authSlice.reducer
