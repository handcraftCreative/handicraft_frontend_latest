import React, { useEffect, useState } from "react";
import image from "../../assest/img/testimonial-1.jpg";

import {
	FaLongArrowAltLeft,
	FaLongArrowAltRight,
	FaUsers,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const TestimonialMobile = () => {
	const [currentImage, setCurrentImage] = useState(0);

	const desktopImages = [image, image, image];

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
		<div className="max-w-[1400px] h-fit mx-auto  md:hidden block ">
			<div className="w-full  my-10 lg:gap-5 gap-10  sm:px-10  ">
				<div className="w-full flex flex-col pt-32  px-3 " id="testimonial">
					<div className="w-full  flex justify-between items-center lg:items-center flex-row  ">
						<div className="space-y-4 md:space-y-7 max-w-lg ">
							<h1 className="font-medium text-slate-700 text-2xl md:text-3xl lg:text-4xl">
								Our Organic Products
							</h1>
						</div>
						<div className="md:flex justify-between flex-wrap my-8 font-medium text-xl hidden ">
							<button
								onClick={() => preveImage()}
								className="mx-1 my-2 capitalize hover:bg-secondary hover:text-white border border-secondary p-2 rounded-full px-4 min-w-20 flex justify-center items-center"
							>
								<FaLongArrowAltLeft />
							</button>
							<button
								onClick={() => nextImage()}
								className="mx-1 my-2 capitalize hover:bg-secondary hover:text-white border border-secondary p-2 rounded-full px-4 min-w-20 flex justify-center items-center"
							>
								<FaLongArrowAltRight />
							</button>
						</div>
					</div>
					<div className="min-h-80  w-full  relative overflow-hidden rounded-2xl ">
						<div className="h-full min-w-[1050px] flex justify-between items-center flex-row  sm:gap  gap-3 overflow-hidden absolute top-0 left-0 bottom-0 right-0 z-40 ">
							{desktopImages.map((imageUrl, index) => (
								<div
									className="sm:min-w-[55%] max-w-[42%]  bg-forth h-fit grid  justify-center   items-center  rounded-2xl transition-all duration-500  "
									key={index}
									style={{
										transform: `translateX(-${currentImage * 100}%)`,
									}}
								>
									<div className="sm:text-base text-sm">
										<p className="sm:p-5 p-2 py-8">
											Lorem ipsum dolor sit amet, consectetur adip nonum soc
											Lorem ipsum dolor sit amet, consectetur adip nonum
											socLorem ipsum dolor sit amet,
										</p>
									</div>
									<div className=" w-full sm:px-5 px-2">
										<h1 className="h-0.5 w-full bg-secondary"></h1>
									</div>
									<div className="flex justify-between items-center">
										<div className=" h-full w-fit p-2 py-5  gap-2  flex justify-center items-center  sm:col-span-2 ">
											<div className="sm:w-[120px] sm:h-[120px] w-[90px] h-[90px] overflow-hidden rounded-xl">
												<img className="  object-fill   " src={imageUrl} />
											</div>
											<div className=" grid gap-3">
												<h1 className=" font-medium  w-full   sm:text-2xl text-xl whitespace-nowrap capitalize   ">
													Client Name
												</h1>
												<p className="font-normal sm:text-xl text-lg ">
													Profession{" "}
												</p>
												<p className="w-full sm:text-xl text-base font-light whitespace-nowrap flex text-primary">
													{" "}
													<FaStar /> <FaStar />
													<FaStar />
													<FaStar />
													<span className="text-third">
														<FaStar />{" "}
													</span>
												</p>
											</div>
										</div>
										<div className=" w-full flex justify-center items-center  text-3xl text-secondary ">
											<FaQuoteRight />
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialMobile;
