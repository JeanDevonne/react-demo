import "./button.css";
export const ButtonComponent = ({ text, onClick }) => {
	return (
		<button type="submit" onClick={onClick} className="form__button">
			{text}
		</button>
	);
};
