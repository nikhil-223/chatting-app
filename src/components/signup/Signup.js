import React from 'react'
import { Link } from 'react-router-dom';
import './Signup.scss'

const Signup = () => {

    const handleSignup= () => {  }
  return (
		<div id="signup" className="signup">
			<div className={`signup_box `}>
				<form onSubmit={handleSignup} className="signup_box_form">
					<input type="text" name="name" placeholder="Name" required />
					<input type="text" name="username" placeholder="Username" required />
					<input type="text" name="password" placeholder="Password" required />
					<input
						type="text"
						name="confirm password"
						placeholder="Confirm Password"
						required
					/>
					<div className="signup_box_form_button-area">
						<input type="submit" value={`Sign up`} />
						<Link to="/login">Already have an account?</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup