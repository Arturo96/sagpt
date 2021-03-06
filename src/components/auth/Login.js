import React from "react";
import { useDispatch } from "react-redux";
import { startLogin } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const Login = () => {
	const [formValues, handleInputChange] = useForm({
			email: "carlos13@gmail.com",
			password: "123456"
		}),
		{ email, password } = formValues;

	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();

		dispatch(startLogin(formValues));
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="login animate__animated animate__fadeInDown"
			id="login"
			data-display
		>
			<div className="form-group">
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={handleInputChange}
					value={email}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					name="password"
					onChange={handleInputChange}
					value={password}
					required
				/>
			</div>

			<button type="submit">Sign in</button>
		</form>
	);
};
