import React from "react";
import { Home, Login, Signup } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatLogs from "./components/home/ChatLogs";
import PersonalChats from "./components/home/PersonalChats";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="home" element={<Home />}>
					<Route path="global-chat" element={<ChatLogs />} />
					<Route path="personal-chats" element={<PersonalChats />} />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
