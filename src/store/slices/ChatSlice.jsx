import { createSlice } from "@reduxjs/toolkit";
import { chatApi } from "../../api/api";

// Define a new slice of the Redux store called "alert"
const ChatSlice = createSlice({
	name: "chat",
	initialState: {
		data:[],
		isLoading:false,
		isError:false
	},
	reducers: {
		setLastMessage(state, action) {
			state.data.push(action.payload);
		},
		clearChat(state,action){
			state.data=[];
		}
	},
	// Define the reducers for the slice
	extraReducers: (builder) => {
		builder.addCase(chatApi.fulfilled, (state, action) => {
			state.data = action.payload;
			state.isLoading= false
			state.isError= false 
		});

		builder.addCase(chatApi.pending, (state, action) => {
			state.chat = [];
			state.isLoading= true
			state.isError= false
		});

		builder.addCase(chatApi.rejected, (state, action) => {
			state.isError = true
			state.isLoading= false
			state.data =[]
		});
	},
});

export const { setLastMessage, clearChat } = ChatSlice.actions; 
export default ChatSlice.reducer;
