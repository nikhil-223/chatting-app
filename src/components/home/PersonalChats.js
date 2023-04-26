import React from 'react'
import { Link } from 'react-router-dom';

const PersonalChats = () => {
    const chats=[
        {name:'nikhil'},
        {name:'rahul'},
        {name:'vishnu'},
        {name:'vijay'},
        {name:'vishal'},
    ]
  return (
		<section className="chat_logs_convo">
			{chats.map((item) => {
				return (
					<div className="chat_logs_convo_item personal_chat_item">
						{item.name.charAt(0).toUpperCase().concat(item.name.slice(1))}
					</div>
				);
			})}
		</section>
	);
}

export default PersonalChats