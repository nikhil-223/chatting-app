import { createSlice } from "@reduxjs/toolkit";

// Define a new slice of the Redux store called "alert"
const MessageSlice = createSlice({
	name: "messages",
	initialState: {
		type: "",
		message: "",
	},
	// Define the reducers for the slice
	reducers: {
		// Define an action called "setAlert"
		setUser(state, action) {
			// Update the state with the type and message values passed in the action payload
			state.type = action.payload.type;
			state.message = action.payload.message;
		},
	},
});

export const { setAlert } = MessageSlice.actions;
export default MessageSlice.reducer;
