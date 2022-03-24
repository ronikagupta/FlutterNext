import React,{useState} from "react";
import { NavLink ,Link} from "react-router-dom";
import { Figure,Button } from "react-bootstrap";
import swal from "sweetalert";
import AddAccessoriesCategory from "../AccessoriesCategory/AddAccessoriesCategory";
import RoomDirectory from "../Rooms/RoomData/RoomDirectory"
import DataGrid from "../DataGrid/DataGrid";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const columns = [
	{ field: "id", headerName: "ID", width: 130 },
	{ field: "Room_Name", headerName: "Room Name", width: 180 },
	{ field: "Room_Img", headerName: "Profile", width: 180 ,	renderCell: (params) => (
		<img height={50} width={70} src={params.row.Room_Img} />
	),},


	{
		field: "Facilities",
		headerName: "Facilities",
		width: 130,
		height: "200",
	
	},
	{ field: "Rate", headerName: " Check In", width: 180 },
	
	{
		field: "Status",
		headerName: "Status",
		width: 180,
		renderCell: (params) => (
			<Button height={50} width={70}>Active</Button>
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
const RoomDetails = () => {
	const [data, setData] = useState(RoomDirectory);

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
									<NavLink to="/AddRoomDetails">
										{" "}
										<button
											type="button"
											class="btn btn-primary"
											data-bs-toggle="modal"
											data-original-title="test"
											data-bs-target="#exampleModal"
										>
											Add-Room-Details
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

export default RoomDetails;
