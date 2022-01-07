import "./input.css";
export const InputForm = ({ text, ...props }) => {
	return (
		<>
			<label htmlFor="email" className="form__label">
				{text}
			</label>
			<input className="form__input" {...props} />
		</>
	);
};
