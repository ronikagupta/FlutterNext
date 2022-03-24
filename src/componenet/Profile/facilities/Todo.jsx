import React from "react";
import "../facilities/Todo.css"

export default function Todo() {
	return (
		<div className="container">
			<div className="row">
				<div className=" col-md-6 list-group">
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
						Main facilities:
					</label>
					<div className=" col-md-8 list-check">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckIndeterminate"
						/>
						<label class="form-check-label" for="flexCheckIndeterminate">
						Airport transfer
						</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckDisabled"
						/>
						<label class="form-check-label" for="flexCheckDisabled">
						Airport transfer						</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckCheckedDisabled"
							checked
						/>
						<label class="form-check-label" for="flexCheckCheckedDisabled">
						Airport transfer						</label>
					</div>
					</div>
				</div>
				<div className=" col-md-6 list-group">
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
						Additional Facilities
					</label>
					<div className=" col-md-8 list-check">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckIndeterminate"
						/>
						<label class="form-check-label" for="flexCheckIndeterminate">
						Airport transfer
						</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckDisabled"
						/>
						<label class="form-check-label" for="flexCheckDisabled">
						Airport transfer						</label>
					</div>
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckCheckedDisabled"
							checked
						/>
						<label class="form-check-label" for="flexCheckCheckedDisabled">
						Airport transfer						</label>
					</div>
					</div>
					</div>
			</div>
		</div>
	);
}
