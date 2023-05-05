import React, { useEffect } from "react";
import { useAppSelector } from "../../store/storeAccess";
import PersonalChat from "./PersonalChat";
import { conversationsApi } from "../../api/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChatLogs = () => {
	const { conversations, token } = useAppSelector();
	const dispatch = useDispatch();
	let history = useNavigate();

	useEffect(() => {
		if (token) {
			dispatch(conversationsApi(token));
		} else {
			history("/login");
		}
	}, [token, dispatch, history]);

	return (
		<section className="chat_logs_convo">
			<div className="chat_logs_convo_item global_chat">
				<span className="profile_photo_chat">G</span> Global Chats
			</div>
			{conversations.isLoading === true ? (
				<div className="loader">
					<img src="https://i.gifer.com/Vp3R.gif" alt="loader" />
				</div>
			) : (
				conversations.data.map((item, i) => {
					return (
						<PersonalChat
							key={i}
							name={item.chatter[0].name}
							lastMessage={item.lastMessage}
							id={item.chatter[0]._id}
						/>
					);
				})
			)}
		</section>
	);
};

export default ChatLogs;
