import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
const initialState = { count: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //  callback function here
    increment:(state,action:PayloadAction<number>)=>{
        state.count= state.count+action.payload;
    },
    decrement:(state,action:PayloadAction<number>)=>{
      state.count= state.count-action.payload;
    }
  },
});

export const{increment,decrement}= counterSlice.actions;
export default  counterSlice.reducer;