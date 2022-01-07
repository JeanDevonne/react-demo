import { ContainerComponent } from "../components/ContainerComponent";
import { InputForm } from "../components/Input/input";
import { TableComponent } from "../components/Table/TableComponent";

import { useFormik } from "formik";

import "../styles/Usuario.css";
import { ButtonComponent } from "../components/Button/buttonComponent";

import { dataUsuario } from "../constant/data";
import { useState } from "react";

export const UsuariosPage = () => {
	const [dataUser, setDataUser] = useState(dataUsuario);
	const formik = useFormik({
		initialValues: {
			name: "",
			lastName: "",
			email: "",
			age: "",
		},
		onSubmit: (value) => {
			handleSubmit(value);
		},
	});

	const handleSubmit = (value) => {
		console.log(value);
	};

	return (
		<ContainerComponent>
			<div className="usuario__container">
				<div className="usuario__form">
					<h1 className="form__title">Registrar Usuario</h1>

					<form autoComplete="off" onSubmit={formik.handleSubmit}>
						<InputForm
							text="Nombre"
							type="text"
							id="name"
							name="name"
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						<InputForm
							text="Apellidos"
							type="text"
							id="lastName"
							name="lastName"
							value={formik.values.lastName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						<InputForm
							text="Corre Electrónico"
							type="email"
							id="email"
							name="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						<InputForm
							text="Edad"
							type="text"
							id="age"
							name="age"
							value={formik.values.age}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						<ButtonComponent text="Registrar" />
					</form>
				</div>

				<TableComponent>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Apellidos</th>
							<th>Email</th>
							<th>Edad</th>
							<th>Acción</th>
						</tr>
					</thead>
					<tbody>
						{dataUser.map((el) => (
							<tr key={el.id}>
								<td>{el.name}</td>
								<td>{el.lastName}</td>
								<td>{el.email}</td>
								<td>{el.age}</td>
								<td>
									<ButtonComponent
										onClick={() => alert(el.id)}
										text="Eliminar"
									/>
								</td>
							</tr>
						))}
					</tbody>
				</TableComponent>
			</div>
		</ContainerComponent>
	);
};
