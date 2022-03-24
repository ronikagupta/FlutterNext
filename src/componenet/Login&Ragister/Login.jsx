import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
	const [isSignin, setIsSignIn] = useState(false);
	const [email, setEmail] = useState(false);
	const [password, setPassword] = useState(false);

	let navigate = useNavigate();

	// const [formData, setFormData] = useState({
	// 	email: "",
	// 	password: "",
	// });
	// const handleChange = (e) => {
	// 	setFormData({ ...formData, [e.target.name]: e.target.value });
	// };
	const handleClick = (e) => {
		// console.log("value", formData);

		setIsSignIn(true);
		localStorage.setItem(
			"userDetails",
			JSON.stringify(email, password, isSignin)
		);
		navigate("/");
window.location.reload ()
		e.preventDefault();
    };
    
    
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-12 d-flex justify-content-center align-item-center">
					<form className="form login-form">
					<h2 style={{marginLeft:"30%"}}>Sing up</h2>

						<div className="input-container">
							<label className="label text-black">Username: </label>
							<input
								type="text"
								className="input"
								placeholder="Username"
								name="email"
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="input-container">
							<label className="label text-black">Password: </label>
							<input
								type="password"
								name="password"
								className="input"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
							<a href="#" className="link forgotten-password">
								Forgot password?
							</a>
							<a href="#" className="link forgotten-password">
								Sing up
							</a>
						</div>
						<button type="submit" id="login-btn" onClick={handleClick}>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
