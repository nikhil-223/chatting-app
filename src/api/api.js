import { createAsyncThunk } from "@reduxjs/toolkit";

const host = "https://chattingappbackend.onrender.com";
// const host = "http://localhost:5000";

// api call to register the user
export const signup = createAsyncThunk(
	"signup",
	async ({ name, username, password, password2 }) => {
		const response = await fetch(`${host}/api/users/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				username,
				password,
				password2,
			}),
		});
		// Convert the response to a JSON object and return it
		return response.json();
	}
);

// api call to login user
export const loginApi = createAsyncThunk(
	"loginApi",
	async ({ username, password }) => {
		const response = await fetch(`${host}/api/users/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});
		// Convert the response to a JSON object and return it
		return response.json();
	}
);

// api call to get all the users 
export const connectionsApi = createAsyncThunk(
	"connectionsApi",
	async (JWTtoken) => {
		const response = await fetch(`${host}/api/users/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				auth: JWTtoken,
			},
		});
		// Convert the response to a JSON object and return it
		return response.json();
	}
);

// api call to get all the chats user had
export const conversationsApi = createAsyncThunk(
	"conversationsApi",
	async (JWTtoken) => {
		const response = await fetch(`${host}/api/messages/fetchConversationList`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				auth: JWTtoken,
			},
		});
		// Convert the response to a JSON object and return it
		return response.json();
	}
);

// api call to get all the messages with an individual user
export const chatApi = createAsyncThunk("chatApi", async (to) => {
	const response = await fetch(
		`${host}/api/messages/fetchMessages/query?to=${to}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				auth: localStorage.getItem("token"),
			},
		}
	);
	return response.json();
});

// api call to send personal message to individual user
export const sendMessageApi = createAsyncThunk(
	"sendMessageApi",
	async ({ reciever, message }) => {
		const response = await fetch(`${host}/api/messages/personalMessage`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				auth: localStorage.getItem("token"),
			},
			body: JSON.stringify({
				reciever,
				message,
			}),
		});
		// Convert the response to a JSON object and return it
		return response.json();
	}
);
