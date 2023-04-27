import React, { useEffect } from "react";
import "./Alert.scss";
import { useAppSelector } from "../../store/storeAccess";
import { useDispatch } from "react-redux";

const Alert = () => {
	const { alert } = useAppSelector();
	const dispatch=useDispatch()

	useEffect(() => {
		if (alert.message !== "" && alert.type === "error") {
			setTimeout(() => {
				document.getElementById("alert").classList.remove("alert_danger");
			}, 3000);
			document.getElementById("alert").classList.add("alert_danger");
		} else if (alert.message !== "" && alert.type === "success") {
			setTimeout(() => {
				document.getElementById("alert").classList.remove("alert_success");
			}, 3000);
			document.getElementById("alert").classList.add("alert_success");
		}
	},[alert,dispatch]);

	return (
		<div id="alert" className="alert">
			<div className="alert_message">{alert.message}</div>
		</div>
	);
};

export default Alert;
