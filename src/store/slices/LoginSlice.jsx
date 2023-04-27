import { createSlice } from "@reduxjs/toolkit";
import { loginApi } from "../../api/api";

const LoginSlice = createSlice({
	name: "login",
	initialState: {
        token:"",
        isError:false
    },
	extraReducers: (builder) => {
		builder.addCase(loginApi.fulfilled, (state, action) => {
			if (action.payload.token) {
				state.token = action.payload.token;
				state.isError = false;
			} else {
				state.isError = true;
				state.token = "";
			}
		});
	},
});

export default LoginSlice.reducer;
