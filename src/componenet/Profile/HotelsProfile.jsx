import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";
import ProfileData from "./ProfileData";
import DialogTitle from "@mui/material/DialogTitle";

const columns = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "location", headerName: "Location", width: 130 },

	{
		field: "hotel_img",
		headerName: "Hotels",
		width: 130,
		height: "200",
		renderCell: (params) => (
			<img height={100} width={100} src={params.row.hotel_img} />
		),
	},
	{ field: "hotel", headerName: "Hotel Name", width: 130 },
	{ field: "facilities", headerName: "Facilities", width: 130 },
	{ field: "Available_Rooms", headerName: "Available_Rooms", width: 100 },

	{
		field: "rating",
		headerName: "Rating",
		width: 130,
	},

	{ field: "contact_no", headerName: "Contact No", width: 130 },

	,
];
const HotelsProfile = () => {
	console.log(ProfileData, "profiledata");
	const [data, setData] = useState(ProfileData);
	// Delete section starts

	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-sm-12">
						<div className="card Profile-card">
							<div className="card-body text-center">
								<div class="row g-3 p-3  serviceform">
									<DialogTitle className="serviceform1" id="form-dialog-title">
									  Create Hotel Profile
									</DialogTitle>

									<div className="col-md-6">
										<label
											for="exampleInputEmail1"
											class="form-label"
											style={{ display: "flex", justifyContent: "start" }}
										>
											Hotel Name:
										</label>
										<Form.Control
											className="form-control1 "
											type="text"
											placeholder="Enter Name"
										/>
									</div>

									<div className="col-md-6 ">
										<label
											for="floatigSelectGrid"
											class="form-label"
											style={{ display: "flex", justifyContent: "start" }}
										>
											{" "}
											Hotel Images:
										</label>
										<Form.Control type="file" multiple />
									</div>

									<div className="col-md-6">
										{/* <label for="floatingSelectGrid" className="form-label">Email ID:</label>
								<input type="email" placeholder="mbo@.com" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email1} onChange={(e) => setEmail1(e.target.value)} /> */}
										<label
											for="exampleInputEmail1"
											class="form-label textboxes"
											style={{ display: "flex", justifyContent: "start" }}
										>
											Contact Number:
										</label>

										<Form.Control
											type="text"
											multiple
											placeholder="+919*******"
										/>
									</div>

									<div class="col-md-6">
										<label
											for="floatingSelectGrid"
											className="form-label"
											style={{ display: "flex", justifyContent: "start" }}
										>
											Email Address:
										</label>
										<Form.Control
											type="email"
											multiple
											placeholder="xyz@.com"
										/>
									</div>

									<div class="col-md-6 ">
										<label
											for="floatingSelectGrid"
											className="form-label"
											style={{ display: "flex", justifyContent: "start" }}
										>
											{" "}
											Hotels Location:
										</label>

										<select
											class="form-select "
											id="floatingSelectGrid"
											aria-label="Floating label select example"
											value=""
										>
											<option value="right now" disabled>
												select value{" "}
											</option>
											<option value="right now">Noida</option>
											<option value="Car Mechanic">Mumbai</option>
											<option value="Mobile Mechanic">Dehli</option>
										</select>
									</div>

									<div class="col-md-6">
										<label
											for="floatingSelectGrid"
											className="form-label"
											style={{ display: "flex", justifyContent: "start" }}
										>
											{" "}
											Price:
										</label>

										<Form.Control
											type="text"
											multiple
											placeholder="Enter Price"
										/>
									</div>

									{/* <div class="col-md-6 mt-3" >
							   
							  </div> */}
								</div>
								<div className="main-create-btn">
									{" "}
									<button class="create-btn">Create</button>
								</div>

								{/* EditModal section start */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HotelsProfile;
