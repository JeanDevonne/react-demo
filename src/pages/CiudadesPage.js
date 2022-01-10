import { ContainerComponent } from "../components/ContainerComponent";
import { InputForm } from "../components/Input/input";
import { TableComponent } from "../components/Table/TableComponent";

import { useFormik } from "formik";

import "../styles/Usuario.css";
import { ButtonComponent } from "../components/Button/buttonComponent";

import { dataCiudad } from "../constant/data";
import { useEffect, useState } from "react";

export const CiudadesPage = () => {
	const [dataCiudades, setDataCiudades] = useState([]);
	useEffect(() => {
		setDataCiudades(dataCiudad);
	}, []);
	const formik = useFormik({
		initialValues: {
			id: "",
			name: "",
		},
		onSubmit: (value) => {
			value.id === "" ? handleSubmit(value) : handleUpdateSubmit(value);
		},
	});

	const handleSubmit = (value) => {
		const idMax = dataCiudades.length;

		let parameter = {
			id: idMax + 1,
			...value,
		};
		console.log([...dataCiudades, parameter]);
	};

	const handleUpdateSubmit = (value) => {
		const rpta = dataCiudades.reduce((ac, el) => {
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
		setDataCiudades(rpta);
	};

	const handleDeleteCiudades = (id) => {
		const data = dataCiudades.filter((el) => el.id !== id);
		setDataCiudades(data);
	};

	const handleEditCiudad = (el) => {
		formik.setFieldValue("id", el.id);
		formik.setFieldValue("name", el.name);
	};

	return (
		<ContainerComponent>
			<div className="usuario__container">
				<div className="usuario__form">
					<h1 className="form__title">
						{formik.values.id === "" ? "Registrar" : "Actualizar"}{" "}
						Ciudades
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
					<h1 className="form__title">Listar Ciudades</h1>
					<TableComponent>
						<thead>
							<tr>
								<th>Nombre</th>
								<th>Acción</th>
							</tr>
						</thead>
						<tbody>
							{dataCiudades.length === 0 ? (
								<tr>
									<td colSpan={2} width={400}>
										No hay Información
									</td>
								</tr>
							) : (
								dataCiudades.map((el) => (
									<tr key={el.id}>
										<td width={400}>{el.name}</td>
										<td>
											<ButtonComponent
												onClick={() => handleDeleteCiudades(el.id)}
												text="Eliminar"
											/>
											<ButtonComponent
												style={{ marginLeft: 5 }}
												onClick={() => handleEditCiudad(el)}
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
