import { createSlice } from "@reduxjs/toolkit";
import {  sendMessageApi } from "../../api/api";

// Define a new slice of the Redux store called "alert"
const MessageSlice = createSlice({
	name: "messages",
	initialState: {
		message: "",
		reciever:{
			userId:"",
			userName:""
		},
	},
	reducers: {
		setReciver(state,action){
			state.reciever.userId= action.payload.userId
			state.reciever.userName= action.payload.userName
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
