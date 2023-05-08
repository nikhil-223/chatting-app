import React from "react";
import { useDispatch } from "react-redux";
import { chatApi } from "../../api/api";
import { setReciver } from "../../store/slices/MessageSlice";
import { useAppSelector } from "../../store/storeAccess";

const PersonalChat = (props) => {
	const { name, id, lastMessage,image } = props;
	const { chat } = useAppSelector();
	const dispatch = useDispatch();

	const viewport = (x) => {
		if (x.matches) {
			document.querySelector(".chat_logs").style.display = "none";
			document.querySelector(".chat_box").style.display = "flex";}
	};

	var x = window.matchMedia("(max-width:800px)");

	const handleChatClick = () => {
		dispatch(chatApi(id));
		dispatch(
			setReciver({
				userId: id,
				userName: name.charAt(0).toUpperCase().concat(name.slice(1)),
			})
		);
		document.querySelector(".emptyChatArea").style.display="none";
		document.querySelector(".chat_box").style.display="flex";

		if (chat[0]) {
			const elem = document.querySelector(".chat_box_chatArea");
			if (elem) elem.scrollTop = elem.scrollHeight;
		}
		viewport(x);
	};

	return (
		<div className="chat_logs_convo_item" onClick={handleChatClick}>
			<div className="profile_photo_chat">
				<img src={image} alt="" />
			</div>
			<div className="chat_logs_convo_item_info">
				<span className="chat_logs_convo_item_info_userName">
					{name.charAt(0).toUpperCase().concat(name.slice(1))}
				</span>
				<span className="chat_logs_convo_item_info_lastMessage">
					{lastMessage.split(" ").slice(0, 5).join(" ")} {lastMessage.split("").length>=15 && "..."}
				</span>
			</div>
		</div>
	);
};

export default PersonalChat;
