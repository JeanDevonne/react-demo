import { Link } from "react-router-dom";
import "../styles/Container.css";
import "../styles/Menu.css";
export const ContainerComponent = ({ children }) => {
	return (
		<div className="containerPage">
			<ul className="menu">
				<li className="menu__item">
					<Link className="menu__link" to="/usuarios">
						Usuarios
					</Link>
				</li>
				<li className="menu__item">
					<Link className="menu__link" to="/choferes">
						Choferes
					</Link>
				</li>
				<li className="menu__item">
					<Link className="menu__link" to="/ciudades">
						Ciudades
					</Link>
				</li>
			</ul>

			<div className="body">{children}</div>
		</div>
	);
};
