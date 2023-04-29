import { createSlice } from "@reduxjs/toolkit";
import { connectionsApi } from "../../api/api";


// Define a new slice of the Redux store called "alert"
const ConnectionSlice = createSlice({
	name: "connections",
	initialState: {
		connections: [],
		message: "",
	},
	// Define the reducers for the slice
	extraReducers: (builder)=>{
		// Define an action called "setAlert"
		builder.addCase(connectionsApi.fulfilled,(state,action)=>{
			state.connections= action.payload;
		})
	},
});

export default ConnectionSlice.reducer;
