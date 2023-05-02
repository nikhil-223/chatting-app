import React from "react";
import { useAppSelector } from "../../store/storeAccess";
import UsersItem from "./UsersItem";

const Connections = () => {
	const { connections } = useAppSelector();

	return (
		<section className="chat_logs_convo">
			{connections.map((item, index) => {
				return <UsersItem key={index} name={item.name} id={item._id} />;
			})}
		</section>
	);
};

export default Connections;
