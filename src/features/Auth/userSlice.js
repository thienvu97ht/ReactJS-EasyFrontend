import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';

const register = createAsyncThunk('uesr/register', async (payload) => {
  // call API to register
  const data = await userApi.register(payload);

  // Save data to local storage
  localStorage.setItem('access_token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));

  // Return user data
  return data.user;
});

const userSlice = createSlice({
  name: 'uesr',
  initialState: {
    current: {},
    setting: {},
  },
  reducers: {},
  extraReducer: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;
export default reducer;
