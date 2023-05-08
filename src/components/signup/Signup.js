import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.scss";
import { useDispatch } from "react-redux";
import { signup } from "../../api/api";
import { useAppSelector } from "../../store/storeAccess";

const Signup = () => {
	const { isErrorSignup,user} = useAppSelector();
	const dispatch = useDispatch();
	let history = useNavigate();

	const [name, setname] = useState("");
	const handleNameChange = (e) => {
		setname(e.target.value);
	};
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

	const [password2, setPassword2] = useState("");
	const handlePassword2Change = (e) => {
		setPassword2(e.target.value);
	};

	const [alertMessage, setAlertMessage] = useState({
		related: "",
		message: "hello",
	});

	const alert = (message, related) => {
		setAlertMessage({ related, message });
		document.querySelector(".signup_box_form_error").style.visibility =
			"visible";
	};

	useEffect(() => {
		if (isErrorSignup) alert("user name is taken", "username");
	}, [isErrorSignup]);

	const handleSignup = () => {
		if (name === "") {
			alert("name field is empty", "name");
		} else if (username === "") {
			alert("username field is empty", "username");
		} else if (password === "") {
			alert("please enter password", "password");
		} else if (password2 === "") {
			alert("please confirm password", "password2");
		} else {
			document.querySelector(".signup_box_form_error").style.visibility =
				"hidden";
			dispatch(signup({ name, username, password, password2 }));
		}
	};

	return (
		<div id="signup" className="signup">
			<div className={`signup_box `}>
				<div className="signup_box_form">
					<div
						className="signup_box_form_error"
						style={{ visibility: "hidden" }}>{`*${alertMessage.message}`}</div>

					<div className="inputField">
						<label className="label">Name</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							value={name}
							onChange={handleNameChange}
						/>
					</div>
					<div className="inputField">
						<label className="label">Username</label>
						<input
							type="text"
							name="username"
							placeholder="Username"
							value={username}
							onChange={handleUsernameChange}
						/>
					</div>
					<div className="inputField">
						<label className="label">Password</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={password}
							onChange={handlePasswordChange}
						/>
					</div>
					<div className="inputField">
						<label className="label">Confirm Password</label>
						<input
							type="password"
							name="confirm password"
							placeholder="Confirm Password"
							value={password2}
							onChange={handlePassword2Change}
						/>
					</div>
					<div className="signup_box_form_button-area">
						<button onClick={handleSignup}>Sign up</button>
						<Link to="/login">Already have an account?</Link>
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

export default Signup;
