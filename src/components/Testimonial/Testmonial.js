import React, { useEffect, useState } from "react";
import image from "../../assest/img/testimonial-1.jpg";

import {
	FaLongArrowAltLeft,
	FaLongArrowAltRight,
	FaUsers,
} from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Testmonial = () => {
	const [currentImage, setCurrentImage] = useState(0);

	const desktopImages = [image, image, image];

	const nextImage = () => {
		if (currentImage < desktopImages.length - 2) {
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
			if (currentImage < desktopImages.length - 2) {
				nextImage();
			} else {
				setCurrentImage(0);
			}
		}, 2000);

		return () => clearInterval(interval);
	}, [currentImage]);

	return (
		<div className="max-w-[1400px] h-fit mx-auto hidden md:block ">
			<div className="w-full  my-10 lg:gap-5 gap-10  sm:px-10 px-4">
				<div
					className="w-full flex flex-col pt-32  sm:p-0 px-4  "
					id="testimonial"
				>
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
						<div className="h-full max-w-[1400px] flex justify-between items-center flex-row  gap-6 overflow-hidden absolute top-0 left-0 bottom-0 right-0 z-40 p-4 ">
							{desktopImages.map((imageUrl, index) => (
								<div
									className="min-w-[50%] max-w-[46%] bg-forth h-fit grid  justify-center   items-center  rounded-2xl transition-all duration-500  "
									key={index}
									style={{
										transform: `translateX(-${currentImage * 105}%)`,
									}}
								>
									<div className="sm:text-base text-sm">
										<p className="p-5 py-8">
											Lorem ipsum dolor sit amet, consectetur adip nonum soc
											Lorem ipsum dolor sit amet, consectetur adip nonum
											socLorem ipsum dolor sit amet,
										</p>
									</div>
									<div className=" w-full px-5">
										<h1 className="h-0.5 w-full bg-secondary"></h1>
									</div>
									<div className="grid grid-cols-3">
										<div className=" h-full w-fit p-5 gap-5  flex justify-center items-center  col-span-2 ">
											<div className="w-[120px] h-[120px] overflow-hidden rounded-xl">
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
										<div className=" w-full lg:flex justify-center items-center  text-3xl text-secondary hidden">
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

export default Testmonial;
