import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store/storeAccess";
import io from "socket.io-client";
import { setLastMessage } from "../../store/slices/ChatSlice";
import { useDispatch } from "react-redux";

const ChatBox = () => {
	const { chat } = useAppSelector();
	const dispatch = useDispatch();
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		if (socket === null) {
			setSocket(io("http://localhost:5000"));
		}
		if (socket) {
			socket.on("messages", (data) => {
				dispatch(setLastMessage(data));
			});
		}
	}, [socket, dispatch]);

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
