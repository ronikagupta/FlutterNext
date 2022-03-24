import React from 'react'

export default function AddAminitiesValue() {
  return (
      <div>
      <div
      className=" col-md-4 list-group"
      style={{ marginLeft: "8.5%" }}
  >
      <label
          for="floatingSelectGrid"
          className="form-label"
          style={{
              display: "flex",
              justifyContent: "left",
              marginLeft: "2%",
          }}
      >
                  {" "}
                  Amenities-Value:
      </label>
      <div className=" col-md- list-check">
          <div class="form-check">
              <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexCheckIndeterminate"
                 
              />
              <label
                  class="form-check-label"
                  for="flexCheckIndeterminate"
              >
                  Airport transfer
              </label>
          </div>
          <div class="form-check">
              <input
                  class="form-check-input"
                  type="checkbox"
             
                  id="flexCheckDisabled"
              />
              <label
                  class="form-check-label"
                  for="flexCheckIndeterminate"
              >
                  Free Wi-Fi in all rooms!
              </label>
          </div>
          <div class="form-check">
              <input
                  class="form-check-input"
                  type="checkbox"
     
                  id="flexCheckDisabled"
              />
              <label
                  class="form-check-label"
                  for="flexCheckIndeterminate"
              >
                  Hot tub
              </label>
          </div>
          <div class="form-check">
              <input
                  class="form-check-input"
                  type="checkbox"
                
                  id="flexCheckDisabled"
              />
              <label
                  class="form-check-label"
                  for="flexCheckIndeterminate"
              >
                  Sauna
              </label>
          </div>
          <div class="form-check">
              <input
                  class="form-check-input"
                  type="checkbox"
              
                  id="flexCheckDisabled"
              />
              <label
                  class="form-check-label"
                  for="flexCheckIndeterminate"
              >
                  Steamroom
              </label>
          </div>
      </div>
  </div>
      </div>
  )
}
