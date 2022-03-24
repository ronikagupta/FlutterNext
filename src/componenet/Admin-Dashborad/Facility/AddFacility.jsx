import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { Dropdown,Form} from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";

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
const AddFacility = () => {
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

	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [number, setNumber] = useState("");
	const [profile, setProfile] = useState("");
	const [rating, setRating] = useState("");
	const [price, setPrice] = useState("");
	const [facilities1, setFacilities1] = useState("");
	const [facilities2, setFacilities2] = useState("");
	const [facilities3, setFacilities3] = useState("");

	const create = () => {
		console.log(name, location, "//////////////");
		axios
			.post("https://62385c9800ed1dbc5ab1de67.mockapi.io/hotels", {
				name: name,
				location: location,

				phone: number,
				avatar: profile,
				rating: rating,
				price: price,
			})
			.then((result) => {
				debugger;
				console.log("create user", result);
				setName("");
				setLocation("");

				setNumber("");
				setProfile("");
				setRating("");
				setPrice("");
				swal("Hotel added successfully");
			});
	};

	// Save Section End
	return (
		<>
			<div className="page-body">
				<div className="container-fluid"></div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12" style={Top}>
							<div className="card" style={{height:"100%"}}>
								<div className="card-header d-flex" style={btnrt}>
									<h5>Add New Facilities </h5>
									<div style={{ marginLeft: "50%" }}>
										<NavLink to="">
											<button
												type="button"
												class="backBtn"
												onClick={handleClick}
											>
												back
											</button>
										</NavLink>
									</div>
								</div>
								<div className="text-center">
									<div class="row g-3 p-3  serviceform">
										<div className="col-md-6">
											<label
												for="exampleInputEmail1"
												class="form-label"
												style={{ display: "flex", justifyContent: "start" }}
											>
												Facilities:
											</label>
											<Form.Control
												className="form-control1 "
												type="text"
												placeholder="Facilities"
											/>
										</div>

										<div className="col-md-6 ">
											<label
												for="floatigSelectGrid"
												class="form-label"
												style={{ display: "flex", justifyContent: "start" }}
											>
												{" "}
												Icon:
											</label>
											<Form.Control type="file" multiple placeholder="name" />
										</div>

										<div className="col-md-6">
											{/* <label for="floatingSelectGrid" className="form-label">Email ID:</label>
                            <input type="email" placeholder="mbo@.com" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email1} onChange={(e) => setEmail1(e.target.value)} /> */}
											<label
												for="exampleInputEmail1"
												class="form-label textboxes"
												style={{ display: "flex", justifyContent: "start" }}
											>
												Date:
											</label>

											<Form.Control type="Date" multiple placeholder="ID" />
										</div>

										<div class="col-md-6">
											<label
												for="floatingSelectGrid"
												className="form-label"
												style={{ display: "flex", justifyContent: "start" }}
											>
												Description :
											</label>
											<Form.Control
												type="text"
												multiple
												placeholder="Description"
											/>
										</div>

									
										<div class="col-md-6 ">
                                        <label
                                        for="floatingSelectGrid"
                                        className="form-label"
                                        style={{ display: "flex", justifyContent: "start" }}
                                    >
                                        {" "}
                                        Status
                                    </label>
											<select
												class="form-select"
												aria-label="Default select example"
												id="1"
											>
												<option selected> Status</option>
												<option value="1">Active</option>
												<option value="2">Pending</option>
												<option value="3">Arriving</option>
												<option value="3">Deactive</option>
											</select>
										</div>

									

										{/* <div class="col-md-6 mt-3" >
                           
                          </div> */}
									</div>

									{/* EditModal section start */}
								</div>

								<div>
									<button type="button" class="update-btn" onClick={create}>
										Create:
									</button>
								</div>
							</div>

							<div className="card-body text-center"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddFacility;
