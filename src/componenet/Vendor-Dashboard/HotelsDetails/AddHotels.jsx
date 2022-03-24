import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { Dropdown } from "react-bootstrap";
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
const AddHotel = () => {
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
									<h5>Add New Hotels </h5>
									<div style={{ marginLeft: "50%" }}>
										<NavLink to="/GuestList">
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
								<div className="row justify-content-center pt-5">
									<div class="mb-3  col-md-5 formFields ">
										<label for="exampleFormControlInput1" class="form-label">
											Hotel Name:
										</label>
										<input
											type="text"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="Name"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<div class="mb-3 col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											Hotel Profile:
										</label>
										<input
											type="file"
											multiple
											class="form-control"
											id="exampleFormControlInput1"
											placeholder=""
											value={profile}
											onChange={(e) => setProfile(e.target.value)}
										/>
									</div>
								</div>

								<div className="row justify-content-center">
									<div class="mb-3  col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											Hotel Location:
										</label>
										<input
											type="text"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder=""
											value={location}
											onChange={(e) => setLocation(e.target.value)}
										/>
									</div>
									<div class="mb-3 col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											Description:
										</label>
										<input
											type="textarea"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder=""
											value={rating}
											onChange={(e) => setRating(e.target.value)}
										/>
									</div>
								</div>

								<div className="row justify-content-center">
									<div class="mb-3  col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											Hotel Price:
										</label>
										<input
											type="text"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="price"
											value={price}
											onChange={(e) => setPrice(e.target.value)}
										/>
									</div>
									<div class="mb-3 col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											Contact No:
										</label>
										<input
											type="text"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="+91********"
											value={number}
											onChange={(e) => setNumber(e.target.value)}
										/>
									</div>
								</div>
								<div className="row justify-content-center ">
									<div class="mb-3  col-md-5 formFields">
									
										<label for="exampleFormControlInput1" class="form-label">
											Aminities-Category:
										</label>
										<select
											class="form-select"
											aria-label="Default select example"
											id="1"
										>
											<option selected>Languages spoken</option>
											<option value="1">Safety and Cleanliness</option>
											<option value="2">Kitchen</option>
											<option value="3">Standard</option>
											<option value="3">Entertainment</option>



										</select>
									</div>
									<div class="mb-3 col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											Amenities-Value:
										</label>
										<select
											class="form-select"
											aria-label="Default select example"
										>
											<option selected id="1"></option>
											<option value="1">English</option>
											<option value="2">Hindi</option>
										</select>
									</div>
								</div>
								<div className="row ">
									<div
										className=" col-md-4 list-group"
										style={{ marginLeft: "10%" }}
									>
										<label
											for="floatingSelectGrid"
											className="form-label"
											style={{
												display: "flex",
												justifyContent: "left",
												marginLeft: "2%",
											}}
										>
											{" "}
											facilities:
										</label>
										<div className=" col-md- list-check chechbox shadow-lg p-3 mb-5 bg-body rounded">
											<div class="form-check">
												<input
													class="form-check-input"
													type="checkbox"
													id="flexCheckIndeterminate"
													value={facilities1}
													onChange={(e) => setNumber(e.target.value)}
												/>
												<label
													class="form-check-label"
													for="flexCheckIndeterminate"
												>
													Airport transfer
												</label>
											</div>
											<div class="form-check">
												<input
													class="form-check-input"
													type="checkbox"
													value={facilities2}
													onChange={(e) => setNumber(e.target.value)}
													id="flexCheckDisabled"
												/>
												<label
													class="form-check-label"
													for="flexCheckIndeterminate"
												>
													Free Wi-Fi in all rooms!
												</label>
											</div>
											<div class="form-check">
												<input
													class="form-check-input"
													type="checkbox"
													value={facilities3}
													onChange={(e) => setNumber(e.target.value)}
													id="flexCheckDisabled"
												/>
												<label
													class="form-check-label"
													for="flexCheckIndeterminate"
												>
													Hot tub
												</label>
											</div>
											<div class="form-check">
												<input
													class="form-check-input"
													type="checkbox"
													value={facilities3}
													onChange={(e) => setNumber(e.target.value)}
													id="flexCheckDisabled"
												/>
												<label
													class="form-check-label"
													for="flexCheckIndeterminate"
												>
													Sauna
												</label>
											</div>
											<div class="form-check">
												<input
													class="form-check-input"
													type="checkbox"
													value={facilities3}
													onChange={(e) => setNumber(e.target.value)}
													id="flexCheckDisabled"
												/>
												<label
													class="form-check-label"
													for="flexCheckIndeterminate"
												>
													Steamroom
												</label>
											</div>
										</div>
									</div>
									<div
										className=" col-md-4 list-group"
										style={{ marginLeft: "8.5%" }}
									>
										<label
											for="floatingSelectGrid"
											className="form-label"
											style={{
												display: "flex",
												justifyContent: "left",
												marginLeft: "2%",
											}}
										>
											{" "}
											Additional-facilities:
										</label>
										<div className=" col-md- list-check chechbox shadow-lg p-3 mb-5 bg-body rounded">
											<div class="form-check">
												<input
													class="form-check-input"
													type="checkbox"
													id="flexCheckIndeterminate"
													value={facilities1}
													onChange={(e) => setNumber(e.target.value)}
												/>
												<label
													class="form-check-label"
													for="flexCheckIndeterminate"
												>
													Front desk [24-hour]
												</label>
											</div>
											<div class="form-check">
												<input
													class="form-check-input"
													type="checkbox"
													value={facilities2}
													onChange={(e) => setNumber(e.target.value)}
													id="flexCheckDisabled"
												/>
												<label
													class="form-check-label"
													for="flexCheckIndeterminate"
												>
													Valet parking
												</label>
											</div>
											<div class="form-check">
												<input
													class="form-check-input"
													type="checkbox"
													value={facilities3}
													onChange={(e) => setNumber(e.target.value)}
													id="flexCheckDisabled"
												/>
												<label
													class="form-check-label"
													for="flexCheckIndeterminate"
												>
													Shuttle service
												</label>
											</div>
											<div class="form-check">
												<input
													class="form-check-input"
													type="checkbox"
													value={facilities3}
													onChange={(e) => setNumber(e.target.value)}
													id="flexCheckDisabled"
												/>
												<label
													class="form-check-label"
													for="flexCheckIndeterminate"
												>
													Free Wi-Fi in all rooms!
												</label>
											</div>
											<div class="form-check">
												<input
													class="form-check-input"
													type="checkbox"
													value={facilities3}
													onChange={(e) => setNumber(e.target.value)}
													id="flexCheckDisabled"
												/>
												<label
													class="form-check-label"
													for="flexCheckIndeterminate"
												>
													Swimming pool [outdoor]
												</label>
											</div>
										</div>
									</div>
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

export default AddHotel;
