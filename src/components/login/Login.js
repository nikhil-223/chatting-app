import React, { useEffect, useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginApi } from "../../api/api";
import { useAppSelector } from "../../store/storeAccess";

const Login = () => {
	const { isErrorLogin, user } = useAppSelector();
	const dispatch = useDispatch();
	let history = useNavigate();

	const token = localStorage.getItem("token");

	useEffect(() => {
		if (token) {
			history("/home/personalChats");
		}
	}, [token, history, dispatch]);

	const [username, setUsername] = useState("");
	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const [password, setPassword] = useState("");
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	//
	const [alertMessage, setAlertMessage] = useState({
		related: "",
		message: "",
	});

	const alert = (message, related) => {
		setAlertMessage({ related, message });
		document.querySelector(".login_box_form_error").style.visibility =
			"visible";
	};

	useEffect(() => {
		if (isErrorLogin) alert("user does'nt exists", "username");
	}, [isErrorLogin]);

	const handleLogin = () => {
		if (username === "") {
			alert("username field is empty", "username");
		} else if (password === "") {
			alert("please enter password", "password");
		} else {
			document.querySelector(".login_box_form_error").style.visibility =
				"hidden";
			dispatch(loginApi({ username, password }));
		}
	};

	return (
		<div id="login" className="login">
			<div className={`login_box `}>
				<div className="login_box_form">
					<div
						className="login_box_form_error"
						style={{ visibility: "hidden" }}>
						{`*${alertMessage.message}`}
					</div>
					<div className="inputField">
						<label className="label">Username</label>
						<input
							type="text"
							name="username"
							placeholder="Enter Username"
							onChange={handleUsernameChange}
							value={username}
						/>
					</div>

					<div className="inputField">
						<label className="label">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Enter Password"
							onChange={handlePasswordChange}
							value={password}
						/>
					</div>
					<div className="login_box_form_button-area">
						<button type="submit" onClick={handleLogin}>
							Log in
						</button>
						<Link to="/signup">Sign Up</Link>
					</div>
				</div>
			</div>

			<div
				className="login_loader"
				style={{ visibility: user.isLoading ? "visible" : "hidden" }}>
				<img src="https://i.gifer.com/Vp3R.gif" alt="loader" />
			</div>
		</div>
	);
};

export default Login;
