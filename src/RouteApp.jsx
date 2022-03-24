import "../src/Admin.css";
import "./App.css";
import Header from "./componenet/header/Header";
import Sidebar from "./componenet/sidebar/Sidebar";
import Footer from "./componenet/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./componenet/Login&Ragister/Login"
import SingUP from "./componenet/Login&Ragister/SingUp"
import Hotels from "./componenet/Vendor-Dashboard/HotelsDetails/Hotels"
import AddHotels from "./componenet/Vendor-Dashboard/HotelsDetails/AddHotels"
import EditHotel from "./componenet/Vendor-Dashboard/HotelsDetails/EditHotel"
import BookingInquiry from "./componenet/Vendor-Dashboard/BookingInquiry/BookingInquiry"
import EditBookingInquiry from "./componenet/Vendor-Dashboard/BookingInquiry/EditBookingInquiry"
import FAQ from "./componenet/FAQ/FAQ"
import AddFAQ from "./componenet/FAQ/AddFAQ"
import Facility from "./componenet/Admin-Dashborad/Facility/Facility";
import AddFacility from "./componenet/Admin-Dashborad/Facility/AddFacility";
import AdditionalFacility from "./componenet/Admin-Dashborad/Additional-Facility/AdditionalFacility";
import AddAdditionalFacility from "./componenet/Admin-Dashborad/Additional-Facility/AddAdditionalFacility";
import EditAdditionalFacility from "./componenet/Admin-Dashborad/Additional-Facility/EditAdditionalFacility"
import EditFacility from "./componenet/Admin-Dashborad/Facility/EditFacility";
import HotelListing from "./componenet/Admin-Dashborad/Hotel-Listing/HotelListing";
import EditHotelListing from "./componenet/Admin-Dashborad/Hotel-Listing/EditHotelListing"
import HotelBooking from "./componenet/Admin-Dashborad/HotelBooking/HotelBooking";
import AddHotelBooking from "./componenet/Admin-Dashborad/HotelBooking/AddHotelBooking";
import HotelsFilter from "./componenet/Admin-Dashborad/Hotel-Filters/HotelsFilter"
import AddHotelFilter from "./componenet/Admin-Dashborad/Hotel-Filters/AddHotelFilter"






function RouteApp() {


	return (
		<div className="page-wrapper">
			
					<Routes>
					<Route exact path="/login" element={<SingUP/>} />
					</Routes>
					
					

						<div class="page-body-wrapper">
													<Header />

						<Sidebar />
						<Routes>
						
							<Route
								exact
								path="/AddHotels"
								element={<AddHotels />}
								/>
								<Route
								exact
								path="/EditHotel/:id"
								element={<EditHotel />}
								/>
								<Route
								exact
								path="/"
								element={<Hotels />}
								/>
							
								<Route
								exact
								path="/BookingInquiry"
								element={<BookingInquiry />}
								/>
							
								<Route
								exact
								path="/EditBookingInquiry/:id"
								element={<EditBookingInquiry />}
								/>
								<Route
								exact
								path="/FAQ"
								element={<FAQ />}
								/>
								<Route
								exact
								path="/AddFAQ"
								element={<AddFAQ />}
								/>
								<Route
								exact
								path="/Facility"
								element={<Facility />}
								/>
							
								<Route
								exact
								path="/AddFacility"
								element={<AddFacility />}
								/>
								<Route
								exact
								path="/EditFacility"
								element={<EditFacility />}
								/>
								<Route
								exact
								path="/AdditionalFacility"
								element={<AdditionalFacility />}
								/>
								<Route
								exact
								path="/AddAdditionalFacility"
								element={<AddAdditionalFacility />}
								/>
								<Route
								exact
								path="/EditAdditionalFacility"
								element={<EditAdditionalFacility />}
								/>
								<Route
								exact
								path="/HotelListing"
								element={<HotelListing />}
								/>
								<Route
								exact
								path="/EditHotelListing/:id/"
								element={<EditHotelListing />}
								/>
								<Route
								exact
								path="/HotelBooking"
								element={<HotelBooking />}
								/>
								<Route
								exact
								path="/AddHotelBooking"
								element={<AddHotelBooking />}
								/>
								<Route
								exact
								path="/HotelsFilter"
								element={<HotelsFilter />}
								/>
								<Route
								exact
								path="/AddHotelFilter"
								element={<AddHotelFilter />}
								/>
							
								
							</Routes>
							

						<Footer />
					</div>
			

		
					
			
		</div>
	);
}

export default RouteApp;
