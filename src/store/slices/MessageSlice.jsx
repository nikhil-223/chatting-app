import { createSlice } from "@reduxjs/toolkit";
import {  sendMessageApi } from "../../api/api";

// Define a new slice of the Redux store called "alert"
const MessageSlice = createSlice({
	name: "messages",
	initialState: {
		message: "",
		reciever:"",
	},
	reducers: {
		setReciver(state,action){
			state.reciever= action.payload
		}
	},
	// Define the reducers for the slice
	extraReducers:(builder)=>{
		builder.addCase(sendMessageApi.fulfilled,(state,action)=>{
			
			state.message= action.payload.body
		})
	}
});

export const { setReciver } = MessageSlice.actions;
export default MessageSlice.reducer;
