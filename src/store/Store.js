import { configureStore } from "@reduxjs/toolkit";

import { AlertSlice, ConversationSlice, LoginSlice, MessageSlice, UserSlice } from "./slices";



const store = configureStore({
	reducer: {
		alert:AlertSlice,
		login:LoginSlice,
		user: UserSlice,
		coversation: ConversationSlice,
		messages: MessageSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
