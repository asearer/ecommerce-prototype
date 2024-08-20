
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Adjusted path based on your provided code
import userReducer from './userSlice'; // Adjusted path based on your provided code

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer, // Ensure userReducer is properly defined in userSlice
  },
});

export default store;

