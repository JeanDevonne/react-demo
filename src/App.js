import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<div>
							<p>Hola Mundo</p>
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
