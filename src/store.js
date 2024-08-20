// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Ensure this path is correct
import userReducer from './userSlice'; // Include userReducer if used

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer, // Add user reducer if needed
  },
});

export default store;
