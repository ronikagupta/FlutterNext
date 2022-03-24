import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./componenet/header/Header";
import Sidebar from "./componenet/sidebar/Sidebar";
import Dashboard from "./componenet/Dashboard/Dashboard";
import Footer from "./componenet/Footer/Footer";

//-------------------- Main_Category section start-------------
import MainCategory from "./componenet/MainCategory/MainCategory";
import AddMainCatProduct from "./componenet/MainCategory/AddMainCat_Product";
import EditMainCategory from "./componenet/MainCategory/EditMain_Category";
//-------------------- Main_Category section End-------------

//-------------------- Category section start----------------------------------
import Category from "./componenet/Category/Category";
import AddCategory from "./componenet/Category/AddCategory";
import EditCategory from "./componenet/Category/EditCategory";
//-------------------- Category section End------------------------------------

// -------------Sub_Category section start---------------------
import SubCategory from "./componenet/Subcategorys/SubCategory";
import AddSubCategoryPod from "./componenet/Subcategorys/AddSubCategoryPod";
import EditSubCategoryPod from "./componenet/Subcategorys/EditSubCategoryPod";

// -------------Sub_Category section End---------------------

// Product page start
import Productlist from "./componenet/Product/Productlist";
import Addproduct from "./componenet/Product/Addproduct";
import EditProductList from "./componenet/Product/EditProductList";
// import ProductDetailsPage from "./componenet/Product/ProductDetails";

import Addproductdetails from "./componenet/ProductDetails/Addproductdetails";
import ProductDetails from "./componenet/ProductDetails/ProductDetails";
import EditProductDetails from "./componenet/ProductDetails/EditProductDetails";

import Addproductspeci from "./componenet/ProductSpecifications/Addproductspeci";
import ProductSpecification from "./componenet/ProductSpecifications/ProductSpecification";
import EditProductSpecification from "./componenet/ProductSpecifications/EditProductSpecification";

import Addproductpros from "./componenet/ProductPros/Addproductpros";
import ProductPros from "./componenet/ProductPros/ProductPros";
import EditProductPros from "./componenet/ProductPros/EditProductPros";

import Addprouctcons from "./componenet/ProductCons/Addproductcons";
import ProductCons from "./componenet/ProductCons/ProductCons";
import EditProductCons from "./componenet/ProductCons/EditProductCons";

import Addproductbestuses from "./componenet/ProductBestUses/Addproductbestuses";
import ProductBestUses from "./componenet/ProductBestUses/ProductBestUses";
import EditProductBestUses from "./componenet/ProductBestUses/EditProductBestUses";

import Addproductrating from "./componenet/ProductRating/Addproductrating";
import ProductRating from "./componenet/ProductRating/ProductRating";
import EditProductReating from "./componenet/ProductRating/EditProductReating";

// Product page End

// offerProduct section start
import OfferProducts from "./componenet/OfferProduct/OfferProducts";
import AddOfferProducts from "./componenet/OfferProduct/AddOfferProducts";
import UpdateOfferProducts from "./componenet/OfferProduct/UpdateOfferProducts";
// offerProduct section End

// ----------------------Cart section start---------------------
import Cart from "./componenet/Cart/Cart";

import UpdateCart from "./componenet/Cart/UpdateCart";

// ----------------------Cart section End---------------------

// ----------------------banner section start---------------------
import Banner from "./componenet/Banner/Banner";
import AddBanner from "./componenet/Banner/AddBanner";
import UpdateBanner from "./componenet/Banner/UpdateBanner";

import AddBannerProduct from "./componenet/BannerProducts/AddBannerProduct";
import BannerProduct from "./componenet/BannerProducts/BannerProduct";
import UpdateBannerProduct from "./componenet/BannerProducts/UpdateBannerProduct";

// ----------------------Banner section End---------------------

import ForgotPassword from "./componenet/Auth/ForgotPassword";
import Login from "./componenet/Auth/Login";
import Register from "./componenet/Auth/Register";
import ResetPassword from "./componenet/Auth/ResetPassword";
import VerifyOtp from "./componenet/Auth/VerifyOtp";

import AddOffer from "./componenet/Offer/AddOffer";
import ManageOffer from "./componenet/Offer/ManageOffer";
import UpdateOffer from "./componenet/Offer/UpdateOffer";

import CreatePromocode from "./componenet/Promocode/CreatePromocode";
import ManagePromocode from "./componenet/Promocode/ManagePromocode";
import UpdatePromocode from "./componenet/Promocode/UpdatePromocode";

// import AddUser from "./componenet/User/AddUser";
import ManageUser from "./componenet/User/ManageUser";
import UpdateUser from "./componenet/User/UpdateUser";
import ManageUserAddress from "./componenet/User/ManageUserAddress";
import UpdateUserAddress from "./componenet/User/UpdateUserAddress";
import OrderDetail from "./componenet/Order/OrderDetail";

import AddUserDetails from "./componenet/UserDetails/AddUserDetails";
import ManageUserDetails from "./componenet/UserDetails/ManageUserDetails";
import UpdateUserDetails from "./componenet/UserDetails/UpdateUserDetails";

import AddOrder from "./componenet/Order/AddOrder";
import ManageOrder from "./componenet/Order/ManageOrder";
import UpdateOrder from "./componenet/Order/UpdateOrder";

import AddOrderReview from "./componenet/OrderReview/AddOrderReview";
import ManageOrderReview from "./componenet/OrderReview/ManageOrderReview";
import UpdateOrderReview from "./componenet/OrderReview/UpdateOrderReview";

import AddOrderStatus from "./componenet/OrderStatus/AddOrderStatus";
import ManageOrderStatus from "./componenet/OrderStatus/ManageOrderStatus";
import UpdateOrderStatus from "./componenet/OrderStatus/UpdateOrderStatus";

import CancelOrder from "./componenet/Order/CancelOrder";
import ReturnOrder from "./componenet/Order/ReturnOrder";

import AddProductImages from "./componenet/ProductImages/AddProductImages";
import ManageProductImages from "./componenet/ProductImages/ManageProductImages";
import UpdateProductImages from "./componenet/ProductImages/UpdateProductImages";

// store section start
import Stores from "./componenet/Store/Stores";
import AddStore from "./componenet/Store/AddStore";
import UpdateStore from "./componenet/Store/UpdateStore";
// store section End

// faq section start
import Faq from "./componenet/Faq/Faq";
import AddFaq from "./componenet/Faq/AddFaq";
import UpdateFaq from "./componenet/Faq/UpdateFaq";
// faq section End

// Blog section start
import Blog from "./componenet/Blog/Blog";
import AddBlog from "./componenet/Blog/AddBlog";
import UpdateBlog from "./componenet/Blog/UpdateBlog";
// Blog section End

// Testimonial section start
import Testimonial from "./componenet/Testimonial/Testimonial";
import AddTestimonial from "./componenet/Testimonial/AddTestimonial";
import UpdateTestimonial from "./componenet/Testimonial/UpdateTestimonial";
// Testimonial section End

// Enquiry section start
import Enquiry from "./componenet/Enquiry/Enquiry";
import AddEnquiry from "./componenet/Enquiry/AddEnquiry";
import UpdateEnquiry from "./componenet/Enquiry/UpdateEnquiry";
// Enquiry section End

// Career section start
import Career from "./componenet/Career/Career";
import AddCareer from "./componenet/Career/AddCareer";
import UpdateCareer from "./componenet/Career/UpdateCareer";
// Career section End

// BookAppointment section start
import BookAppointment from "./componenet/BookAppointment/BookAppointment";
import AddBookAppointment from "./componenet/BookAppointment/AddBookAppointment";
import UpdateBookAppointment from "./componenet/BookAppointment/UpdateBookAppointment";
// BookAppointment section End

// contact us section start

import CustomerSupport from "./componenet/CustomerSupport/CustomerSupport";
import UpdateCustomerSupport from "./componenet/CustomerSupport/UpdateCustomerSupport";
// contact us section End

// News us section start

import News from "./componenet/News/News";
import AddNews from "./componenet/News/AddNews";
import UpdateNews from "./componenet/News/UpdateNews";
// News us section End

// Email us section start
import Email from "./componenet/Email/Email";
import AddEmail from "./componenet/Email/AddEmail";
import UpdateEmail from "./componenet/Email/UpdateEmail";
// Email us section End

// categoryContent us section start
import CategoryContent from "./componenet/CategoryContent/CategoryContent";
import AddCategoryContent from "./componenet/CategoryContent/AddCategoryContent";
import UpdateCategoryContent from "./componenet/CategoryContent/UpdateCategoryContent";
// categoryContent us section End

// SubCategoryContent us section start
import SubCategoryContent from "./componenet/SubCategoryContent/SubCategoryContent";
import AddSubCategoryContent from "./componenet/SubCategoryContent/AddSubCategoryContent";
import UpdateSubCategoryContent from "./componenet/SubCategoryContent/UpdateSubCategoryContent";
// categoryContent us section End

// DashboardContent us section start
import DashboardContent from "./componenet/DashboardContent/DashboardContent";
import AddDashboardContent from "./componenet/DashboardContent/AddDashboardContent";
import UpdateDashboardContent from "./componenet/DashboardContent/UpdateDashboardContent";
// DashboardContent us section End

// staticContent us section start
import StaticContent from "./componenet/StaticContent/StaticContent";
import AddStaticContent from "./componenet/StaticContent/AddStaticContent";
import UpdateStaticContent from "./componenet/StaticContent/UpdateStaticContent";
// staticContent us section End

// OfferContent us section start
import OfferProductContent from "./componenet/OfferProductContent/OfferProductContent";
import AddOfferProductContent from "./componenet/OfferProductContent/AddOfferProductContent";
import UpdateOfferProductContent from "./componenet/OfferProductContent/UpdateOfferProductContent";
// OfferContent us section End

// FixBanner us section start
import FixBanner from "./componenet/FixBanner/FixBanner";
import AddFixBanner from "./componenet/FixBanner/AddFixBanner";
import UpdateFixBanner from "./componenet/FixBanner/UpdateFixBanner";
// FixBanner us section End

// DashboardBanner us section start
import DashboardBanner from "./componenet/DashboardBanner/DashboardBanner";
import AddDashboardBanner from "./componenet/DashboardBanner/AddDashboardBanner";
import UpdateDashboardBanner from "./componenet/DashboardBanner/UpdateDashboardBanner";
// DashboardBanner us section End

// DataSecurity us section start
import DataSecurity from "./componenet/DataSecurity/DataSecurity";
import AddDataSecurity from "./componenet/DataSecurity/AddDataSecurity";
import UpdateDataSecurity from "./componenet/DataSecurity/UpdateDataSecurity";
// DataSecurity us section End

// AboutUs us section start
import AboutUs from "./componenet/AboutUs/AboutUs";
import AddAboutUs from "./componenet/AboutUs/AddAboutUs";
import UpdateAboutUs from "./componenet/AboutUs/UpdateAboutUs";
// AboutImage us section End

// GeniusProduct us section start
import GeniusProduct from "./componenet/GeniusProduct/GeniusProduct";
import AddGeniusProduct from "./componenet/GeniusProduct/AddGeniusProduct";
import UpdateGeniusProduct from "./componenet/GeniusProduct/UpdateGeniusProduct";
// GeniusProduct us section End

// PrivacyPolicy us section start
import PrivacyPolicy from "./componenet/PrivacyPolicy/PrivacyPolicy";
import AddPrivacyPolicy from "./componenet/PrivacyPolicy/AddPrivacyPolicy";
import UpdatePrivacyPolicy from "./componenet/PrivacyPolicy/UpdatePrivacyPolicy";
// PrivacyPolicy us section End

// TermsCondition us section start
import TermsCondition from "./componenet/TermsCondition/TermsCondition";
import AddTermsCondition from "./componenet/TermsCondition/AddTermsCondition";
import UpdateTermsCondition from "./componenet/TermsCondition/UpdateTermsCondition";
// TermsCondition us section End

// Covid us section start
import Covid from "./componenet/Covid/Covid";
import AddCovid from "./componenet/Covid/AddCovid";
import UpdateCovid from "./componenet/Covid/UpdateCovid";
// Covid us section End

// ReturnPolicy us section start
import ReturnPolicy from "./componenet/ReturnPolicy/ReturnPolicy";
import AddReturnPolicy from "./componenet/ReturnPolicy/AddReturnPolicy";
import UpdateReturnPolicy from "./componenet/ReturnPolicy/UpdateReturnPolicy";
// ReturnPolicy us section End

import Table from "./Table";

const Home = () => {
  const isLoginData = useSelector((state) => state.AuthReducer);

  let { isSigninIn } = isLoginData;
  return (
    <HashRouter basename="/">
      {isSigninIn !== false ? (
        <>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/forger-password" element={<ForgotPassword />} />
            <Route exact path="/verify-otp" element={<VerifyOtp />} />
            <Route exact path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </>
      ) : (
        <div className="page-wrapper">
          <Header />
          <div className="page-body-wrapper">
            <Sidebar />

            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/mainCategory" element={<MainCategory />} />
              <Route
                exact
                path="/addMainCat_Product"
                element={<AddMainCatProduct />}
              />
              <Route
                exact
                path="/editMain_Category/:id"
                element={<EditMainCategory />}
              />
              {/* ----------Category Route section Saction start-------------- */}
              <Route exact path="/category" element={<Category />} />
              <Route exact path="/addcategory" element={<AddCategory />} />
              <Route
                exact
                path="/editcategory/:id"
                element={<EditCategory />}
              />
              {/* ----------Category Route section Saction End-------------- */}
              {/* --------------------- Sub_Category Rout Section Start----------------- */}
              <Route exact path="/subCategory" element={<SubCategory />} />
              <Route
                exact
                path="/addSubCategoryPod"
                element={<AddSubCategoryPod />}
              />
              <Route
                exact
                path="/editSubCategoryPod/:id"
                element={<EditSubCategoryPod />}
              />
              {/* Product section page Start */}
              <Route exact path="/productlist" element={<Productlist />} />
              <Route
                exact
                path="/productdetails"
                element={<ProductDetails />}
              />
              <Route
                exact
                path="/productspecification"
                element={<ProductSpecification />}
              />
              <Route exact path="/productpros" element={<ProductPros />} />
              <Route exact path="/productcons" element={<ProductCons />} />
              <Route
                exact
                path="/productbestuses"
                element={<ProductBestUses />}
              />
              <Route exact path="/productrating" element={<ProductRating />} />
              {/* Product section page End */}
              {/* Add productforms section start*/}
              <Route exact path="/addproduct" element={<Addproduct />} />
              <Route
                exact
                path="/addproductdetails"
                element={<Addproductdetails />}
              />
              <Route exact path="/addproductcons" element={<Addprouctcons />} />
              <Route
                exact
                path="/addproductpros"
                element={<Addproductpros />}
              />
              <Route
                exact
                path="/addproductspeci"
                element={<Addproductspeci />}
              />
              <Route
                exact
                path="/addproductbestuses"
                element={<Addproductbestuses />}
              />
              <Route
                exact
                path="/addproductrating"
                element={<Addproductrating />}
              />
              {/* Add productforms section End*/}
              {/* Edit product page start */}
              <Route
                exact
                path="/editProductBestUses/:id"
                element={<EditProductBestUses />}
              />
              <Route
                exact
                path="/editProductCons/:id"
                element={<EditProductCons />}
              />
              <Route
                exact
                path="/editProductDetails/:id"
                element={<EditProductDetails />}
              />
              <Route
                exact
                path="/editProductList/:id"
                element={<EditProductList />}
              />
              {/* <Route
                exact
                path="/product-details/:id"
                element={<ProductDetailsPage />}
              /> */}
              <Route
                exact
                path="/editProductPros/:id"
                element={<EditProductPros />}
              />
              <Route
                exact
                path="/editProductreating/:id"
                element={<EditProductReating />}
              />
              <Route
                exact
                path="/editProductSpecification/:id"
                element={<EditProductSpecification />}
              />
              {/* Edit product page End */}
              {/* cart Rout Section start */}
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/updatecart/:id" element={<UpdateCart />} />
              {/* cart Rout Section End */}
              {/* ---------Banner section start------ */}
              <Route exact path="/banner" element={<Banner />} />
              <Route exact path="/addbanner" element={<AddBanner />} />
              <Route
                exact
                path="/updatebanner/:id"
                element={<UpdateBanner />}
              />
              <Route exact path="/bannerproduct" element={<BannerProduct />} />
              <Route
                exact
                path="/updatebannerproduct/:id"
                element={<UpdateBannerProduct />}
              />
              <Route
                exact
                path="/addbannerproduct"
                element={<AddBannerProduct />}
              />
              {/* ---------Banner section End------ */}
              {/* ---------Auth section start------ */}
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route
                exact
                path="/forgot-password"
                element={<ForgotPassword />}
              />
              <Route exact path="/reset-password" element={<ResetPassword />} />
              <Route exact path="/verify-otp" element={<VerifyOtp />} />
              {/* ---------Offer section start------ */}
              <Route exact path="/all-offers" element={<ManageOffer />} />
              <Route exact path="/create-offer" element={<AddOffer />} />
              <Route exact path="/update-offer/:id" element={<UpdateOffer />} />
              {/* ---------Offer section start------ */}
              <Route
                exact
                path="/add-product-images"
                element={<AddProductImages />}
              />
              <Route
                exact
                path="/all-product-images"
                element={<ManageProductImages />}
              />
              <Route
                exact
                path="/update-product-Images/:id"
                element={<UpdateProductImages />}
              />
              {/* ---------Promocode section start------ */}
              <Route
                exact
                path="/all-promocode"
                element={<ManagePromocode />}
              />
              <Route
                exact
                path="/create-promocode"
                element={<CreatePromocode />}
              />
              <Route
                exact
                path="/update-promocode/:id"
                element={<UpdatePromocode />}
              />
              {/* ---------Promocode section End------ */}
              {/* ---------User section start------ */}
              <Route exact path="/all-user" element={<ManageUser />} />
              <Route exact path="/update-user/:id" element={<UpdateUser />} />
              <Route
                exact
                path="/user-address/:id"
                element={<ManageUserAddress />}
              />
              <Route
                exact
                path="/update-user-address/:id"
                element={<UpdateUserAddress />}
              />
              {/* ---------User section End------ */}
              {/* ---------User Details section start------ */}
              <Route
                exact
                path="/all-user-details"
                element={<ManageUserDetails />}
              />
              <Route
                exact
                path="/create-user-details"
                element={<AddUserDetails />}
              />
              <Route
                exact
                path="/update-user-details/:id"
                element={<UpdateUserDetails />}
              />
              {/* ---------User Details section End------ */}
              {/* ---------Order section start------ */}
              <Route exact path="/all-order" element={<ManageOrder />} />
              <Route exact path="/create-order" element={<AddOrder />} />
              <Route exact path="/update-order/:id" element={<UpdateOrder />} />
              <Route exact path="/order-detail/:id" element={<OrderDetail />} />
              <Route
                exact
                path="/cancel-order-detail/:id"
                element={<CancelOrder />}
              />
              <Route
                exact
                path="/return-order-detail/:id"
                element={<ReturnOrder />}
              />
              {/* ---------Order section End------ */}
              {/* ---------Order status section start------ */}
              <Route
                exact
                path="/all-order-status"
                element={<ManageOrderStatus />}
              />
              <Route
                exact
                path="/create-order-status"
                element={<AddOrderStatus />}
              />
              <Route
                exact
                path="/update-order-status/:id"
                element={<UpdateOrderStatus />}
              />
              {/* ---------Order status section End------ */}
              {/* ---------OrderReview section start------ */}
              <Route
                exact
                path="/all-order-review"
                element={<ManageOrderReview />}
              />
              <Route
                exact
                path="/create-order-review"
                element={<AddOrderReview />}
              />
              <Route
                exact
                path="/update-order-review/:id"
                element={<UpdateOrderReview />}
              />
              {/* ---------OrderReview section End------ */}
              {/* offerProduct Routes sections start */}
              <Route exact path="/offer-products" element={<OfferProducts />} />
              <Route
                exact
                path="/add-offer-products"
                element={<AddOfferProducts />}
              />
              <Route
                exact
                path="/update-offer-products/:id"
                element={<UpdateOfferProducts />}
              />
              {/* offerProduct Routes sections End */}
              {/* store Routes start */}
              <Route exact path="/store" element={<Stores />} />
              <Route exact path="/add-store" element={<AddStore />} />
              <Route exact path="/update-store/:id" element={<UpdateStore />} />
              {/* store Routes End */}
              {/* Faq Routes start */}
              <Route exact path="/faq" element={<Faq />} />
              <Route exact path="/add-faq" element={<AddFaq />} />
              <Route exact path="/update-faq/:id" element={<UpdateFaq />} />
              {/* Faq Routes End */}
              {/* Blog Routes start */}
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/add-blog" element={<AddBlog />} />
              <Route exact path="/update-blog/:id" element={<UpdateBlog />} />
              {/* Blog Routes End */}
              {/* Tesimonial Routes start */}
              <Route exact path="/testimonial" element={<Testimonial />} />
              <Route
                exact
                path="/add-testimonial"
                element={<AddTestimonial />}
              />
              <Route
                exact
                path="/update-testimonial/:id"
                element={<UpdateTestimonial />}
              />
              {/* Tesimonial Routes End */}
              {/* Enquiry Routes start */}
              <Route exact path="/enquiry" element={<Enquiry />} />
              <Route exact path="/add-enquiry" element={<AddEnquiry />} />
              <Route
                exact
                path="/update-enquiry/:id"
                element={<UpdateEnquiry />}
              />
              {/* Enquiry Routes End */}
              {/* Career Routes start */}
              <Route exact path="/career" element={<Career />} />
              <Route exact path="/add-career" element={<AddCareer />} />
              <Route
                exact
                path="/update-career/:id"
                element={<UpdateCareer />}
              />
              {/* Career Routes End */}
              {/* BookAppointment Routes start */}
              <Route
                exact
                path="/book-appointment"
                element={<BookAppointment />}
              />
              <Route
                exact
                path="/add-book-appointment"
                element={<AddBookAppointment />}
              />
              <Route
                exact
                path="/update-book-appointment/:id"
                element={<UpdateBookAppointment />}
              />
              {/* BookAppointment Routes End */}

              {/* CustomerSupport Routes start */}
              <Route
                exact
                path="/customer-support"
                element={<CustomerSupport />}
              />

              <Route
                exact
                path="/update-customer-support/:id"
                element={<UpdateCustomerSupport />}
              />
              {/* CustomerSupport Routes End */}

              {/* News Routes start */}
              <Route exact path="/news" element={<News />} />
              <Route exact path="/add-news" element={<AddNews />} />

              <Route exact path="/update-news/:id" element={<UpdateNews />} />
              {/* News Routes End */}

              {/* Email Routes start */}
              <Route exact path="/email" element={<Email />} />
              <Route exact path="/add-email" element={<AddEmail />} />

              <Route exact path="/update-email/:id" element={<UpdateEmail />} />
              {/* Email Routes End */}

              {/* CategoryContent Routes start */}
              <Route
                exact
                path="/category-content"
                element={<CategoryContent />}
              />
              <Route
                exact
                path="/add-category-content"
                element={<AddCategoryContent />}
              />

              <Route
                exact
                path="/update-category-content/:id"
                element={<UpdateCategoryContent />}
              />
              {/* CategoryContent Routes End */}

              {/* SubCategoryContent Routes start */}
              <Route
                exact
                path="/sub-category-content"
                element={<SubCategoryContent />}
              />
              <Route
                exact
                path="/add-sub-category-content"
                element={<AddSubCategoryContent />}
              />

              <Route
                exact
                path="/update-sub-category-content/:id"
                element={<UpdateSubCategoryContent />}
              />
              {/* SubCategoryContent Routes End */}

              {/* StaticContent Routes start */}
              <Route exact path="/static-content" element={<StaticContent />} />
              <Route
                exact
                path="/add-static-content"
                element={<AddStaticContent />}
              />

              <Route
                exact
                path="/update-static-content/:id"
                element={<UpdateStaticContent />}
              />
              {/* StaticContent Routes End */}

              {/* DashboardContent Routes start */}
              <Route
                exact
                path="/dashboard-content"
                element={<DashboardContent />}
              />
              <Route
                exact
                path="/add-dashboard-content"
                element={<AddDashboardContent />}
              />

              <Route
                exact
                path="/update-dashboard-content/:id"
                element={<UpdateDashboardContent />}
              />
              {/* DashboardContent Routes End */}

              {/* OfferContent Routes start */}
              <Route
                exact
                path="/offer-content"
                element={<OfferProductContent />}
              />
              <Route
                exact
                path="/add-offer-content"
                element={<AddOfferProductContent />}
              />

              <Route
                exact
                path="/update-offer-content/:id"
                element={<UpdateOfferProductContent />}
              />
              {/* OfferContent Routes End */}

              {/* OfferContent Routes start */}
              <Route exact path="/fix-banner" element={<FixBanner />} />
              <Route exact path="/add-fix-banner" element={<AddFixBanner />} />

              <Route
                exact
                path="/update-fix-banner/:id"
                element={<UpdateFixBanner />}
              />
              {/* OfferContent Routes End */}

              {/* DashboardBanner Routes start */}
              <Route
                exact
                path="/dashboard-banner"
                element={<DashboardBanner />}
              />
              <Route
                exact
                path="/add-dashboard-banner"
                element={<AddDashboardBanner />}
              />

              <Route
                exact
                path="/update-dashboard-banner/:id"
                element={<UpdateDashboardBanner />}
              />
              {/* DashboardBanner Routes End */}

              {/* DataSecurity Routes start */}
              <Route exact path="/data-security" element={<DataSecurity />} />
              <Route
                exact
                path="/add-data-security"
                element={<AddDataSecurity />}
              />

              <Route
                exact
                path="/update-data-security/:id"
                element={<UpdateDataSecurity />}
              />
              {/* DataSecurity Routes End */}

              {/* AboutUs Routes start */}
              <Route exact path="/aboutus" element={<AboutUs />} />
              <Route exact path="/add-aboutus" element={<AddAboutUs />} />

              <Route
                exact
                path="/update-aboutus/:id"
                element={<UpdateAboutUs />}
              />
              {/* AboutUs Routes End */}

              {/* GeniusProduct Routes start */}
              <Route exact path="/genius-product" element={<GeniusProduct />} />
              <Route
                exact
                path="/add-genius-product"
                element={<AddGeniusProduct />}
              />

              <Route
                exact
                path="/update-genius-product/:id"
                element={<UpdateGeniusProduct />}
              />
              {/* GeniusProduct Routes End */}

              {/* PrivacyPolicy Routes start */}
              <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route
                exact
                path="/add-privacy-policy"
                element={<AddPrivacyPolicy />}
              />

              <Route
                exact
                path="/update-privacy-policy/:id"
                element={<UpdatePrivacyPolicy />}
              />
              {/* PrivacyPolicy Routes End */}

              {/* TermsCondition Routes start */}
              <Route
                exact
                path="/terms-condition"
                element={<TermsCondition />}
              />
              <Route
                exact
                path="/add-terms-condition"
                element={<AddTermsCondition />}
              />

              <Route
                exact
                path="/update-terms-condition/:id"
                element={<UpdateTermsCondition />}
              />
              {/* TermsCondition Routes End*/}

              {/* Covid Routes start */}
              <Route exact path="/covid" element={<Covid />} />
              <Route exact path="/add-covid" element={<AddCovid />} />

              <Route exact path="/update-covid/:id" element={<UpdateCovid />} />
              {/* Covid Routes End */}

              {/* ReturnPolicy Routes start */}
              <Route exact path="/return-policy" element={<ReturnPolicy />} />
              <Route
                exact
                path="/add-return-policy"
                element={<AddReturnPolicy />}
              />

              <Route
                exact
                path="/update-return-policy/:id"
                element={<UpdateReturnPolicy />}
              />
              {/* ReturnPolicy Routes End */}

              <Route exact path="/table" element={<Table />} />
            </Routes>

            <Footer />
          </div>
        </div>
      )}
    </HashRouter>
  );
};

export default Home;
