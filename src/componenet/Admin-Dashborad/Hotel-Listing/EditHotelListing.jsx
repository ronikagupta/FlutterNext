import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router";
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

const EditHotelListing = (params) => {
    console.log(params,"params");
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [number, setNumber] = useState("");
	const [profile, setProfile] = useState("");
	const [rating, setRating] = useState("");
	const [price, setPrice] = useState("");
	const [facilities1, setFacilities1] = useState("");
	const [facilities2, setFacilities2] = useState("");
	const [facilities3, setFacilities3] = useState("");
	const [updatedData, setUpdatedData] = React.useState(false);

	useEffect(() => {}, [updatedData]);

	//  console.log(params.row.id,"params")
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
	const { id } = useParams();

	console.log("id", id);

	const Update = () => {
		let url = "https://62385c9800ed1dbc5ab1de67.mockapi.io/hotels/" + id;

		console.log("url", url);

		axios
			.put(url, {
				name: name,
				location: location,
				phone: number,
				avatar: profile,
				rating: rating,
				price: price,
			})
			.then((result) => {
				debugger;
				console.log("create", result);
				setName(name);
				setLocation(location);

				setNumber("");
				setProfile("");
				setRating("");
				setPrice("");
				swal("Hotel added successfully");
				setUpdatedData(true);
			});
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
							<div className="card" style={{height:"100%"}}>
								<div className="card-header d-flex" style={btnrt}>
									<h5>Update Hotel</h5>
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
									<div class="mb-3  col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											Hotel Name:
										</label>
										<input
											type="text"
											class="form-control"
											placeholder=""
											value="Julio Paucek"
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<div class="mb-3 col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											Hotel Profile:
										</label>
										<ul style={{display:"flex",flex:"wrap"}}>
											<li>
															<img style={{width:'60%',height:'80%'}} src="http://modvilla.in/flutter/static/media/holiday-2.e3efaa6b80adc50fb604.jpg" ></img>
 
											</li>
											<li>
															<img style={{width:'60%',height:'80%'}} src="http://modvilla.in/flutter/static/media/holiday-2.e3efaa6b80adc50fb604.jpg" ></img>
 
											</li>
											<li>
															<img style={{width:'60%',height:'80%'}} src="http://modvilla.in/flutter/static/media/holiday-2.e3efaa6b80adc50fb604.jpg" ></img>
 
											</li>
										</ul>
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
											placeholder=""
											value="Noida"
											onChange={(e) => setLocation(e.target.value)}
										/>
									</div>
									<div class="mb-3 col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											Hotel Category:
										</label>
										<input
											type="text"
											class="form-control"
											placeholder=""
											value="***"
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
											placeholder=""
											value="56789"
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
											placeholder=""
											value="45678900000"
											onChange={(e) => setNumber(e.target.value)}
										/>
									</div>
								</div>
								<div className="row justify-content-center">
									<div className=" col-md-4 list-group">
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
										<div className=" col-md-8 list-check chechbox shadow-lg p-3 mb-5 bg-body rounded">
											<div class="form-check">
												<input
													class="form-check-input check"
													type="checkbox"
													id="flexCheckIndeterminate"
													value={facilities1}
													onChange={(e) => setNumber(e.target.value)}
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
													value={facilities2}
													onChange={(e) => setNumber(e.target.value)}
													id="flexCheckDisabled"
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
										</div>
									</div>
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

export default EditHotelListing;
