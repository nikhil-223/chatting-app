import React from "react";
import { useAppSelector } from "../../store/storeAccess";
import PersonalChat from "./PersonalChat";

const ChatLogs = () => {
	const { conversations } = useAppSelector();

	return (
		<section className="chat_logs_convo">
			<div className="chat_logs_convo_item global_chat">Global Chats</div>
			{conversations.map((item, i) => {
				return (
						<PersonalChat
							key={i}
							name={item.chatter[0].name}
							lastMessage={item.lastMessage}
							id={item.chatter[0]._id}
						/>
				);
			})}
		</section>
	);
};

export default ChatLogs;
