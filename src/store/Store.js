import { configureStore } from "@reduxjs/toolkit";

import { AlertSlice, ChatSlice, ConnectionsSlice, LoginSlice, MessageSlice, UserSlice } from "./slices";




const store = configureStore({
	reducer: {
		alert:AlertSlice,
		login:LoginSlice,
		user: UserSlice,
		chat: ChatSlice,
		connections: ConnectionsSlice,
		messages: MessageSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
