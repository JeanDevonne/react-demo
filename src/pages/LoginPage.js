import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../components/Button/buttonComponent";
import { InputForm } from "../components/Input/input";
import "../styles/Login.css";

export const LoginPage = () => {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: () => {
			navigate("/home");
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
					<InputForm
						text="Email Address"
						type="email"
						id="email"
						placeholder="Email"
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<InputForm
						text="Password"
						type="password"
						id="password"
						placeholder="Password"
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<ButtonComponent text="Ingresar" />
				</form>
			</div>
		</div>
	);
};
