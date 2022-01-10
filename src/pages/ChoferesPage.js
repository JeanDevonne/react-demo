import { ContainerComponent } from "../components/ContainerComponent";
import { InputForm } from "../components/Input/input";
import { TableComponent } from "../components/Table/TableComponent";

import { useFormik } from "formik";

import "../styles/Usuario.css";
import { ButtonComponent } from "../components/Button/buttonComponent";

import { datChofer } from "../constant/data";
import { useEffect, useState } from "react";

export const ChoferesPage = () => {
	const [dataChofer, setDataChofer] = useState([]);
	useEffect(() => {
		setDataChofer(datChofer);
	}, []);
	const formik = useFormik({
		initialValues: {
			id: "",
			name: "",
			lastName: "",
			email: "",
			age: "",
		},
		onSubmit: (value) => {
			value.id === "" ? handleSubmit(value) : handleUpdateSubmit(value);
		},
	});

	const handleSubmit = (value) => {
		const idMax = dataChofer.length;

		let parameter = {
			id: idMax + 1,
			...value,
		};
		console.log([...dataChofer, parameter]);
	};

	const handleUpdateSubmit = (value) => {
		const rpta = dataChofer.reduce((ac, el) => {
			if (el.id === value.id) {
				ac.push({
					...value,
				});
			} else {
				ac.push(el);
			}

			return ac;
		}, []);
		formik.handleReset();
		setDataChofer(rpta);
	};

	const handleDeleteChofer = (id) => {
		const data = dataChofer.filter((el) => el.id !== id);
		setDataChofer(data);
	};

	const handleEditChofer = (el) => {
		formik.setFieldValue("id", el.id);
		formik.setFieldValue("name", el.name);
		formik.setFieldValue("lastName", el.lastName);
		formik.setFieldValue("email", el.email);
		formik.setFieldValue("age", el.age);
	};

	return (
		<ContainerComponent>
			<div className="usuario__container">
				<div className="usuario__form">
					<h1 className="form__title">
						{formik.values.id === "" ? "Registrar" : "Actualizar"} Chofer
					</h1>
					<form autoComplete="off" onSubmit={formik.handleSubmit}>
						<input type="hidden" name="id" value={formik.values.id} />
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
						{formik.values.id === "" ? (
							<ButtonComponent text="Registrar" />
						) : (
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "1fr 1fr",
									columnGap: 10,
								}}
							>
								<ButtonComponent text="Actualizar" />

								<ButtonComponent
									text="Cancelar"
									onClick={formik.handleReset}
								/>
							</div>
						)}
					</form>
				</div>
				<div>
					<h1 className="form__title">Listar Chofer</h1>
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
							{dataChofer.length === 0 ? (
								<tr>
									<td colSpan={5}>No hay Información</td>
								</tr>
							) : (
								dataChofer.map((el) => (
									<tr key={el.id}>
										<td>{el.name}</td>
										<td>{el.lastName}</td>
										<td>{el.email}</td>
										<td>{el.age}</td>
										<td>
											<ButtonComponent
												onClick={() => handleDeleteChofer(el.id)}
												text="Eliminar"
											/>
											<ButtonComponent
												style={{ marginLeft: 5 }}
												onClick={() => handleEditChofer(el)}
												text="Editar"
											/>
										</td>
									</tr>
								))
							)}
						</tbody>
					</TableComponent>
				</div>
			</div>
		</ContainerComponent>
	);
};
