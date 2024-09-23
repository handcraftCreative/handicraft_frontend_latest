import React, { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import Logo from "../Pages/Logo";
import { useDispatch, useSelector } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import { setUserDetails } from "../store/userSlice";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { ImCross } from "react-icons/im";
// import { BsSearch } from "react-icons/bs";
// import { CiDark } from "react-icons/ci";
// import { BiUpArrowAlt } from "react-icons/bi";
import ROLE from "../common/role";
const Header = ({ handleScrollToSection }) => {
	const navigate = useNavigate();

	const [toggle, setToggle] = useState(false);

	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		//scrolling on top
		window.scrollTo(0, 0);
		// Add scroll event listener when the component mounts
		window.addEventListener("scroll", handleScroll);

		// Remove the scroll event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 20) {
			setScrolling(true);
		} else {
			setScrolling(false);
		}
	};

	const user = useSelector((state) => state?.user?.user);
	const [menuDisplay, setMenuDisplay] = useState(false);
	const dispatch = useDispatch(null);
	const handleLogout = async () => {
		try {
			const fetchData = await fetch(SummaryApi.logout_user.url, {
				method: SummaryApi.logout_user.method,
				credentials: "include",
			});
			const data = await fetchData.json();

			if (data.success) {
				toast.success(data.message);
				// Clear local storage, session storage, and cookies
				localStorage.clear();
				sessionStorage.clear();
				document.cookie =
					"token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
				dispatch(setUserDetails(null));
				navigate("/");
			} else if (data.error) {
				toast.error(data.message);
			}
		} catch (error) {
			console.error(error); // Log the error to the console
			toast.error("Logout failed. Please try again.");
		}
	};
	return (
		<>
			<div
				id="header"
				className={`transition-all fixed w-full z-50  ${
					scrolling ? "lg:translate-y-[-56px] shadow-2xl " : "translate-y-0"
				}`}
			>
				<div
					className={`max-w-[1200px] bg-primary mx-auto rounded-tl-2xl rounded-bl-lg rounded-tr-lg rounded-br-2xl p-4 ${
						scrolling ? "h-14" : "h-fit"
					}   lg:block hidden `}
				>
					<div className="flex justify-between">
						<div className="pl-2 flex justify-center items-center flex-row">
							<small className="mr-3 flex justify-center items-center flex-row">
								<span className="text-darkcolor mr-2">
									{" "}
									<FaLocationDot />
								</span>
								<a href="#" className="text-white text-sm">
									123 Street, New York
								</a>
							</small>
							<small className="mr-3 flex justify-center items-center flex-row">
								<span className="text-darkcolor mr-2">
									{" "}
									<MdEmail />
								</span>
								<a href="#" className="text-white text-sm">
									creativecraftedcollection@gmail.com
								</a>
							</small>
						</div>
						<div className="pr-2 text-sm">
							<a href="#" className="text-white">
								<small className="text-white mx-2 text-sm">
									Privacy Policy
								</small>
								/
							</a>
							<a href="#" className="text-white">
								<small className="text-white mx-2 text-sm">Terms of Use</small>/
							</a>
							<a href="#" className="text-white">
								<small className="text-white ml-2 text-sm">
									Sales and Refunds
								</small>
							</a>
						</div>
					</div>
				</div>
				<header className="h-24   bg-white  w-full z-40">
					<div className=" h-full max-w-[1400px] mx-auto flex items-center px-4 justify-between">
						<div className="">
							<NavLink to={"/"}>
								<h1 className="text-primary md:text-4xl sm:text-3xl text-2xl font-bold">
									Handicrafts
								</h1>
							</NavLink>
						</div>
						<div className="hidden gap-x-6 lg:flex xl:gap-x-12">
							<NavLink
								className="text-black  font-medium text-sm xl:text-base hover:text-primary"
								onClick={() => handleScrollToSection("hero")}
							>
								Home
							</NavLink>
							<NavLink
								className="text-black  font-medium text-sm xl:text-base hover:text-primary"
								onClick={() => handleScrollToSection("products")}
							>
								Products
							</NavLink>

							<NavLink
								target=""
								className="text-black  font-medium text-sm xl:text-base hover:text-primary"
								onClick={() => handleScrollToSection("feature")}
							>
								Feature
							</NavLink>
							{/* <NavLink
								className="text-black  font-medium text-sm xl:text-base hover:text-primary"
								onClick={() => handleScrollToSection("testimonial")}
							>
								Testimonial
							</NavLink> */}

							<NavLink
								onClick={() => handleScrollToSection("contact")}
								className="text-black  font-medium text-sm xl:text-base hover:text-primary"
							>
								Contact
							</NavLink>
						</div>
						<div className="flex items-center sm:gap-7 gap-3">
							<div className="relative flex justify-center">
								{user?._id && (
									<div
										className="sm:text-3xl text-2xl cursor-pointer relative flex justify-center"
										onClick={() => setMenuDisplay((preve) => !preve)}
									>
										{user?.profilePic ? (
											<img
												src={user?.profilePic}
												className=" rounded-full w-8 h-8"
												alt={user?.name}
											/>
										) : (
											<FaRegCircleUser />
										)}
									</div>
								)}

								<div className="absolute bg-white bottom-0 top-11 h-fit  shadow-lg rounded">
									{menuDisplay && (
										<nav>
											{user?.role === ROLE.ADMIN && (
												<NavLink
													to={"/admin-panel/all-products"}
													className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
													onClick={() => setMenuDisplay((preve) => !preve)}
												>
													Admin Panel
												</NavLink>
											)}
										</nav>
									)}
								</div>
							</div>

							{/* <NavLink
								to={"/cart"}
								className=" relative text-primary sm:text-3xl text-2xl"
							>
								<span>
									<FaShoppingBag />
								</span>

								<div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
									<p className="text-sm">3</p>
								</div>
							</NavLink> */}

							<div>
								{user?._id ? (
									<button
										onClick={handleLogout}
										className="px-3 py-1 text-primary sm:text-3xl text-2xl"
									>
										<IoLogOut />
									</button>
								) : (
									<NavLink
										to={"/login"}
										className="px-3 py-1 text-primary sm:text-3xl text-2xl"
									>
										<FaUserAlt />
									</NavLink>
								)}
							</div>
							<div className="flex justify-center items-center  flex-row">
								<div className="flex lg:hidden">
									<button
										className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
										onClick={() => {
											setToggle(!toggle);
										}}
									>
										<span className="sr-only">Open main menu</span>
										<span className="w-fit text-primary sm:text-4xl text-3xl">
											<MdOutlineSegment />
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					{toggle && (
						<div className="fixed top-0 bottom-0 left-0 right-0  bg-white/50 min-h-[100vh] w-full ">
							<div className="p-8 bg-white">
								<div className="gap-x-6 flex justify-between">
									<NavLink
										className="-m-1.5 p-1.5 text-black"
										to="/"
										onClick={() => {
											setToggle(!toggle);
										}}
									>
										<h1 className="text-primary text-4xl font-bold">
											Handicrafts
										</h1>

										<span className="sr-only">Your Company</span>
									</NavLink>
									<button
										className="-m-2.5 rounded-md p-2.5 text-black"
										onClick={() => {
											setToggle(!toggle);
										}}
									>
										<span className="sr-only">Close menu</span>
										<span className="w-fit text-2xl">
											<ImCross />
										</span>
									</button>
								</div>
								<div className=" ">
									<div className="-my-6 divide-y divide-gray-500/10">
										<div className="space-y-2 py-6">
											<NavLink
												to="/"
												className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:text-primary"
												onClick={() => {
													setToggle(!toggle);
													handleScrollToSection("hero");
												}}
											>
												Home
											</NavLink>

											<NavLink
												to="/"
												className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:text-primary"
												onClick={() => {
													setToggle(!toggle);
													handleScrollToSection("products");
												}}
											>
												Products
											</NavLink>
											<NavLink
												to="/"
												className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:text-primary"
												onClick={() => {
													setToggle(!toggle);
													handleScrollToSection("feature");
												}}
											>
												Feature
											</NavLink>
											{/* <NavLink
												to="/"
												className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:text-primary"
												onClick={() => {
													setToggle(!toggle);
													handleScrollToSection("testimonial");
												}}
											>
												Testimonial
											</NavLink> */}
											<NavLink
												to="/"
												className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:text-primary"
												onClick={() => {
													setToggle(!toggle);
													handleScrollToSection("contact");
												}}
											>
												Contact
											</NavLink>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</header>
			</div>

			<div
				id="homeButton"
				className={` ${
					scrolling ? "flex" : "hidden"
				} fixed sm:bottom-[12px] bottom-[5px] right-[5px] sm:right-[12px] w-[80px] h-[80px] z-[200] z-40 m-0`}
			>
				<a onClick={() => handleScrollToSection("hero")}>
					<button className="rounded-full text-xl  bg-primary   w-12 h-12  flex justify-center items-center transition ease-in-out delay-100 hover:-translate-y-2  duration-300    shadow shadow-black/50  ">
						<FaArrowUp />
					</button>
				</a>
			</div>
		</>
	);
};

export default Header;
