import logos from "../../image/logo-f.png";
import $ from "jquery";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
	useEffect(() => {
		$.sidebarMenu = function (menu) {
			var animationSpeed = 300,
				subMenuSelector = ".sidebar-submenu";
			$(menu).on("click", "li a", function (e) {
				var $this = $(this);
				var checkElement = $this.next();
				if (checkElement.is(subMenuSelector) && checkElement.is(":visible")) {
					checkElement.slideUp(animationSpeed, function () {
						checkElement.removeClass("menu-open");
					});
					checkElement.parent("li").removeClass("active");
				} else if (
					checkElement.is(subMenuSelector) &&
					!checkElement.is(":visible")
				) {
					var parent = $this.parents("ul").first();
					var ul = parent.find("ul:visible").slideUp(animationSpeed);
					ul.removeClass("menu-open");
					var parent_li = $this.parent("li");
					checkElement.slideDown(animationSpeed, function () {
						checkElement.addClass("menu-open");
						parent.find("li.active").removeClass("active");
						parent_li.addClass("active");
					});
				}
				if (checkElement.is(subMenuSelector)) {
					e.preventDefault();
				}
			});
		};
		$.sidebarMenu($(".sidebar-menu"));
		var $nav = $(".page-sidebar");
		var $header = $(".page-main-header");
		var $toggle_nav_top = $("#sidebar-toggle");
		$toggle_nav_top.on("click", function () {
			var $this = $(this);
			var $nav = $(".page-sidebar");
			$nav.toggleClass("open");
			$header.toggleClass("open");
		});
		var $body_part_side = $(".body-part");
		$body_part_side.click(function () {
			$nav.addClass("open");
			$header.addClass("open");
		});

		//    responsive sidebar
		var $window = $(window);
		var widthwindow = $window.width();
		(function () {
			if (widthwindow + 17 <= 991) {
				$toggle_nav_top.addClass("open");
				$nav.addClass("open");
			}
		})();
		$(window).on("resize", function () {
			var widthwindaw = $window.width();
			console.log("widthresizing");
			if (widthwindaw + 17 <= 991) {
				$toggle_nav_top.addClass("open");
				$nav.addClass("open");
			} else {
				$toggle_nav_top.removeClass("open");
				$nav.removeClass("open");
			}
		});

		// $(".sidebar-menu>li").removeClass("active");
		$(".sidebar-menu").find("a").removeClass("active");
		$(".sidebar-menu").find("li").removeClass("active");

		var current = window.location.pathname;
		$(".sidebar-menu>li a").filter(function () {
			// console.log(window.location.pathname);
			// console.log($(this).attr("to"));

			var link = $(this).attr("href");
			if (link) {
				if (current.indexOf(link) != -1) {
					$(this).parents("li").addClass("active");
					$(this).addClass("active");
					// console.log(link + " found");
				}
			}
		});
	}, []);

	return (
		<div className="page-sidebar">
			<div className="main-header-left d-none d-lg-block">
				<div className="logo-wrapper">
					<Link to="index.html">
						<img class="blur-up lazyloaded" src={logos} alt="" />
					</Link>
				</div>
			</div>
			<div className="sidebar custom-scrollbar">
				<ul className="sidebar-menu">
				

					<li>
						<Link className="sidebar-header" to="#">
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
								class="feather feather-home"
							>
								<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
								<polyline points="9 22 9 12 15 12 15 22"></polyline>
							</svg>{" "}
							<span className="sidebarstyl" > Vendor Dashboard</span>
							<i class="fa fa-angle-right pull-right"></i>
						</Link>
						<ul className="sidebar-submenu">
							<li>
								<Link to="/Hotels">
									<span> Hotels</span>
								</Link>
							</li>

							
						
							<li>
								<Link to="/BookingInquiry">
									<span> Inquiry Booking</span>
								</Link>
							</li>
						

							<li>
								<Link to="/FAQ">
									<span>FAQ</span>
								</Link>
							</li>
						</ul>
					</li>
					
					<li>
						<Link className="sidebar-header" to="#">
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
								class="feather feather-home"
							>
								<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
								<polyline points="9 22 9 12 15 12 15 22"></polyline>
							</svg>{" "}
							<span  className="sidebarstyl"> Admin Dashboard</span>
							<i class="fa fa-angle-right pull-right"></i>
						</Link>
						<ul className="sidebar-submenu">
						<li>
						<Link to="/HotelListing">
							<span>Hotel-Listing</span>
						</Link>
					</li>
							<li>
								<Link to="/Facility">
									<span>Hotel-Facilities</span>
								</Link>
							</li>

							
						
							<li>
								<Link to="/AdditionalFacility">
									<span> Hotel-Additional-Facilities </span>
								</Link>
							</li>
							<li>
								<Link to="/HotelBooking">
									<span> Hotel-Booking</span>
								</Link>
							</li>
							<li>
								<Link to="/HotelsFilter">
									<span> Hotel-Filter</span>
								</Link>
							</li>
						

						</ul>
					</li>

				
				</ul>
			</div>
		</div>
	);
}

export default Sidebar;
