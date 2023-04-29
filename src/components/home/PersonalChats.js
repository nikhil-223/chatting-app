import React from 'react'
import { useAppSelector } from '../../store/storeAccess';
import PerChatItem from './PerChatItem';

const PersonalChats = () => {
	const {connections}=useAppSelector()
	
  return (
		<section className="chat_logs_convo">
			{connections.map((item,index) => {
				return <PerChatItem key={index} name={item.name} id={item._id}/>;
			})} 
		</section>
	);
}

export default PersonalChats; 