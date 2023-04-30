import React from "react";
import { useDispatch } from "react-redux";
import { chatApi } from "../../api/api";
import { setReciver } from "../../store/slices/MessageSlice";

const PerChatItem = (props) => {
	const { name, id } = props;
	const dispatch = useDispatch();

	const handleChatClick = () => {
		dispatch(chatApi(id));
		dispatch(setReciver(id));

		const elem = document.querySelector(".chat_box_chatArea");
		setTimeout(() => {
			elem.scrollTop = elem.scrollHeight;
		}, 50);
	};

	return (
		<div
			className="chat_logs_convo_item personal_chat_item"
			onClick={handleChatClick}>
			{name.charAt(0).toUpperCase().concat(name.slice(1))}
		</div>
	);
};

export default PerChatItem;
