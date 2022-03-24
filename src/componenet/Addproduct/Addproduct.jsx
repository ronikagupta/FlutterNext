import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import swal from "sweetalert";
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
const Addproduct = () => {
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
									<h5>Add New Accessories </h5>
									<NavLink to="/AddAccessoriesCategory">
										<button type="button" class="backBtn" onClick={handleClick}>
											back
										</button>
									</NavLink>
								</div>
								<div className="row">
									<div class="mb-3 col-md-6 formFields">
                    <label for="exampleFormControlInput1" class="form-label">
                      Category Name
										</label>
										<input
											type="email"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="CategoryName"
										/>
									</div>
									<div class="mb-3  col-md-6 formFields" >
										<label for="exampleFormControlInput1" class="form-label">
											Name
										</label>
										<input
											type="email"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="Name"
										/>
                  </div>
                  <div class="mb-3 col-md-6 formFields">
                    <label for="exampleFormControlInput1" class="form-label">
                      Description
										</label>
										<input
											type="email"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="Description"
										/>
									</div>
									<div class="mb-3  col-md-6 formFields" >
                    <label for="exampleFormControlInput1" class="form-label">
                      Category Image
										</label>
										<input
											type="file"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="Image"
										/>
                  </div>
                  <div class="mb-3 col-md-6 formFields">
                    <label for="exampleFormControlInput1" class="form-label">
                      Price
										</label>
										<input
											type="email"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="Price"
										/>
									</div>
									<div class="mb-3  col-md-6 formFields" >
                    <label for="exampleFormControlInput1" class="form-label">
                      Sale Price
										</label>
										<input
											type="email"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="Saleprice"
										/>
                  </div>
                  <div class="mb-3 col-md-6 formFields">
                    <label for="exampleFormControlInput1" class="form-label">
                      Delivery
										</label>
										<input
											type="email"
											class="form-control"
											id="exampleFormControlInput1"
											placeholder="Delivery"
										/>
                  </div>
                  <div class="mb-3 col-md-6 formFields">
                    <button type="submit" className="back-btn" style={{color:"black", backgroundColor:"#3652A2", borderRadius:"5px",marginTop:"5%",width:'100px',height:"40px"}}>Submit</button>
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

export default Addproduct;
