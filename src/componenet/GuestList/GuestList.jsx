import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Tabs, Tab } from "react-bootstrap";
import swal from "sweetalert";
import AddAccessoriesCategory from "../AccessoriesCategory/AddAccessoriesCategory";
import AllGuest from "./AllGuest";
import { Pending } from "@mui/icons-material";
import PendingGuest from "./PendingGuest";
import BookedGuest from "./BookedGuest"
import CanceledGuest from "./CanceledGuest"
import RefundGuest from "./RefundGuest"
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
const GuestList = () => {
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
									<h5>All Guest </h5>
									<NavLink to="/AddGuest">
									
										<button
											type="button"
											class="btn btn-primary"
											data-bs-toggle="modal"
											data-original-title="test"
											data-bs-target="#exampleModal"
										>
											Add Guest
										</button>
									</NavLink>
								</div>

								<div className="text-center">
									<Tabs
										defaultActiveKey="All Guest"
										id="uncontrolled-tab-example"
										className="mb-3"
									>
										<Tab eventKey="All Guest" title="All Guest">
											<AllGuest/>
										</Tab>
										<Tab eventKey="Panding" title="Panding">
											<PendingGuest/>
										</Tab>
										<Tab eventKey="Booked" title="Booked">
											<BookedGuest/>
										</Tab>
										<Tab eventKey="Canceled" title="Canceled">
											<CanceledGuest/>
										</Tab>
										<Tab eventKey="Refund" title="Refund">
											<RefundGuest/>
										</Tab>
									</Tabs>

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

export default GuestList;
