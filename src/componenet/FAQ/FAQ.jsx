import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Tabs, Tab, Accordion } from "react-bootstrap";
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
const FAQ = () => {
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
									<h5>Frequently asked questions</h5>
									<NavLink to="/AddFAQ">
										<button
											type="button"
											class="btn btn-primary"
											data-bs-toggle="modal"
											data-original-title="test"
											data-bs-target="#exampleModal"
										>
											ADD FAQ
										</button>
									</NavLink>
								</div>

								<div className="text-center">
									<Accordion>
										<Accordion.Item eventKey="0">
											<Accordion.Header>
												How do I get to Gypsys 2BHK Apartment ?
											</Accordion.Header>
											<Accordion.Body>
												For those who wish to drive their own cars, Gypsys 2BHK
												Apartment has a car park available for guests. Parking
												is free for guests.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>
												How do I get to Gypsys 2BHK Apartment ?
											</Accordion.Header>
											<Accordion.Body>
												For those who wish to drive their own cars, Gypsys 2BHK
												Apartment has a car park available for guests. Parking
												is free for guests.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>
												How do I get to Gypsys 2BHK Apartment ? 
											</Accordion.Header>
											<Accordion.Body>
												For those who wish to drive their own cars, Gypsys 2BHK
												Apartment has a car park available for guests. Parking
												is free for guests.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="3">
											<Accordion.Header>
												How do I get to Gypsys 2BHK Apartment ?
											</Accordion.Header>
											<Accordion.Body>
												For those who wish to drive their own cars, Gypsys 2BHK
												Apartment has a car park available for guests. Parking
												is free for guests.
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>

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

export default FAQ;
