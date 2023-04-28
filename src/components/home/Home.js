import React, { useEffect } from "react";
import "./Home.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { conversationApi } from "../../api/api";
import { useDispatch } from "react-redux";

const Home = () => {
	let history = useNavigate();
	const dispatch = useDispatch();
	const token = localStorage.getItem("token");
	useEffect(() => {
		if (token) {
			dispatch(conversationApi(token));
		} else {
			history("/login");
		}
	}, [token, dispatch]);

	return (
		<section id="home" className="chat">
			{/* chat logs on left */}
			<div className="chat_logs">
				<header className="chat_logs_search">
					<input type="text" name="search" placeholder="Search" />
					<div className="chat_logs_search_profile"></div>
				</header>
				<div className="chat_logs_switch">
					<Link
						to="global-chat"
						className="chat_logs_switch_item chat_logs_switch_globchat">
						{" "}
						Global Chat
					</Link>
					<Link
						to="personal-chats"
						className="chat_logs_switch_item chat_logs_switch_personchat">
						{" "}
						Personal chats
					</Link>
				</div>
				<Outlet />
			</div>

			{/* chat box on right */}
			<div className="chat_box">
				<header className="chat_box_info">
					<div className="chat_box_info_profile"></div>
				</header>
				<section className="chat_box_chatArea"></section>
				<section className="chat_box_messageInput"></section>
			</div>
		</section>
	);
};

export default Home;
