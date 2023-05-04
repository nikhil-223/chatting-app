import React from "react";
import { useDispatch } from "react-redux";
import { chatApi } from "../../api/api";
import { setReciver } from "../../store/slices/MessageSlice";
import { useAppSelector } from "../../store/storeAccess";

const PersonalChat = (props) => {
	const { name, id, lastMessage } = props;
	const { chat } = useAppSelector();
	const dispatch = useDispatch();

	const viewport=(x)=>{
		if(x.matches){
			setTimeout(() => {
				document.querySelector(".chat_logs").style.display = "none";
				document.querySelector(".chat_box").style.display = "flex";
			}, 50);
		}
	}

	var x = window.matchMedia("(max-width:800px)")

	const handleChatClick = () => {
		dispatch(chatApi(id));
		dispatch(
			setReciver({
				userId: id,
				userName: name.charAt(0).toUpperCase().concat(name.slice(1)),
			})
		);

		if (chat[0]) {
			const elem = document.querySelector(".chat_box_chatArea");
			setTimeout(() => {
				elem.scrollTop = elem.scrollHeight;
			}, 50);
		}
		viewport(x);
	};

	return (
		<div className="chat_logs_convo_item" onClick={handleChatClick}>
			<span className="profile_photo_chat">{name.charAt(0).toUpperCase()}</span>
			<div className="chat_logs_convo_item_info">
				<span className="chat_logs_convo_item_info_userName">
					{name.charAt(0).toUpperCase().concat(name.slice(1))}
				</span>
				<span className="chat_logs_convo_item_info_lastMessage">
					{lastMessage.split("").slice(0, 20).join().split(",")} ...
				</span>
			</div>
		</div>
	);
};

export default PersonalChat;
