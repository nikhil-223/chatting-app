import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";
import { useDispatch } from "react-redux";
import { signup } from "../../api/api";
import { useAppSelector } from "../../store/storeAccess";

const Signup = () => {
	const { isErrorSignup } = useAppSelector();
	const dispatch = useDispatch();

	const [name, setname] = useState("");
	const handleNameChange = (e) => {
		setname(e.target.value);
	};

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

	const [alertMessage, setAlertMessage] = useState({related:"",message:"hello"})


	const alert =(message,related)=>{
		setAlertMessage({related,message})
		document.querySelector(".signup_box_form_error").style.visibility="visible";
	}
	
	useEffect(() => {
		if (isErrorSignup)
			alert("user name is taken",'username')
	}, [isErrorSignup]);

	const handleSignup = () => {
		if (name === "") {
			alert("name field is empty","name")
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
					<div className="signup_box_form_error" style={{visibility:'hidden'}}>{`*${alertMessage.message}`}</div>
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={name}
						onChange={handleNameChange}
					/>
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={username}
						onChange={handleUsernameChange}
					/>
					<input
						type="text"
						name="password"
						placeholder="Password"
						value={password}
						onChange={handlePasswordChange}
					/>
					<input
						type="text"
						name="confirm password"
						placeholder="Confirm Password"
						value={password2}
						onChange={handlePassword2Change}
					/>
					<div className="signup_box_form_button-area">
						<button onClick={handleSignup}>Sign up</button>
						<Link to="/login">Already have an account?</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
