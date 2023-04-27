import { createSlice } from "@reduxjs/toolkit";

// Define a new slice of the Redux store called "alert"
const ConversationSlice = createSlice({
	name: "conversation",
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

export const { setAlert } = ConversationSlice.actions;
export default ConversationSlice.reducer;
