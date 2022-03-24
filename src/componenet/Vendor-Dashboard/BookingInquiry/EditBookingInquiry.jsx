import React,{useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Nav, Tabs, Tab, Form } from "react-bootstrap";
import swal from "sweetalert";
import {useLocation} from 'react-router-dom'


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
const EditBookingInquiry = () => {
    const { state } = useLocation();

	let navigate = useNavigate();
	function handleClick() {
		navigate(-1);
    }
    
    const [bookingId, setBookingId] = useState(state.bookingId)
    const [userName, setUserName] = useState(state.userName)

    const [hotelName, setHotelName] = useState("")

    const [email, setEmail] = useState("")

    const [phoneNo, setPhoneNo] = useState("")

    const [price, setPrice] = useState("")

    const [description, setDescription] = useState("")

    const [date, setDate] = useState("")

    const [status, setStatus] = useState("")




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
							<div className="card"  style={{height:"100%"}}>
								<div className="card-header d-flex" style={btnrt}>
									<h5>Edit Booked Guest Details </h5>
									<NavLink to="/AllGestList">
										<button type="button" class="backBtn" onClick={handleClick}>
											back
										</button>
									</NavLink>
								</div>

								<div className="text-center">
									<div class="row g-3 p-3  serviceform">
										<div className="col-md-6">
											<label
												for="exampleInputEmail1"
												class="form-label"
												style={{ display: "flex", justifyContent: "start" }}
											>
												Booking ID:
											</label>
											<Form.Control
												className="form-control1 "
												type="text"
                                                placeholder="Enter Name"
                                                value={bookingId}
                                                onChange={(e) => setBookingId(e.target.value)}
											/>
										</div>

										<div className="col-md-6 ">
											<label
												for="floatigSelectGrid"
												class="form-label"
												style={{ display: "flex", justifyContent: "start" }}
											>
												{" "}
												User Name:
											</label>
											<Form.Control type="text" multiple placeholder="name" value={userName}
                                            onChange={(e) => setUserName(e.target.value)} />
										</div>

										<div className="col-md-6">
											{/* <label for="floatingSelectGrid" className="form-label">Email ID:</label>
                            <input type="email" placeholder="mbo@.com" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email1} onChange={(e) => setEmail1(e.target.value)} /> */}
											<label
												for="exampleInputEmail1"
												class="form-label textboxes"
												style={{ display: "flex", justifyContent: "start" }}
											>
												Hotel Name:
											</label>

											<Form.Control type="text" multiple placeholder="ID" value={hotelName}
                                            onChange={(e) => setHotelName(e.target.value)} />
										</div>

										<div class="col-md-6">
											<label
												for="floatingSelectGrid"
												className="form-label"
												style={{ display: "flex", justifyContent: "start" }}
											>
												Email :
											</label>
											<Form.Control
												type="email"
												multiple
                                                placeholder="XYZ@gmail.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
											/>
										</div>

										<div class="col-md-6 ">
											<label
												for="floatingSelectGrid"
												className="form-label"
												style={{ display: "flex", justifyContent: "start" }}
											>
												{" "}
												Phone No
											</label>
											<Form.Control
												type="text"
												multiple
                                                placeholder="+91**********"
                                                value={phoneNo}
                                                onChange={(e) => setPhoneNo(e.target.value)}
											/>
										</div>
										<div class="col-md-6 ">
											<label
												for="floatingSelectGrid"
												className="form-label"
												style={{ display: "flex", justifyContent: "start" }}
											>
												{" "}
												Price
											</label>
											<Form.Control type="text" multiple placeholder="$" value={price}
                                            onChange={(e) => setPrice(e.target.value)} />
										</div>
										<div class="col-md-6 ">
											<label
												for="floatingSelectGrid"
												className="form-label"
												style={{ display: "flex", justifyContent: "start" }}
											>
												{" "}
												Discription
											</label>
											<Form.Control
												type="text-area"
												multiple
                                                placeholder="description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
											/>
										</div>
										<div class="col-md-6 ">
											<label
												for="floatingSelectGrid"
												className="form-label"
												style={{ display: "flex", justifyContent: "start" }}
											>
												{" "}
												Date
											</label>
											<Form.Control type="Date" multiple placeholder="Date" value={date}
                                            onChange={(e) => setDate(e.target.value)}/>
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
                                                value={status}
                                        onChange={(e) => setStatus(e.target.value)}
											>
												<option selected> Status</option>
												<option value="1">Active</option>
												<option value="2">Pending</option>
												<option value="3">Arriving</option>
												<option value="3">Deactive</option>
											</select>
										</div>

										<div className="main-update-btn">
											<button type="button" class="update-btn">
												Update
											</button>
										</div>

										{/* <div class="col-md-6 mt-3" >
                           
                          </div> */}
									</div>

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

export default EditBookingInquiry;
