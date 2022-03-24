import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Figure, Table, } from "react-bootstrap";
import Stack from "@mui/material/Stack";
import swal from "sweetalert";
import AddAccessoriesCategory from "../AccessoriesCategory/AddAccessoriesCategory";
import DataGrid from "../DataGrid/DataGrid";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import facilitiesDirectory from "./AdminDataFacilities";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const btnrt = {
	justifyContent: "space-between",
};

const Top = {
	paddingTop: "10px",
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
const AdminFacilities = () => {
    const columns = [
        { field: "id", headerName: "ID", width: 130 },
        { field: "Facilities", headerName: "Facilities", width: 180 },
        { field: "Icon", headerName: " Icon", width: 180 ,	renderCell: (params) => (
            <img src={params.row.Icon} height={50} width={70}></img>
        ), },
    
    
        {
            field: "Discription",
            headerName: "Discription",
            width: 180,
            height: "200",
            
        },
        
    
        {
            field: "Status",
            headerName: "Status",
            width: 180,
            renderCell: (params) => (
                <Button height={50} width={70}>{params.row.Status}</Button>
            ),
        },
        {
            field: "Details",
            headerName: "Details",
            width: 180,
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
                    <Link to="/AdminEditfacilities">
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
	console.log(facilitiesDirectory, "profiledata");
	const [data, setData] = useState(facilitiesDirectory);
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
      
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Alert
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                You want to Delete Guest
            </Typography>

            <Stack spacing={2} direction="row" style={{ marginTop: "7%" }}>
                <Button variant="contained" onClick={handleClose}>Cancle</Button>
                <Button variant="contained">Delete</Button>
            </Stack>
        </Box>
    </Modal>           
        <div className="page-body">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12" style={Top}>
                    <div className="card">
                        <div className="card-header d-flex" style={btnrt}>
                            <h5> Admin All Facilities </h5>
                            <NavLink to="/AdminAddFacilities">
                            
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-original-title="test"
                                    data-bs-target="#exampleModal"
                                >
                                    Add Facilities
                                </button>
                            </NavLink>
                        </div>

                        <div className="text-center">
                        
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

export default AdminFacilities;
