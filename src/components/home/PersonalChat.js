import React from "react";
import { useDispatch } from "react-redux";
import { chatApi } from "../../api/api";
import { setReciver } from "../../store/slices/MessageSlice";
import { useAppSelector } from "../../store/storeAccess";

const PersonalChat = (props) => {
	const { name, id, lastMessage } = props;
	const dispatch = useDispatch();

	const handleChatClick = () => {
		dispatch(chatApi(id));
		dispatch(
			setReciver({
				userId: id,
				userName: name.charAt(0).toUpperCase().concat(name.slice(1)),
			})
		);

		const elem = document.querySelector(".chat_box_chatArea");
		setTimeout(() => {
			elem.scrollTop = elem.scrollHeight;
		}, 50);
	};

	return (
		<div className="chat_logs_convo_item" onClick={handleChatClick}>
			<span className="profile_photo_chat">{name.charAt(0).toUpperCase()}</span>
			<div className="chat_logs_convo_item_info">
				<span className="chat_logs_convo_item_info_userName">
					{name.charAt(0).toUpperCase().concat(name.slice(1))}
				</span>
				<span className="chat_logs_convo_item_info_lastMessage">{lastMessage}</span>
			</div>
		</div>
	);
};

export default PersonalChat;
