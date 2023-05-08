import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
	myDetails,
	sendMessageApi,
} from "../../api/api";
import { useDispatch } from "react-redux";
import ChatBox from "./ChatBox";
import { BsFillSendFill } from "react-icons/bs";
import { useAppSelector } from "../../store/storeAccess";
import emptyChatIllustration from "../../images/emptyChatIllustration.svg";
import { FaArrowLeft } from "react-icons/fa";
import { clearChat } from "../../store/slices/ChatSlice";

const Home = () => {
	const { reciever,user} = useAppSelector();

	let history = useNavigate();
	const dispatch = useDispatch();

	const JWTtoken= localStorage.getItem('token') 
	useEffect(() => {
	  dispatch(myDetails(JWTtoken))
	}, [JWTtoken,dispatch])
	

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
		dispatch(clearChat());
		history("/login");
	};

	// sendMessageInput
	const [sendMessageInput, setSendMessageInput] = useState("");
	const handleSendMessageInput = (e) => {
		setSendMessageInput(e.target.value);
	};

	// send message function
	const sendMessage = () => {
		dispatch(
			sendMessageApi({ reciever: reciever.userId, message: sendMessageInput })
		);
		const elem = document.querySelector(".chat_box_chatArea");
		setTimeout(() => {
			elem.scrollTop = elem.scrollHeight;
		}, 50);
		setSendMessageInput("");
	};

	// send message button
	const handleSendMessage = () => {
		sendMessage();
	};

	// on key enter
	const handleKeyDown = (e) => {
		if (e.code === "Enter") {
			sendMessage();
		}
	};

	// back to chat logs
	const toChatLogs = () => {
		setTimeout(() => {
			document.querySelector(".chat_logs").style.display = "flex";
			document.querySelector(".chat_box").style.display = "none";
		}, 50);
		history("/home/personalChats");
	};

	return (
		<section id="home" className="chat">
			{/* chat logs on left */}
			<div className="chat_logs">
				<header className="chat_logs_search">
					<input
						type="text"
						name="search"
						placeholder="Search"
						autoComplete="off"
					/>
					<div className="chat_logs_search_profile " onClick={showMenu}>
						<div className="profile_photo">
							<img src={user.data.imageFile} alt="" />
							{/* {localStorage.getItem("userName").charAt(0).toUpperCase()} */}
						</div>
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
						to="personalChats"
						className="chat_logs_switch_item chat_logs_switch_globchat">
						{" "}
						Chats
					</Link>
					<Link
						to="connections"
						className="chat_logs_switch_item chat_logs_switch_personchat">
						{" "}
						Users
					</Link>
				</div>
				<Outlet />
			</div>

			{/* chat box on right */}
				<div className="chat_box" style={{display:"none"}}>
					<header className="chat_box_info">
						<div className="chat_box_info_profile" style={{ display: "flex" }}>
							<span
								className="chat_box_info_profile_backButton"
								onClick={toChatLogs}>
								<FaArrowLeft />
							</span>
							<div className=" profile_photo">
								<img src={reciever.image} alt="n" />
								{/* {reciever.userName.charAt(0)} */}
							</div>
						</div>
						<div className="chat_box_info_name">{reciever.userName}</div>
					</header>
					<ChatBox />
					<section className="chat_box_messageInput">
						<input
							type="text"
							value={sendMessageInput}
							placeholder="enter the message"
							onChange={handleSendMessageInput}
							onKeyDown={handleKeyDown}
						/>
						<button
							className="chat_box_messageInput_sendButton"
							onClick={handleSendMessage}>
							<BsFillSendFill />
						</button>
					</section>
				</div>
				<div className="emptyChatArea">
					<img src={emptyChatIllustration} alt="emptyChat" />
				</div>
		</section>
	);
};

export default Home;
