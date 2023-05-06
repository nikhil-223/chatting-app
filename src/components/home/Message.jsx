import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../api/api";

const Message = (props) => {
	const { message, sender ,messageId} = props;
    const dispatch = useDispatch();

	// handle dots click
	const handleDotsClick = (e) => {
		const messageMenuVisible =
			e.target.closest(".chat_message").querySelector(".messageMenu").style
				.display === "flex";

		//setting the position of message menu
		e.target
			.closest(".chat_message")
			.querySelector(".messageMenu").style.left = `${e.clientX - 90}px`;
		e.target
			.closest(".chat_message")
			.querySelector(".messageMenu").style.top = `${e.clientY + 20}px`;

		//making the message menu visible
		messageMenuVisible
			? (e.target
					.closest(".chat_message")
					.querySelector(".messageMenu").style.display = "none")
			: (e.target
					.closest(".chat_message")
					.querySelector(".messageMenu").style.display = "flex");
	};

	// delete message
	const handleDeleteMessage = () => {
        dispatch(deleteMessage(messageId));
    };

	return (
		<div
			className={`chat_message ${
				sender === localStorage.getItem("userId")
					? "chat_box_chatArea_rightMessage"
					: "chat_box_chatArea_message"
			}`}>
			<span className={`cloudStyle`}></span>
			<div className={`message_content`}>
				{message}
				<BiDotsVerticalRounded className="dots" onClick={handleDotsClick} />
			</div>
			<div className="messageMenu" style={{ display: "none" }}>
				<li className="messageMenu_item" onClick={handleDeleteMessage}>
					Delete
				</li>
				<li className="messageMenu_item">Update</li>
				<li className="messageMenu_item">Copy</li>
			</div>
		</div>
	);
};

export default Message;
