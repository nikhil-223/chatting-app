import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../store/storeAccess";
import io from "socket.io-client";
import { setLastMessage } from "../../store/slices/ChatSlice";
import { useDispatch } from "react-redux";
import Message from "./Message";

const ChatBox = () => {
	const { chat } = useAppSelector();
	const dispatch = useDispatch();
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		if (socket === null) {
			setSocket(io("https://chattingappbackend.onrender.com"));
		}
		if (socket) {
			socket.on("messages", (data) => {
				dispatch(setLastMessage(data));
			});
		}
	}, [socket, dispatch]);

	return (
		<section className="chat_box_chatArea">
			{chat.isLoading === true ? (
				<div className="loader">
					<img src="https://i.gifer.com/Vp3R.gif" alt="loader" />
				</div>
			) : (
				chat.data.map((item) => {
					return (
						<Message key={item._id} message={item.body} sender={item.from} />
					);
				})
			)}
		</section>
	);
};

export default ChatBox;
