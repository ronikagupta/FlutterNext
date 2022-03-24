import React,{useState} from "react";
import { NavLink,Link } from "react-router-dom";
import { Figure } from "react-bootstrap";
import Stack from "@mui/material/Stack";
import swal from "sweetalert";
import AddAccessoriesCategory from "../AccessoriesCategory/AddAccessoriesCategory";
import DataGrid from "../DataGrid/DataGrid"
import TestimonialData from "../Testimonial/TestimonialData"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';




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
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};
const Testimonial = () => {
	const columns = [
		{ field: "id", headerName: "ID", width: 150 },
		{ field: "name", headerName: " Name", width: 180 },
		{ field: "profile", headerName: "Profile", width: 180 ,	renderCell: (params) => (
			<img height={50} width={70} src={params.row.profile} />
		),},
	
	
		{
			field: "location",
			headerName: "Location",
			width: 200,
			height: "200",
		
		},
		

		
		{
			field: "description",
			headerName: "Description",
			width: 300,
			height:"200" ,
		},
	
		{
			field: "Action",
			headerName: "Action",
			width: 130,
			renderCell: (params) => (
				<div>
					<Link to="/AdminEditRoom">
						{" "}
						<EditIcon />
					</Link>
					<DeleteIcon onClick={Delete} />
				</div>
			),
		}
		
	];
	const [open, setOpen] = React.useState(false);
	const handleOpen1 = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [data, setData] = useState(TestimonialData);

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
	 
			<div className="page-body">
				<div className="container-fluid"></div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12" style={Top}>
							<div className="card">
								<div className="card-header d-flex" style={btnrt}>
									<h5>All Rooms </h5>
									<NavLink to="/AddTestimonial">
										{" "}
										<button
											type="button"
											class="btn btn-primary"
											data-bs-toggle="modal"
											data-original-title="test"
											data-bs-target="#exampleModal"
										>
											Add-Testimonial
										</button>
									</NavLink>
								</div>

								<div className="card-body text-center">
								<DataGrid data={data} columns={columns} />
									
									{/* EditModal section start */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonial;
