import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

export const authSlice = createSlice({
    name: 'auth',
    initialState :{
      currentUser:null,
      loading: false,
      error:false,
      isAdmin:false,
      token:null,
    },
    reducers :{

    }
})

export const {}  = authSlice.actions

export default authSlice.reducer