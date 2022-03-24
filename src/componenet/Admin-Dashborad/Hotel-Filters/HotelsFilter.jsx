import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Figure, Table, Button } from "react-bootstrap";
import swal from "sweetalert";
import DataGrid from "../../DataGrid/DataGrid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterData from "./HotelFilterData"



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
const HotelFilter = () => {

    const columns = [
        { field: "id", headerName: "ID", width: 230 },
        { field: "category", headerName: "Categogy", width: 280 },
        { field: "value", headerName: " Value", width: 280 ,	 },
      
        
    ];
	const [data, setData] = useState(FilterData);
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
                            <NavLink to="/AddHotelFilter">
                            
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

export default HotelFilter;
