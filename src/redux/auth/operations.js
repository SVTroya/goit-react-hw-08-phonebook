import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

function setAuthHeader(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

function clearAuthHeader() {
  axios.defaults.headers.common.Authorization = ''
}

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials)
      setAuthHeader(data.token)
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message)
    }
  })

export const logInThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials)
      setAuthHeader(data.token)
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout')
      clearAuthHeader()
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
