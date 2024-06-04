import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:[{
    username:"",
    email:"",
    fullName:""
  }]
}

const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
  setUserSlice:( state, action )=>{
  state.user = action.payload
  },
  clearUserSlice:( (state) =>{
  state.user = null
  })
}
});

export const { setUserSlice, clearUserSlice }  = userSlice.actions

export default userSlice.reducer
















/*
const initialState = {
  user:[
    {
        name:"",
        surname:""
    }
  ]
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;

*/
