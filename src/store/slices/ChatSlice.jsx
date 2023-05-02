import { createSlice } from "@reduxjs/toolkit";
import { chatApi } from "../../api/api";

// Define a new slice of the Redux store called "alert"
const ChatSlice = createSlice({
	name: "chat",
	initialState: {
		chat: [],
		updateMessage: 1,
	},
	reducers: {
		setLastMessage(state, action) {
			state.chat.push(action.payload);
		},
		updateMessageOnClient(state,action){
			state.updateMessage += 1
		},
		clearChat(state,action){
			state.chat=[];
		}
	},
	// Define the reducers for the slice
	extraReducers: (builder) => {
		builder.addCase(chatApi.fulfilled, (state, action) => {
			state.chat = action.payload;
		});

		builder.addCase(chatApi.rejected, (state, action) => {});
	},
});

export const { setLastMessage, updateMessageOnClient, clearChat } = ChatSlice.actions; 
export default ChatSlice.reducer;
