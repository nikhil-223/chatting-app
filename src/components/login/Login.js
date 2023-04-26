import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
	const handleLogin = () => {};

	return (
		<div id="login" className="login">
			<div className={`login_box `}>
				<form onSubmit={handleLogin} className="login_box_form">
					<input
						type="text"
						name="name"
						placeholder="Name"
						required
					/>
					<input
						type="text"
						name="username"
						placeholder="Username"
						required
					/>
					<input
						type="text"
						name="password"
						placeholder="Password"
						required
					/>
					<input
						type="text"
						name="confirm password"
						placeholder="Confirm Password"
						required
					/>
					<div className="login_box_form_button-area">
						<input type="submit" value={`Log in`} />
						<Link to='/signup'>Sign Up</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
