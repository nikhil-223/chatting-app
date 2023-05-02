import { createAsyncThunk } from "@reduxjs/toolkit";

export const signup = createAsyncThunk(
	"signup",
	async ({ name, username, password, password2 }) => {
		const response = await fetch(`http://localhost:5000/api/users/register`, {
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

export const loginApi = createAsyncThunk(
	"loginApi",
	async ({ username, password }) => {
		const response = await fetch(`http://localhost:5000/api/users/login`, {
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
export const connectionsApi = createAsyncThunk(
	"connectionsApi",
	async (JWTtoken) => {
		const response = await fetch(`http://localhost:5000/api/users/`, {
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
export const conversationsApi = createAsyncThunk(
	"conversationsApi",
	async (JWTtoken) => {
		const response = await fetch(
			`http://localhost:5000/api/messages/fetchConversationList`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					auth: JWTtoken,
				},
			}
		);
		// Convert the response to a JSON object and return it
		return response.json();
	}
);

export const chatApi = createAsyncThunk("chatApi", async (to) => {
	try {
		const response = await fetch(
			`http://localhost:5000/api/messages/fetchMessages/query?to=${to}`,
			{ 
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					auth: localStorage.getItem("token"),
				}
			}
		);
		return response.json();
	} catch (error) {
		console.log(error);
	}
});

export const sendMessageApi = createAsyncThunk(
	"sendMessageApi",
	async ({ reciever, message }) => {
		
		const response = await fetch(
			`http://localhost:5000/api/messages/personalMessage`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					auth: localStorage.getItem("token"),
				},
				body: JSON.stringify({
					reciever,
					message,
				}),
			}
		);
		// Convert the response to a JSON object and return it
		return response.json();
	}
);