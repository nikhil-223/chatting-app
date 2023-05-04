import { configureStore } from "@reduxjs/toolkit";

import {
	AlertSlice,
	ChatSlice,
	ConnectionsSlice,
	ConversationsSlice,
	MessageSlice,
	UserSlice,
} from "./slices";

const store = configureStore({
	reducer: {
		alert: AlertSlice,
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
