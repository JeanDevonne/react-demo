import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export const LoginPage = () => {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: () => {
			navigate("/");
		},
	});

	return (
		<div className="container">
			<div className="login">
				<form
					autoComplete="off"
					className="form"
					onSubmit={formik.handleSubmit}
				>
					<label htmlFor="email" className="form__label">
						Email address
					</label>
					<input
						className="form__input"
						type="email"
						id="email"
						placeholder="Email"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<label htmlFor="password" className="form__label">
						Password
					</label>
					<input
						className="form__input"
						type="password"
						id="password"
						placeholder="Password"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<button type="submit" className="form__button">
						Ingresar
					</button>
				</form>
			</div>
		</div>
	);
};
