import React from "react";
import { useDispatch } from "react-redux";
import { chatApi } from "../../api/api";
import { setReciver } from "../../store/slices/MessageSlice";

const PerChatItem = (props) => {
	const { name, id } = props;
	const dispatch = useDispatch();

	const handleChatClick = () => {
		dispatch(chatApi(id));
		dispatch(setReciver(id))
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
