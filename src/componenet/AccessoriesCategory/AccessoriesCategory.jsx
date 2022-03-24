import React from 'react';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import AddAccessoriesCategory from "../AccessoriesCategory/AddAccessoriesCategory"
const btnrt = {
  justifyContent: "space-between",
}

const Top = {
  paddingTop: "10px",
}

const trash = {
  paddingLeft: "10px",
  fontSize: "20px",
  color: "red",
}

const edit = {
  paddingLeft: "10px",
  fontSize: "20px",
  color: "blue",

}
const AccessoriesCategory = () => {
  // Delete section starts
  const Delete = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Delete", "Your file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Safe!", "You clicked the button!", "success");
        }
      });
  }
  // Delete section End

  // Update Section start
  const Update = () => {
    swal("UPDATE!", "You clicked the button!", "success");
  }
  // Update Section start  

  // Save Section Start
  const Save = () => {
    swal("Save!", "You clicked the button!", "success");
  }

  // Save Section End
  return (
    <>
      <div className="page-body">
        <div className="container-fluid">

        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12" style={Top}>
              <div className="card">
                <div className="card-header d-flex" style={btnrt}>
                  <h5>Accessories Category </h5>
                  <NavLink to="/AddAccessoriesCategory">     <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-original-title="test" data-bs-target="#exampleModal">Add Category</button></NavLink>
                </div>

                <div className="card-body text-center">
                  
                  <table class="table table-borderless">
                    <thead>

                      <th scope="col">Id</th>
                      <th scope="col">CatId</th>

                      <th scope="col">Name</th>
                      <th scope="col">Image</th>

                      <th scope="col">Action</th>


                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>

                          Xiaomi Mi 10 Pro </td>
                        <td><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpt9i_eUX6YQM3RJKF5oNRPNsVLAgq4pvnEA&usqp=CAU' style={{ width: "90px", height: "90px" }} alt='pic' /></td>


                        <td><i className="far fa-edit" data-bs-toggle="modal" data-original-title="test" data-bs-target="#EditModal" style={edit}></i><i className="far fa-trash-alt" onClick={Delete} style={trash}></i></td>


                      </tr>

                    </tbody>
                  </table>
                  {/* EditModal section start */}
                  <div className="modal fade" id="EditModal" tabIndex={-1} aria-labelledby="exampleModalLabel" style={{ display: 'none' }} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title f-w-600" id="exampleModalLabel">Update Accessories Category</h5>
                          <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        </div>
                        <div className="modal-body">
                          <form className="needs-validation">
                            <div className="form">
                              <div className="form-group">
                                <label htmlFor="validationCustom01" className="mb-1 d-flex">Category Name :</label>
                                <input className="form-control" id="validationCustom01" type="text" />
                              </div>
                              <div className="form-group mb-0">
                                <label htmlFor="validationCustom02" className="mb-1 d-flex">Category Image :</label>
                                <input className="form-control" id="validationCustom02" type="file" />
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button className="btn btn-primary" type="button" onClick={Update}>Update</button>
                          <button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EditModal section End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessoriesCategory;
