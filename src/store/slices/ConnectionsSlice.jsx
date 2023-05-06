import { createSlice } from "@reduxjs/toolkit";
import { connectionsApi } from "../../api/api";


// Define a new slice of the Redux store called "alert"
const ConnectionSlice = createSlice({
	name: "connections",
	initialState: {
		data: [],
		isLoading:false,
		isError:false
	},
	// Define the reducers for the slice
	extraReducers: (builder)=>{
		// Define an action called "setAlert"
		builder.addCase(connectionsApi.fulfilled,(state,action)=>{
			if (typeof action.payload !== "string") state.data = action.payload;
			state.isLoading = false;
			state.isError = false;
		})

		builder.addCase(connectionsApi.pending, (state, action) => {
			state.data = []
			state.isLoading = true;
			state.isError = false;
		});

		builder.addCase(connectionsApi.rejected, (state, action) => {
			state.data = []
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export default ConnectionSlice.reducer;
