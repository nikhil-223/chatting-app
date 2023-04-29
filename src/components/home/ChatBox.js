import React from "react";
import { useAppSelector } from "../../store/storeAccess";

const ChatBox = () => {
	const { chat } = useAppSelector();
	return (
		<section className="chat_box_chatArea">
			{chat.map((item) => {
				return (
					<div
						className={`chat_box_chatArea_message ${
							item.from === localStorage.getItem("userId") ? "flex-end" : ""
						}`}
						key={item._id}>
						{" "}
						{item.body}{" "}
					</div>
				);
			})}
		</section>
	);
};

export default ChatBox;
