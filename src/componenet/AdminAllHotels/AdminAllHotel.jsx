import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { Figure, Table } from "react-bootstrap";
import swal from "sweetalert";
import Stack from "@mui/material/Stack";
import Directory2 from "../AdminAllHotels/HotelsData"
import AddAccessoriesCategory from "../AccessoriesCategory/AddAccessoriesCategory";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import DataGrid from "../DataGrid/DataGrid"
import { Rating } from "@mui/material";



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
const AdminAllGuest = () => {
	const[user,setUser] = useState([])

	const [deletedData, setDeleted] = React.useState(false);

	useEffect(async() => {
		await axios.get("https://62385c9800ed1dbc5ab1de67.mockapi.io/hotels")
		        .then((res) => {
		            // console.log(res.data, "RESPONSE")
		            setUser(res.data)
		        }).catch((res) => {
		            // console.log(res)
		        })
		 
	}, [deletedData])
	

	const columns = [
		{ field: "id", headerName: "ID", width: 20 },
		{ field: "name", headerName: "Hotel Name", width: 150 },
		{ field: "avatar", headerName: "Hotel Profile", width: 130,	renderCell: (params) => (
			
			<img style={{width:'100%',height:'100%'}} src="http://modvilla.in/flutter/static/media/holiday-2.e3efaa6b80adc50fb604.jpg" ></img>
			
		),},

		{
			field: "location",
			headerName: "Hotel Location",
			width: 130,
			height: "200",
			
		},
		{ field: "rating", headerName: "Hotel Category", width: 200 ,	renderCell: (params) => (
			
			<Rating name="read-only" value={params.row.rating} readOnly />
			
		),},
		// { field: "Hotel_Facilities", headerName: "Hotel Facilities", width: 130 },
		{
			field: "phone",
			headerName: " COntact No",
			width: 130,
		},

		
		{
			field: "price",
			headerName: "Hotel Price",
			width: 130,
			
		},
		{
			field: "Aminities",
			headerName: "Aminities ",
			width: 130,
			
		},
		{
			field: "facilities",
			headerName: "Facilities",
			width: 130,
			
		},
		// {
		// 	field: "facilities",
		// 	headerName: "Facilities ",
		// 	width: 130,
			
		// },
	
		{
			field: "Action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => (
				<div>
					<Link to={`/AdminEditHotel/${params.row.id}`} >
						{" "}
						<EditIcon />
					</Link>
					<Link to="/GuestDetails">
					<RemoveRedEyeIcon />
				</Link>
				<DeleteIcon onClick={()=>Delete(params.row.id)} />

				</div>
			),
		},
	];

	const [open, setOpen] = React.useState(false);
	const handleOpen1 = () => setOpen(true);
	const handleClose = () => setOpen(false);

	// Delete section starts
	const Delete = (params) => {
		console.log(params,"params");
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this imaginary file!",
			icon: "warning",

			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			console.log(willDelete);
			if (willDelete) {
			axios.delete('https://62385c9800ed1dbc5ab1de67.mockapi.io/hotels/' + params)
				.then((res) => {
					
					swal("Delete", "Your file has been deleted!", {
						icon: "success",
					});
					setDeleted(true)
				
			})
			
			
			} else {
				// swal("Safe!", "You clicked the button!", "success");
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
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12" style={Top}>
                    <div className="card">
                        <div className="card-header d-flex" style={btnrt}>
                            <h5>All Hotels </h5>
                            <NavLink to="/AdminAddHotels">
                            
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-original-title="test"
                                    data-bs-target="#exampleModal"
                                >
                                    Add Hotel
                                </button>
                            </NavLink>
                        </div>

                        <div className="text-center">
                        <DataGrid data={user} columns={columns} />

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

export default AdminAllGuest;
