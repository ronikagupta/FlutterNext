import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Nav, Tabs, Tab, Form } from "react-bootstrap";
import swal from "sweetalert";

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
const EditFacility = () => {
	let navigate = useNavigate();
	function handleClick() {
		navigate(-1);
	}

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
							<div className="card" style={{height:"100%" }}>
								<div className="card-header d-flex" style={btnrt}>
									<h5>Hotel Filters</h5>
									<NavLink to="/AllGestList">
										<button type="button" class="backBtn" onClick={handleClick}>
											back
										</button>
									</NavLink>
								</div>
								<div className="">
									<div className="row justify-content-center pt-5 ">
										<div class="mb-3  col-md-5 formFields">
											<label for="exampleFormControlInput1" class="form-label">
                                            Category:
											</label>
                                            <input type="text" className="form-control" placeholder="Category">
                                            </input>
										</div>
										<div class="mb-3 col-md-5 formFields">
											<label for="exampleFormControlInput1" class="form-label">
                                            Value:
											</label>
                                            <input type="text" className="form-control" placeholder="Value"></input>

                                        </div>
                                        <div>
									<button type="button" class="update-btn" onClick={Update}>
										ADD
									</button>
								</div>
									
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditFacility;
