import { createSlice } from "@reduxjs/toolkit";
import { conversationsApi } from "../../api/api";

// Define a new slice of the Redux store called "alert"
const ConversationsSlice = createSlice({
	name: "conversations",
	initialState: {
		conversations: [],
	},
	// Define the reducers for the slice
	extraReducers: (builder) => {
		builder.addCase(conversationsApi.fulfilled, (state, action) => {
			state.conversations = action.payload;
		});
	},
});

export default ConversationsSlice.reducer;
