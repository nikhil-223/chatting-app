import { configureStore } from "@reduxjs/toolkit";

import {
	AlertSlice,
	ChatSlice,
	ConnectionsSlice,
	ConversationsSlice,
	LoginSlice,
	MessageSlice,
	UserSlice,
} from "./slices";

const store = configureStore({
	reducer: {
		alert: AlertSlice,
		login: LoginSlice,
		user: UserSlice,
		chat: ChatSlice,
		connections: ConnectionsSlice,
		conversations: ConversationsSlice,
		messages: MessageSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
