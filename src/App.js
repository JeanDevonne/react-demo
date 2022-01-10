import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { UsuariosPage } from "./pages/UsuariosPage";
import { ChoferesPage } from "./pages/ChoferesPage";
import { CiudadesPage } from "./pages/CiudadesPage";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/usuarios" element={<UsuariosPage />} />
				<Route path="/choferes" element={<ChoferesPage />} />
				<Route path="/ciudades" element={<CiudadesPage />} />
			</Routes>
		</BrowserRouter>
	);
};
