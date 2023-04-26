import React from "react";
import "./Home.scss";
import {Link, Outlet} from "react-router-dom";

const Home = () => {
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
				<Outlet/>
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
