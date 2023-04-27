import { createSlice } from "@reduxjs/toolkit";

const AlertSlice = createSlice({
	name: "alert",
	initialState: {
		type: "",
		message: "",
	},
	reducers: {
		setAlert(state, action) {
			state.type = action.payload.type;
			state.message = action.payload.message;
		},
	},
});

export const { setAlert } = AlertSlice.actions;
export default AlertSlice.reducer;
