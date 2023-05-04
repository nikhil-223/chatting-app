import React, { useEffect } from "react";
import { useAppSelector } from "../../store/storeAccess";
import UsersItem from "./UsersItem";
import { connectionsApi } from "../../api/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Connections = () => {
	const { connections,token } = useAppSelector();
	const dispatch = useDispatch();
	let history = useNavigate();

	useEffect(() => {
		if (token) {
			dispatch(connectionsApi(token));
		} else {
			history("/login");
		}
	}, [token,dispatch,history]);

	return (
		<section className="chat_logs_convo">
			{connections.map((item, index) => {
				return <UsersItem key={index} name={item.name} id={item._id} />;
			})}
		</section>
	);
};

export default Connections;
