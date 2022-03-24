import { combineReducers } from "redux";
import MainCategoryReduser from "./MainCategoryReduser";
import CategoryReduser from "./CategoryReduser";
import SubCategoryReduser from "./SubCategoryReduser";
import ProductReduser from "./ProductReducer";
import BannerReduser from "./BannerReducer";
import BannerProductReduser from "./BannerProductReducer";
import ProductBestUsesReduser from "./BestUsesReducer";
import AddToCartReduser from "./CartReducer";
import ProductConsReduser from "./ConsReducer";
import OffersReduser from "./OfferCodeReducer";
import OrderReviewReduser from "./OrderReviewReducer";
import OrderReduser from "./OrderReducer";
import OrderStatusReduser from "./OrderStatusReducer";
import ProductDetailsReduser from "./ProductDetailsReducer";
import ProductRatingReduser from "./ProductRatingReducer";
import ProductSpecificationReduser from "./ProductSpecificationReducer";
import PromoCodeReduser from "./PromoCodeReducer";
import ProductProsReduser from "./ProsReducer";
import UserAddressReduser from "./UserAddressReducer";
import UserDetailsReduser from "./UserDetailsReducer";
import UserReduser from "./UserReducer";
import AuthReducer from "./AuthReducer";
import ProductImageReducer from "./ProductImageReducer";
import OfferProductReducer from "./OfferProductReducer";
import StoreReducer from "./StoreReducer";
import FaqReducer from "./FaqReducer";
import BlogReducer from "./BlogReducer";
import EnquiryReducer from "./EnquiryReducer";
import TestimonialReducer from "./TestimonialReducer";
import CareerReducer from "./CareerReducer";
import BookAppointmentReducer from "./BookAppointmentReducer";
import ContactReducer from "./ContactReducer";
import NewsReducer from "./NewsReducer";
import EmailReducer from "./EmailReducer";
import CategoryContentReducer from "./CategoryContentReducer";
import SubCategoryContentReducer from "./SubCategoryContentReducer";
import DashboardContentReducer from "./DashboardContentReducer";
import StaticeContentReducer from "./StaticeContentReducer";
import FixBannerReducer from "./FixBannerReducer";
import OfferContentReducer from "./OfferContentReducer";
import DashboardBannerReducer from "./DashboardBannerReducer";
import DataSecurityReducer from "./DataSecurityReducer";
import LandingPageReducer from "./LandingPageReducer";
import AboutReducer from "./AboutReducer";
import GeniusProductReducer from "./GeniusProductReducer";
import PrivacyPolicyReducer from "./PrivacyPolicyReducer";
import TermsConditionReducer from "./TermsConditionReducer";
import CovidReducer from "./CovidReducer";
import ReturnPolicyReducer from "./ReturnPolicyReducer";

const rootReduser = combineReducers({
  AuthReducer: AuthReducer,
  Banner: BannerReduser,
  BannerProducts: BannerProductReduser,
  Cart: AddToCartReduser,
  CategoryReduser: CategoryReduser,
  MainCategoryReduser: MainCategoryReduser,
  Offers: OffersReduser,
  Order: OrderReduser,
  OrderReview: OrderReviewReduser,
  OrderStatus: OrderStatusReduser,
  Product: ProductReduser,
  ProductImage: ProductImageReducer,
  ProductDetail: ProductDetailsReduser,
  ProductSpecification: ProductSpecificationReduser,
  ProductRating: ProductRatingReduser,
  ProductPros: ProductProsReduser,
  ProductCons: ProductConsReduser,
  ProductBestUses: ProductBestUsesReduser,
  PromoCode: PromoCodeReduser,
  SubCategoryReduser: SubCategoryReduser,
  UserAddress: UserAddressReduser,
  UserDetails: UserDetailsReduser,
  User: UserReduser,
  OfferProduct: OfferProductReducer,
  Store: StoreReducer,
  Faq: FaqReducer,
  Blog: BlogReducer,
  Enquiry: EnquiryReducer,
  Testimonial: TestimonialReducer,
  Career: CareerReducer,
  BookAppointment: BookAppointmentReducer,
  Contact: ContactReducer,
  News: NewsReducer,
  Email: EmailReducer,
  CategoryContent: CategoryContentReducer,
  SubCategoryContent: SubCategoryContentReducer,
  DashboardContent: DashboardContentReducer,
  StaticeContent: StaticeContentReducer,
  FixBanner: FixBannerReducer,
  OfferContent: OfferContentReducer,
  DashboardBanner: DashboardBannerReducer,
  DataSecurity: DataSecurityReducer,
  LandingPage: LandingPageReducer,
  GeniusProduct: GeniusProductReducer,
  About: AboutReducer,
  PrivacyPolicy: PrivacyPolicyReducer,
  TermsCondition: TermsConditionReducer,
  Covid: CovidReducer,
  ReturnPolicy: ReturnPolicyReducer,
});

export default rootReduser;
