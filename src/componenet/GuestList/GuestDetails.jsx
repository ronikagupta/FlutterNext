import React from "react";
import { NavLink } from "react-router-dom";
import { Card, Figure,Button } from "react-bootstrap";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import swal from "sweetalert";
import BedIcon from "@mui/icons-material/Bed";
import CallIcon from "@mui/icons-material/Call";
import GppGoodIcon from "@mui/icons-material/GppGood";
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import AddAccessoriesCategory from "../AccessoriesCategory/AddAccessoriesCategory";
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
const GuestDetails = () => {
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
			<div className="container-fluid">
				<div className="row">
					<Card
						body
						className="col-md-12 GuestCard shadow-lg p-3 mb-5 bg-body rounded"
					>
						<div className="row Guest-card-main">
							<div className="col-md-5">
								<div className="row">
									<div className="col-md-5">
										<Figure>
											<Figure.Image
												width={191}
												height={200}
												alt="171x180"
												src="http://travl.dexignlab.com/xhtml/images/profile/pic1.jpg"
											/>
										</Figure>
									</div>
									<div className="col-md-5">
										<Figure.Caption>
											<h3>Roberto Mansini</h3>
											<h5>ID 1234124512551</h5>
											<CallIcon /> <h5>Send Message </h5>
										</Figure.Caption>
									</div>
									<div className="col-md-2">
										<MoreVertIcon />
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<h5>Check In</h5>
										<h4>October 30th, 2021 | 08:23 AM</h4>
									</div>
									<div className="col-md-6">
										<h5>Check Out</h5>
										<h4>November 2th, 2021</h4>
									</div>
								</div>
								<hr></hr>
								<div className="row">
									<div className="col-md-6">
										<p>Room Info</p>
										<h3>Deluxe Z - 002424</h3>
									</div>
									<div className="col-md-6 ">
										<p>Price</p>
										<h3>$145/night</h3>
									</div>
									<div className="row">
										<div className="col-md-12">
											<p>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit,
												sed do eiusmod tempor incididunt ut labore et dolore
												magna aliqua. Ut enim ad minim veniam, quis nostrud
												exercitation ullamco laboris nisi ut aliquip ex ea
												commodo consequat. Duis aute irure dolor in
												reprehenderit in voluptate velit esse cillum dolore eu
												fugiat nulla pariatur. Excepteur sint occaecat cupidatat
												non proident, sunt in culpa qui officia deserunt mollit
												anim id est laborum
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<p>Facilities</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6">
											<Button className="facilites-btn">
												{" "}
												<BedIcon />3 bed space
											</Button>
										</div>
										<div className="col-md-6">
											<Button className="facilites-btn">
												{" "}
												<GppGoodIcon /> 24 Hour Gaurd
											</Button>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6 mt-2">
										<Button className="facilites-btn">
										{" "}
										<GppGoodIcon /> 24 Hour Gaurd
									</Button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-5">
								<div>
									<img
										style={{
											width: "100%",
											height: "100%",
											display: "flex",
											justifyContent: "start",
										}}
										src="http://travl.dexignlab.com/xhtml/images/gallery/hotel1.jpg"
									></img>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
};

export default GuestDetails;
