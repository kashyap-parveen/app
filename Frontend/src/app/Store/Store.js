import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../useContext/userContext/userSlice.js"

export const Store = configureStore({
  reducer:{
    user:userReducer
  }
})


export default Store;





/*
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

*/
