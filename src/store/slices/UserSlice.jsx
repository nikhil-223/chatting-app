import { createSlice } from "@reduxjs/toolkit";
import { loginApi, myDetails, signup } from "../../api/api";

// Define a new slice of the Redux store called "alert"
const UserSlice = createSlice({
	name: "user",
	initialState: {
		token: localStorage.getItem("token"),
		data:{},
		error:"",
		userId: "",
		userName: "",
		isError: false,
		isLoading: false,
	},
	extraReducers: (builder) => {
		// Case to handle successful data fetch
		builder.addCase(signup.fulfilled, (state, action) => {
			if (action.payload.token) {
				localStorage.setItem("token", action.payload.token);
				localStorage.setItem("userId", action.payload.id);
				localStorage.setItem("userName", action.payload.name);
				state.userId = action.payload.id;
				state.userName = action.payload.name;
				state.token = action.payload.token;
				state.isError = false;
				state.isLoading = false;
			} else {
				state.isError = true;
				state.error= action.payload.username
				state.token = "";
				state.isLoading = false;

			} 
		});

		builder.addCase(signup.pending, (state, action) => {
			state.token = "";
			state.isError = false;
			state.isLoading = true;
			state.error=''
		});

		builder.addCase(signup.rejected, (state, action) => {
			state.error = action.payload;
			state.isError = true;
			state.error=action.payload.username
			state.isLoading = false;
			state.token = "";
		});

		builder.addCase(loginApi.fulfilled, (state, action) => {
			if (action.payload.token) {
				localStorage.setItem("token", action.payload.token);
				localStorage.setItem("userId", action.payload.id);
				localStorage.setItem("userName", action.payload.name);
				state.userId = action.payload.id;
				state.userName = action.payload.name;
				state.token = action.payload.token;
				state.isError = false;
				state.isLoading=false
			} else {
				state.isError = true;
				state.token = "";
				console.log("hello");
			}
		});

		builder.addCase(loginApi.pending, (state, action) => {
			state.token = "";
			state.isError = false;
			state.error=''
			state.isLoading = true;
		});

		builder.addCase(loginApi.rejected, (state, action) => {
			state.error = action.payload;
			state.isError = true;
			state.isLoading = false;
			state.token = "";
		});

		builder.addCase(myDetails.fulfilled, (state, action) => {
			console.log(action.payload);
			state.data= action.payload[0]
			state.error = "";
			state.isError = false;
			state.isLoading = false;
		});


	},
});

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
