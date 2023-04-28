import React from 'react'
import { useAppSelector } from '../../store/storeAccess';

const PersonalChats = () => {
	const {conversations}=useAppSelector()
	console.log(conversations);
  return (
		<section className="chat_logs_convo">
			{conversations.map((item,index) => {
				return (
					<div key={index} className="chat_logs_convo_item personal_chat_item">
						{item.name.charAt(0).toUpperCase().concat(item.name.slice(1))}
					</div>
				);
			})}
		</section>
	);
}

export default PersonalChats