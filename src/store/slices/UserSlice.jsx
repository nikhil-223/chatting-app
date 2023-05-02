import { createSlice } from "@reduxjs/toolkit";
import { loginApi, signup } from "../../api/api";

// Define a new slice of the Redux store called "alert"
const UserSlice = createSlice({
	name: "user",
	initialState: {
		token: "",
		userId:'',
		userName:"",
		isError: false,
	},
	extraReducers: (builder) => { 
		// Case to handle successful data fetch
		builder.addCase(signup.fulfilled, (state, action) => {
			if (action.payload.token) {
				localStorage.setItem("token", action.payload.token);
				localStorage.setItem("userId", action.payload.id);
				state.userId=action.payload.id;
				state.userName=action.payload.name;
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

		builder.addCase(loginApi.fulfilled, (state, action) => {
			if (action.payload.token) {
				localStorage.setItem("token", action.payload.token);
				localStorage.setItem("userId", action.payload.id);
				state.userId = action.payload.id;
				state.userName = action.payload.name;
				state.token = action.payload.token;
				state.isError = false;
			} else {
				state.isError = true;
				state.token = "";
				console.log("hello");
			}
		});

		builder.addCase(loginApi.rejected, (state, action) => {
			state.isError = true;
			state.token = "";
		});
	},
});

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
