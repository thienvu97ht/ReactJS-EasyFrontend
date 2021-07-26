const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
  name: 'uesr',
  initialState: {
    current: {},
    setting: {},
  },
  reducers: {},
});

const { reducer } = userSlice;
export default reducer;
