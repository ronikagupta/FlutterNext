import React from "react";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router";
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

const AddProductSubCategory = () => {

    let navigate = useNavigate();
    function handleClick() {
        navigate(-1)
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
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12" style={Top}>
							<div className="card">
								<div className="card-header d-flex" style={btnrt}>
									<h5>Add New Product </h5>
									<NavLink to="/AddAccessoriesCategory">
                                        <button type="button" class="backBtn" onClick={handleClick}>
                                            {" "}
											back
										</button>
									</NavLink>
								</div>
								<div className="row">
									<div class="mb-3 col-md-6 formFields">
										<label for="exampleFormControlInput1" class="form-label">
											Email address
										</label>
										<input
											type="email"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="name@example.com"
										/>
									</div>
									<div class="mb-3  col-md-6 formFields" >
										<label for="exampleFormControlInput1" class="form-label">
											Image Url
										</label>
										<input
											type="file"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="name@example.com"
										/>
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

export default AddProductSubCategory;
