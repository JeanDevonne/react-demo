import "./table.css";
export const TableComponent = ({ children }) => {
	return (
		<table className="table" border="1">
			{children}
		</table>
	);
};
