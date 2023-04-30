import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { connectionsApi, sendMessageApi } from "../../api/api";
import { useDispatch } from "react-redux";
import ChatBox from "./ChatBox";
import { BsFillSendFill } from "react-icons/bs";
import { useAppSelector } from "../../store/storeAccess";
import { updateMessageOnClient } from "../../store/slices/ChatSlice";

const Home = () => {
	const { reciever } = useAppSelector();

	let history = useNavigate();
	const dispatch = useDispatch();
	const token = localStorage.getItem("token");
	useEffect(() => {
		if (token) {
			dispatch(connectionsApi(token));
		} else {
			history("/login");
		}
	}, [token, dispatch, history]);

	//show menu
	const showMenu = () => {
		const menuDisplay = document.querySelector(".chat_logs_search_profile_menu")
			.style.display;
		menuDisplay === "none"
			? (document.querySelector(
					".chat_logs_search_profile_menu"
			  ).style.display = "flex")
			: (document.querySelector(
					".chat_logs_search_profile_menu"
			  ).style.display = "none");
	};

	// handle Log Out
	const handleLogOut = () => {
		localStorage.removeItem("token");
		history("/login");
	};

	// sendMessageInput

	const [sendMessageInput, setSendMessageInput] = useState("");
	const handleSendMessageInput = (e) => {
		setSendMessageInput(e.target.value);
	};

	// send message button
	const handleSendMessage = () => {
		dispatch(sendMessageApi({ reciever, message: sendMessageInput }));
		dispatch(updateMessageOnClient())
		
			const elem = document.querySelector(".chat_box_chatArea");
			setTimeout(() => {
				elem.scrollTop = elem.scrollHeight;
			}, 50);
	};


	return (
		<section id="home" className="chat">
			{/* chat logs on left */}
			<div className="chat_logs">
				<header className="chat_logs_search">
					<input type="text" name="search" placeholder="Search" />
					<div className="chat_logs_search_profile" onClick={showMenu}>
						<ul
							style={{ display: "none" }}
							className="chat_logs_search_profile_menu">
							<li>Profile</li>
							<li onClick={handleLogOut}>Log out</li>
							<li>Settings</li>
						</ul>
					</div>
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
				<ChatBox />
				<section className="chat_box_messageInput">
					<input
						type="text"
						value={sendMessageInput}
						placeholder="enter the message"
						onChange={handleSendMessageInput}
					/>
					<button
						className="chat_box_messageInput_sendButton"
						onClick={handleSendMessage}>
						<BsFillSendFill />
					</button>
				</section>
			</div>
		</section>
	);
};

export default Home;
