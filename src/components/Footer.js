import React from "react";
import pay1 from "../assest/img/payment.png";

import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMobile } from "react-icons/ai";
import { TfiFacebook, TfiInstagram } from "react-icons/tfi";
import { FaLinkedinIn, FaTelegram, FaYoutube } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<div id="contact" className="pt-32">
				<div className="w-full h-full bg-white xl:px-0 px-5 md:pt-20 py-10">
					<div className="max-w-7xl  mx-auto   p-2 gap-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  ">
						<div className="">
							<h1 className="text-primary text-4xl font-bold">Handcrafted</h1>
							<p className="text-secondary">Event Treasures</p>
							{/* <p className="text-white  font-medium sm:text-sm text-xs my-5 tracking-wide">
								{" "}
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Voluptatibus facere modi possimus dignissimos, aliquam nobis
								eaque? Voluptatem magnam quisquam rem.{" "}
							</p> */}
						</div>

						<div className="w-full h-14 justify-between items-start  lg:col-span-2 ">
							<div className="relative w-full">
								<input
									className="w-full rounded-full sm:p-4 p-2 px-3 sm:px-4  border border-black outline-none"
									type="text"
									placeholder="Search"
								/>
								<button
									type="submit"
									className="absolute right-0 h-full  hover:bg-secondary bg-primary transition-all text-white font-semibold rounded-full sm:p-4 p-2"
								>
									Subscribe Now
								</button>
							</div>
						</div>
						<div className="w-full flex justify-end items-center my-3 self-end gap-2 ">
							<button className="rounded-full text-lg p-3  border border-secondary flex justify-center items-center  hover:bg-secondary  text-secondary hover:text-white  transition-all duration-300   ">
								<a className="" href="#">
									<FaTelegram />
								</a>
							</button>
							<button className="rounded-full text-lg p-3  border border-secondary flex justify-center items-center  hover:bg-secondary  text-secondary hover:text-white  transition-all duration-300   ">
								<a className="" href="#">
									<TfiInstagram />
								</a>
							</button>
							{/* <button className="rounded-full text-lg p-3  border border-secondary flex justify-center items-center  hover:bg-secondary  text-secondary hover:text-white  transition-all duration-300   ">
								<a className="" href="#">
									<FaYoutube />
								</a>
							</button> */}
							{/* <button className="rounded-full text-lg p-3  border border-secondary flex justify-center items-center  hover:bg-secondary  text-secondary hover:text-white  transition-all duration-300   ">
								<a className="" href="#">
									<FaLinkedinIn />
								</a>
							</button> */}
						</div>
					</div>

					<div className=" max-w-7xl mx-auto sm:px-0 px-5 ">
						<h1 className="h-[1px] w-full bg-secondary opacity-65 mt-5"></h1>
					</div>
					<div className="max-w-7xl  mx-auto pt-5 p-2 gap-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  ">
						<div className="w-full flex justify-start items-start flex-col gap-4">
							<h1 className="text-white capitalize font-medium text-2xl">
								Why People Like us!
							</h1>
							<p className=" text-base py-1 text-slate-800 flex leading-10 ">
							Elevate your special moments with unique, artisan-crafted products designed to add a touch of elegance and charm.
							</p>
							<button
								type="submit"
								className="border border-primary hover:border-secondary hover:bg-secondary text-primary hover:text-white transition-all  font-medium rounded-full  p-2 px-4"
							>
								Read More
							</button>
						</div>
						<div className="w-full flex md:justify-around justify-between items-start  lg:col-span-2">
							<div className="flex justify-start items-start flex-col gap-4">
								<h1 className="text-white capitalize font-medium text-2xl">
									Shop Info
								</h1>
								<ul className="grid gap-3">
									<li className=" text-zinc-400 hover:text-secondary cursor-pointer text-base">
										About Us
									</li>
									<li className=" text-zinc-400 hover:text-secondary cursor-pointer text-base">
										Contact Us
									</li>
									<li className=" text-zinc-400 hover:text-secondary cursor-pointer text-base">
										Privacy Policy
									</li>
									<li className=" text-zinc-400 hover:text-secondary cursor-pointer text-base">
										Terms and Conditions
									</li>
									<li className=" text-zinc-400 hover:text-secondary cursor-pointer text-base">
										Return Policy
									</li>
									<li className=" text-zinc-400 hover:text-secondary cursor-pointer text-base">
										FAQs & Help
									</li>
								</ul>
							</div>
							<div className="flex justify-start items-start flex-col gap-4">
								<h1 className="text-white capitalize font-medium text-2xl">
									Account
								</h1>
								<ul className="grid gap-3">
									<li className=" text-zinc-400 hover:text-secondary cursor-pointer text-base">
										My Account
									</li>
									<li className=" text-zinc-400 hover:text-secondary cursor-pointer text-base">
										Shop Details
									</li>
									<li className=" text-zinc-400 hover:text-secondary cursor-pointer text-base">
										Shoping Cart
									</li>
									<li className=" text-zinc-400 hover:text-secondary cursor-pointer text-base">
										Wishlist
									</li>
									<li className=" text-zinc-400 hover:text-secondary cursor-pointer text-base">
										Order History
									</li>
									<li className=" text-zinc-400 hover:text-secondary cursor-pointer text-base">
										International Order
									</li>
								</ul>
							</div>
						</div>
						<div className="w-full flex justify-start items-start ">
							<div className="flex justify-start items-start flex-col gap-4">
								<h1 className="text-white capitalize font-medium text-2xl ">
									contact information
								</h1>
								<ul className="grid gap-3">
									<li className="">
										<a
											href="#"
											className=" text-2xl text-secondary py-1  flex justify-start items-center "
										>
											{" "}
											<HiOutlineLocationMarker />{" "}
											<span className="text-slate-900  transition ease-in-out delay-100 hover:translate-x-2  duration-300 text-sm font-medium  mx-2  ">
											77 Street,Sitamarhi
											</span>
										</a>
									</li>
									<li className="">
										<a
											href="#"
											className=" text-2xl text-secondary py-1  flex justify-start items-center "
										>
											<AiOutlineMail />{" "}
											<span className="text-slate-900   transition ease-in-out delay-100 hover:translate-x-2  duration-300 text-sm font-medium mx-2 ">
												creativecraftedcollection@gmail.com
											</span>
										</a>
									</li>
									<li className="">
										<a
											href="#"
											className=" text-2xl text-secondary py-1 flex justify-start items-center "
										>
											<AiOutlineMobile />{" "}
											<span className="text-slate-900  transition ease-in-out delay-100 hover:translate-x-2  duration-300 text-sm font-medium  mx-2  ">
												+91-9999999999{" "}
											</span>
										</a>
									</li>
									<div className="w-full flex justify-start items-center my-3 self-end gap-2">
										<div className="w-full gap-3 grid">
											<h1 className="text-slate-900 text-base">
												Payment Accepted
											</h1>
											<img
												className="object-fill "
												alt="payment way"
												src={pay1}
											/>
										</div>
									</div>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
