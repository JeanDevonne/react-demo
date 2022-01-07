import "./button.css";
export const ButtonComponent = ({ text, onClick, ...props }) => {
	return (
		<button onClick={onClick} className="form__button" {...props}>
			{text}
		</button>
	);
};
