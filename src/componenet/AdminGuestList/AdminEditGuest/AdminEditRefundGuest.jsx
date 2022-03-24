import React from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { Nav, Tabs, Tab ,Form,} from "react-bootstrap";
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
const AdminEditRefundGuest = () => {
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
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-12" style={Top}>
							<div className="card">
								<div className="card-header d-flex" style={btnrt}>
                                    <h5>Edit Canceled Guest Details </h5>
                                    <NavLink to="/AllGestList">
                                    <button type="button" class="backBtn"  onClick={handleClick} >
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
                                     Guest Name:
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
                                        Profile:
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
                                        ID Type:
                                    </label>

                                    <Form.Control type="text" multiple placeholder="ID" />
                                </div>

                                <div class="col-md-6">
                                    <label
                                        for="floatingSelectGrid"
                                        className="form-label"
                                        style={{ display: "flex", justifyContent: "start" }}
                                    >
                                        CheckIn Time :
                                    </label>
                                    <Form.Control
                                        type="email"
                                        multiple
                                        placeholder="DD-MM-YY"
                                    />
                                </div>

                                <div class="col-md-6 ">
                                    <label
                                        for="floatingSelectGrid"
                                        className="form-label"
                                        style={{ display: "flex", justifyContent: "start" }}
                                    >
                                        {" "}
                                        CheckOut Time
                                            </label>
                                            <Form.Control
                                            type="text"
                                            multiple
                                            placeholder="DD-MM-YY"
                                        />

                                 
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
                                                <Form.Control
                                                type="text"
                                                multiple
                                                placeholder="Status"
                                            />
    
                                     
                                    </div>

                             
                                   
                                    <div className="main-update-btn" >
                                    <button type="button" class="update-btn" >
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

export default AdminEditRefundGuest;
