// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    address: '',
    orders: []
  },
  reducers: {
    updateUser: (state, action) => {
      const { name, email, address } = action.payload;
      state.name = name;
      state.email = email;
      state.address = address;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    }
  }
});

export const { updateUser, setOrders } = userSlice.actions;
export default userSlice.reducer;
