import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';


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
const ProductPros = () => {

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
          swal("Delete!", "You clicked the button!", "success", {
            icon: "success",
          });
        } else {
          swal("Safe!", "You clicked the button!", "success");
        }
      });
  }

  // Delete section End

  // Update sections start

  const Update = () => {
    swal("UPDATE!", "You clicked the button!", "success");
  }
  // Update sections End

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
                  <h5>Product List</h5>
                  <Link to="/addproduct"><button type="button" class="btn btn-primary">Add Product List</button></Link>
                </div>

                <div className="card-body text-center">


                  <table class="table table-borderless">
                    <thead>

                      <th scope="col">Id</th>
                      <th scope="col">CatId</th>
                      <th scope="col">SubCategory</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Image</th>
                      <th scope="col">Action</th>


                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Mark</td>
                        <td>
                          Xiaomi To Launch Mi 10 Series </td>
                        <td>10000.00</td>
                        <td><img src="https://newspapers.ph/wp-content/uploads/2020/03/Mi-10-Series-Online-only-Launch-Event.jpg" style={{ width: "100px" }} alt='pic' /></td>


                        <td><i className="far fa-edit" data-bs-toggle="modal" data-original-title="test" data-bs-target="#EditModal" style={edit}></i><i className="far fa-trash-alt" onClick={Delete} style={trash}></i></td>


                      </tr>


                    </tbody>
                  </table>

                  {/* Edit Modals start */}
                  <div className="modal fade" id="EditModal" tabIndex={-1} aria-labelledby="exampleModalLabel" style={{ display: 'none' }} aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title f-w-600" id="exampleModalLabel">Update Product Sub-Category</h5>
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
                  {/* Edit Modals End */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPros;
