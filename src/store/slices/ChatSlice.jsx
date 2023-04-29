import { createSlice } from "@reduxjs/toolkit";
import { chatApi } from "../../api/api";

// Define a new slice of the Redux store called "alert"
const ChatSlice = createSlice({
	name: "chat",
	initialState: {
		chat: [],
	},
	// Define the reducers for the slice
	extraReducers: (builder) => {
        
		builder.addCase(chatApi.fulfilled, (state, action) => {
			state.chat = action.payload;
		});

		builder.addCase(chatApi.rejected, (state, action) => {
           
		});
	},
});

export default ChatSlice.reducer;
