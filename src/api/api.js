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
