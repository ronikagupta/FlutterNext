import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
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
const AccessoriesCategory = () => {
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
				<div className="container-fluid"></div>
				<div className="container-fluid" >
					<div className="row" >
						<div className="col-sm-12" >
							<div className="card">
								<div className="card-header d-flex" style={btnrt}>
									<h5>Add New Guest </h5>
									<div style={{marginLeft:"50%"}}>
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
								<div className="row" style={{display:"flex",justifyContent:"center"}}>
									<div class="mb-3 col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											ID
										</label>
										<input
											type="email"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="name@example.com"
										/>
									</div>
									<div class="mb-3  col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											Guest Name
										</label>
										<input
											type="text"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="Name"
										/>
									</div>
								</div>

								<div className="row" style={{display:"flex",justifyContent:"center"}}>
									<div class="mb-3 col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											ID Type
										</label>
										<input
											type="email"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder=""
										/>
									</div>
									<div class="mb-3  col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											Profile
										</label>
										<input
											type="file"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder=""
										/>
									</div>
								</div>

								<div className="row" style={{display:"flex",justifyContent:"center"}}>
									<div class="mb-3 col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											CheckIn Date
										</label>
										<input
											type="Date"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="name@example.com"
										/>
									</div>
									<div class="mb-3  col-md-5 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											CheckOut Date
										</label>
										<input
											type="Date"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="name@example.com"
										/>
									</div>
								</div>
								<div >
								<button type="button" class="create-btn" >
									Create
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
}

export default AccessoriesCategory;
