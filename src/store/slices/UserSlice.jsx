import { createSlice } from "@reduxjs/toolkit";
import { signup } from "../../api/api";

// Define a new slice of the Redux store called "alert"
const UserSlice = createSlice({
	name: "user",
	initialState: {
		token: "",
		isError: false,
	},
	extraReducers: (builder) => {
		// Case to handle successful data fetch
		builder.addCase(signup.fulfilled, (state, action) => {
			if (action.payload.token) {
				localStorage.setItem("token", action.payload.token);
				state.token = action.payload.token;
				state.isError = false;
			} else {
				state.isError = true;
				state.token = "";
			}
		});

		builder.addCase(signup.rejected, (state, action) => {
			console.log(action.payload);
		});

		builder.addCase(signup.pending, (state, action) => {
			state.isError = false;
			state.token = "";
		});
	},
});

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
