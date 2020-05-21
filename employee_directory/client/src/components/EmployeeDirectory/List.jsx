import React from "react";
import Item from "./Item";

const List = (props) => {
  return (
		<div className="container">
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Image</th>
						<th scope="col">Name</th>
						<th scope="col">Salary</th>
						<th scope="col">Age</th>
					</tr>
				</thead>
				<tbody>
						{props.employees.map((employee) => (
							<Item {...employee} key={employee.id} />
						))}
				</tbody>
			</table>
		</div>
	);
};

export default List;

