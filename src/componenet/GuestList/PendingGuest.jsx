import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Figure, Table, Button } from "react-bootstrap";
import swal from "sweetalert";
import AddAccessoriesCategory from "../AccessoriesCategory/AddAccessoriesCategory";
import DataGrid from "../DataGrid/DataGrid";
import Directory from "./Data/Directory";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const columns = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "GuestName", headerName: "Guest Name", width: 130 },
	{ field: "id_Type", headerName: "ID Type", width: 130 },


	{
		field: "Avatar",
		headerName: "Profile",
		width: 130,
		height: "200",
		renderCell: (params) => (
			<img height={50} width={70} src={params.row.Avatar} />
		),
	},
	{ field: "CheckIn", headerName: " Check In", width: 130 },
	{ field: "id_Details", headerName: "Details", width: 130 },
	{
		field: "CheckOut",
		headerName: " Check Out",
		width: 130,
	},

	{
		field: "Status",
		headerName: "Status",
		width: 130,
		renderCell: (params) => (
			<Button height={50} width={70}>{params.row.Status}</Button>
		),
	},
	{
		field: "Details",
		headerName: "Details",
		width: 130,
		renderCell: (params) => (
			<Link to="/GuestDetails"><RemoveRedEyeIcon/></Link>	
			),
	},

	{
		field: "Action",
		headerName: "Action",
		width: 130,
		renderCell: (params) => (
			<div>
				<Link to="/EditPendingGuest">
					{" "}
					<EditIcon />
				</Link>
				<DeleteIcon />
			</div>
		),
	},

	
];

const btnrt = {
	justifyContent: "space-between",
};

const Top = {
	paddingTop: "10px",
};

const trash = {
	paddingLeft: "10px",
	fontSize: "20px",
	color: "red",
};

const edit = {
	paddingLeft: "10px",
	fontSize: "20px",
	color: "blue",
};
const PendingGuest = () => {
	console.log(Directory, "profiledata");
	const [data, setData] = useState(Directory);
	// Delete section starts
	const Delete = () => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this imaginary file!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				swal("Delete", "Your file has been deleted!", {
					icon: "success",
				});
			} else {
				swal("Safe!", "You clicked the button!", "success");
			}
		});
	};
	// Delete section End

	// Update Section start
	const Update = () => {
		swal("UPDATE!", "You clicked the button!", "success");
	};
	// Update Section start

	// Save Section Start
	const Save = () => {
		swal("Save!", "You clicked the button!", "success");
	};

	// Save Section End
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12" style={Top}>
						<div className="card">
							<div className="card-body text-center">
								<DataGrid data={data} columns={columns} />
								{/* EditModal section start */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PendingGuest;
