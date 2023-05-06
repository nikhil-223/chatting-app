import { createSlice } from "@reduxjs/toolkit";
import { conversationsApi } from "../../api/api";

// Define a new slice of the Redux store called "alert"
const ConversationsSlice = createSlice({
	name: "conversations",
	initialState: {
		data: [],
		isLoading: false,
		isError: false,
	},
	// Define the reducers for the slice
	extraReducers: (builder) => {
		builder.addCase(conversationsApi.fulfilled, (state, action) => {
			if (typeof action.payload !== "string") state.data = action.payload;
			state.isError = false;
			state.isLoading = false;
		});

		builder.addCase(conversationsApi.pending, (state, action) => {
			state.data = [];
			state.isLoading = true;
			state.isError = false;
		});

		builder.addCase(conversationsApi.rejected, (state, action) => {
			state.data = [];
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export default ConversationsSlice.reducer;
