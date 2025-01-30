import React, { useEffect, useState } from "react";
import image1 from "../../assest/img/hero-img-1.jpeg";
import image2 from "../../assest/img/hero-img-2.jpeg";
import image3 from "../../assest/img/hero-img-3.jpeg";
import image1Mobile from "../../assest/img/hero-img-1.jpeg";
import image2Mobile from "../../assest/img/hero-img-2.jpeg";
import image3Mobile from "../../assest/img/hero-img-3.jpeg";

import { FaCarSide } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Hero = () => {
	const [currentImage, setCurrentImage] = useState(0);

	const desktopImages = [image1, image2, image3];
	const mobileImages = [image1Mobile, image2Mobile, image3Mobile];

	const nextImage = () => {
		if (currentImage < desktopImages.length - 1) {
			setCurrentImage((prev) => prev + 1);
		}
	};

	const preveImage = () => {
		if (currentImage !== 0) {
			setCurrentImage((prev) => prev - 1);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (currentImage < desktopImages.length - 1) {
				nextImage();
			} else {
				setCurrentImage(0);
			}
		}, 2000);

		return () => clearInterval(interval);
	}, [currentImage]);

	return (
		<>
			<div id="hero">
				<div className="w-full pt-10 ">
					<div className="w-full  mb-5 sm:mt-40 py-20  hero-header">
						<div className="max-w-[1400px] mx-auto ">
							<div className="w-full grid lg:grid-cols-5 md:grid-cols-2  grid-cols-1 min-h-[330px] my-10 lg:gap-5 gap-10  sm:px-10 px-4">
								<div className="w-full lg:col-span-3">
									<h4 className="text-darkcolor font-semibold text-base md:text-sm lg:text-lg 2xl:text-2xl mb-5">
									    Inspired by Nature, Made by Hand
									</h4>
									<h3 className="mb-5 text-primary text-2xl md:text-2xl lg:text-5xl 2xl:text-4xl font-semibold max-w-[1000px] tracking-normal">
									Discover unique, handcrafted treasures made with love
									</h3>
									<div className="relative max-w-[500px]">
										<input
											className="w-full rounded-full sm:p-4 p-2 px-3 sm:px-4  border border-black  outline-none"
											type="text"
											placeholder="Search"
										/>
										<button
											type="submit"
											className="absolute right-0 h-full  hover:bg-secondary bg-primary transition-all text-white font-medium rounded-full sm:p-4 p-2"
										>
											Submit Now
										</button>
									</div>
								</div>
								<div className="w-full mx-auto  rounded lg:col-span-2  ">
									<div className="h-full  md:max-h-full sm:max-h-80 max-h-60 w-full bg-slate-200 relative">
										<div className="absolute z-10 h-full w-full md:flex items-center hidden">
											<div className="flex justify-between w-full text-3xl px-6">
												<button
													onClick={preveImage}
													className="bg-primary text-white shadow-md opacity-40  hover:opacity-100 border border-white   transition-opacity duration-500 rounded-full p-2"
												>
													<FaAngleLeft />
												</button>
												<button
													onClick={nextImage}
													className="bg-primary text-white shadow-md  opacity-40  hover:opacity-100 border border-white  transition-opacity duration-500 rounded-full p-2"
												>
													<FaAngleRight />
												</button>
											</div>
										</div>

										{/* Desktop and tablet version */}
										<div className="hidden md:flex h-full w-full  overflow-hidden ">
											{desktopImages.map((imageUrl, index) => (
												<div
													className="w-full h-full min-w-full max-h-[400px] transition-all object-fill box-border rounded-2xl"
													key={index}
													style={{
														transform: `translateX(-${currentImage * 100}%)`,
													}}
												>
													<img
														src={imageUrl}
														className="w-full h-full rounded-2xl object-fill"
														alt="slider"
													/>
												</div>
											))}
										</div>

										{/* Mobile version */}
										<div className="flex h-full w-full overflow-hidden md:hidden">
											{mobileImages.map((imageUrl, index) => (
												<div
													className="w-full h-full min-w-full min-h-full transition-all rounded-2xl"
													key={index}
													style={{
														transform: `translateX(-${currentImage * 100}%)`,
													}}
												>
													<img
														src={imageUrl}
														className="w-full h-full object-cover rounded-2xl"
														alt="slider"
													/>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full sm:pt-32 p-16 px-4">
					<div className="max-w-7xl mx-auto grid md:grid-cols-4 grid-cols-2  gap-5 ">
						<div className="bg-slate-100 rounded-xl p-5 w-full h-full flex justify-center items-center flex-col">
							<div className="rounded-full w-fit h-fit p-6  bg-secondary text-7xl relative flex justify-center items-center text-white">
								<FaCarSide />
								<div className="bg-secondary h-8 w-8 absolute -bottom-3  origin-center rotate-45 "></div>
							</div>

							<h1 className="w-full mt-10 font-medium text-slate-700 text-xl text-center">
								Free Shipping
							</h1>
							<p className="w-full text-center font-sm text-slate-700 text-base">
								Free on order over Rs.500
							</p>
						</div>
						<div className="bg-slate-100 rounded-xl p-5 w-full h-full flex justify-center items-center flex-col">
							<div className="rounded-full w-fit h-fit p-6  bg-secondary text-7xl relative flex justify-center items-center text-white">
								<FaUserShield />
								<div className="bg-secondary h-8 w-8 absolute -bottom-3  origin-center rotate-45 "></div>
							</div>

							<h1 className="mt-10 font-medium text-slate-700 text-xl w-full text-center ">
								Security Payment
							</h1>
							<p className="font-sm text-slate-700 text-base w-full text-center ">
								100% security payment
							</p>
						</div>
						<div className="bg-slate-100 rounded-xl p-5 w-full h-full flex justify-center items-center flex-col">
							<div className="rounded-full w-fit h-fit p-6  bg-secondary text-7xl relative flex justify-center items-center text-white">
								<RiArrowLeftRightFill />
								<div className="bg-secondary h-8 w-8 absolute -bottom-3  origin-center rotate-45 "></div>
							</div>

							<h1 className="mt-10 font-medium text-slate-700 text-xl w-full text-center ">
								30 Day Return
							</h1>
							<p className="font-sm text-slate-700 text-base w-full text-center ">
								30 day money guarantee
							</p>
						</div>
						<div className="bg-slate-100 rounded-xl p-5 w-full h-full flex justify-center items-center flex-col">
							<div className="rounded-full w-fit h-fit p-6  bg-secondary text-7xl relative flex justify-center items-center text-white">
								<BsTelephoneFill />
								<div className="bg-secondary h-8 w-8 absolute -bottom-3  origin-center rotate-45 "></div>
							</div>

							<h1 className="mt-10 font-medium text-slate-700 text-xl w-full text-center ">
								24/7 Support
							</h1>
							<p className="font-sm text-slate-700 text-base w-full text-center ">
								Support every time fast
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
