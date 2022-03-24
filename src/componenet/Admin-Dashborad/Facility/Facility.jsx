import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Figure, Table, Button } from "react-bootstrap";
import swal from "sweetalert";
import DataGrid from "../../DataGrid/DataGrid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import facilitiesDirectory from "./FacilityData"



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
const Facility = () => {

    const columns = [
        { field: "id", headerName: "ID", width: 130 },
        { field: "Facilities", headerName: "FacilitiesName", width: 180 },
        { field: "Icon", headerName: " Icon", width: 180 ,	renderCell: (params) => (
            <img src={params.row.Icon} height={50} width={70} style={{borderRadius:"51%",border:"1px solid #00A9B0"}}></img>
        ), },
        { field: "date", headerName: "Date", width: 180 },
    
    
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
                <div>
                <Link to="/EditFacility" >
                    {" "}
                    <EditIcon />
                </Link>
            
            <DeleteIcon onClick={()=>Delete(params.row.id)} />
    
            </div>			),
        },
    
        
    ];
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
      
                    
        <div className="page-body">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12" style={Top}>
                    <div className="card">
                        <div className="card-header d-flex" style={btnrt}>
                            <h5>All Facilities </h5>
                            <NavLink to="/AddFacility">
                            
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

export default Facility;
