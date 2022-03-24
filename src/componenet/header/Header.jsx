import "./header.css";
import user from "../../image/user.png";
import logo from "../../image/logo-f.png";
import { Link,useNavigate } from "react-router-dom";
// import $ from 'jquery';

function Header() {
	let navigate = useNavigate();

	
    const handleLogout = () => {

        // console.log('aSGYUGYUsaSGAS');
        localStorage.removeItem("userDetails");

        console.log('aasaaa');

		navigate('/login');
		window.location.reload();
	};

	return (
		<div className="page-main-header">
			<div className="main-header-right row">
				<div className="main-header-left d-lg-none w-auto">
					<div className="logo-wrapper">
						<Link to="">
							<img class="blur-up lazyloaded" src={logo} alt="" />
						</Link>
					</div>
				</div>
				<div className="mobile-sidebar w-auto">
					<div className="media-body text-end switch-sm">
						<label className="switch">
							<Link to="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class=""
									id="sidebar-toggle"
								>
									<line x1="17" y1="10" x2="3" y2="10"></line>
									<line x1="21" y1="6" x2="3" y2="6"></line>
									<line x1="21" y1="14" x2="3" y2="14"></line>
									<line x1="17" y1="18" x2="3" y2="18"></line>
								</svg>
							</Link>
						</label>
					</div>
				</div>
				<div className="nav-right col">
					<ul className="nav-menus">
						<li>
							<form className="form-inline search-form">
								<div className="form-group">
									<input
										className="form-control-plaintext"
										type="search"
										placeholder="Search.."
									/>
									<span class="d-sm-none mobile-search">
										<i data-feather="search"></i>
									</span>
								</div>
							</form>
						</li>

						<li>
							<Link to="#">
								<i
									className="right_side_toggle"
									data-feather="message-square"
								></i>
							</Link>
						</li>
						<li className="onhover-dropdown">
							<div className="media align-items-center">
								<img
									className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded"
									src={user}
									alt="header-user"
								/>
								<div className="dotted-animation">
									<span className="animate-circle"></span>
									<span class="main-circle"></span>
								</div>
							</div>
							<ul class="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
								<li>
									<Link to="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-user"
										>
											<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
											<circle cx="12" cy="7" r="4"></circle>
										</svg>
										Edit Profile
									</Link>
								</li>
								<li>
									<Link to="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-mail"
										>
											<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
											<polyline points="22,6 12,13 2,6"></polyline>
										</svg>
										Inbox
									</Link>
								</li>
								<li>
									<Link to="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-lock"
										>
											<rect
												x="3"
												y="11"
												width="18"
												height="11"
												rx="2"
												ry="2"
											></rect>
											<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
										</svg>
										Lock Screen
									</Link>
								</li>
								<li>
									<Link to="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-settings"
										>
											<circle cx="12" cy="12" r="3"></circle>
											<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
										</svg>
										Settings
									</Link>
								</li>
								<li>
									<Link to="AdminProfile">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-settings"
										>
											<circle cx="12" cy="12" r="3"></circle>
											<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
										</svg>
										Admin Profile
									</Link>
								</li>
								<li onClick={handleLogout}>
									<Link to="#">
										
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-log-out"
										>
											<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
											<polyline points="16 17 21 12 16 7"></polyline>
											<line x1="21" y1="12" x2="9" y2="12"></line>
										</svg>
										Logout
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<div className="d-lg-none mobile-toggle pull-right">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-more-horizontal"
						>
							<circle cx="12" cy="12" r="1"></circle>
							<circle cx="19" cy="12" r="1"></circle>
							<circle cx="5" cy="12" r="1"></circle>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
