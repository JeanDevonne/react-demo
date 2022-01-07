import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/"
					element={
						<div>
							<p>Hola Jose</p>
						</div>
					}
				/>
				<Route
					path="/usuarios"
					element={
						<div>
							<p>Hola Jose</p>
						</div>
					}
				/>
				<Route
					path="/choferes"
					element={
						<div>
							<p>Hola Jose</p>
						</div>
					}
				/>
				<Route
					path="/cuidades"
					element={
						<div>
							<p>Hola Jose</p>
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
