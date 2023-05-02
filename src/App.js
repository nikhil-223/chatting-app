import React from "react";
import { Home, Login, Signup } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatLogs from "./components/home/ChatLogs";
import Connections from "./components/home/Conections";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="home" element={<Home />}>
					<Route path="personalChats" element={<ChatLogs />} />
					<Route path="connections" element={<Connections />} />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
