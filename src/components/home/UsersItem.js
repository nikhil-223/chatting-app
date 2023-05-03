import React from "react";
import { useDispatch } from "react-redux";
import { chatApi } from "../../api/api";
import { setReciver } from "../../store/slices/MessageSlice";

const UsersItem = (props) => {
	const { name, id } = props;
	const dispatch = useDispatch();

	const viewport = (x) => {
		if (x.matches) {
			setTimeout(() => {
				document.querySelector(".chat_logs").style.display = "none";
				document.querySelector(".chat_box").style.display = "flex";
			}, 50);
		}
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

		const elem = document.querySelector(".chat_box_chatArea");
		if (elem) {
			elem.scrollTop = elem.scrollHeight;
		}

		viewport(x)
	};

	return (
		<div
			className="chat_logs_convo_item personal_chat_item"
			onClick={handleChatClick}>
			<span className="profile_photo_chat">{name.charAt(0).toUpperCase()}</span>
			{name.charAt(0).toUpperCase().concat(name.slice(1))}
		</div>
	);
};

export default UsersItem;
