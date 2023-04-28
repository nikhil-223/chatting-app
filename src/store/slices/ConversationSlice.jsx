import { createSlice } from "@reduxjs/toolkit";
import { conversationApi } from "../../api/api";

// Define a new slice of the Redux store called "alert"
const ConversationSlice = createSlice({
	name: "conversation",
	initialState: {
		conversations: [],
		message: "",
	},
	// Define the reducers for the slice
	extraReducers: (builder)=>{
		// Define an action called "setAlert"
		builder.addCase(conversationApi.fulfilled,(state,action)=>{
			state.conversations= action.payload;
		})
	},
});

export const { setAlert } = ConversationSlice.actions;
export default ConversationSlice.reducer;
