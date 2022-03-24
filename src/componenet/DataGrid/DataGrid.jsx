import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Button } from "react-bootstrap";

const VISIBLE_FIELDS = ["Guest", "Status"];

export default function DataTable(props) {
	const rows = props.data;
	const columns = props.columns;
	console.log(props, "data");
	const { data } = useDemoData({
		dataSet: "Employee",
		visibleFields: VISIBLE_FIELDS,
		rowLength: 100,

	});

	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				components={{ Toolbar: GridToolbar }}
				rowsPerPageOptions={[5]}
				actions={[
					{
					  icon: <EditIcon/>,
					  onClick: () => {
						console.log('Hello World!');
					  },
					  isFreeAction: true,
					  tooltip: 'Add Button',
					}
				  ]}
			/>
		</div>
	);
}
