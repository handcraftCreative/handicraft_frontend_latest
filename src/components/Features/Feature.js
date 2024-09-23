import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import image1 from "../../assest/img/product02.jpeg";
import image2 from "../../assest/img/product03.jpeg";
import image3 from "../../assest/img/product04.jpeg";

const Feature = () => {
	return (
		<>
			<div className="w-full pt-32   px-4" id="feature">
				<div className="max-w-7xl mx-auto grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-5 sm:px-0  px-3 ">
					<div className="w-full  flex justify-start items-start flex-col overflow-hidden rounded-2xl border-secondary border  ">
						<div className="w-full sm:h-[320px] h-[300px] overflow-hidden">
							<img className="w-full h-full object-fill   z-0 " src={image1} />
						</div>
						<div className="bg-secondary w-full sm:h-[120px] h-[80px] py-5 gap-2  rounded-2xl rounded-t-none flex justify-center items-center ">
							<div className="px-10 sm:min-w-64 min-w-48 sm:py-8 py-4 bg-primary rounded-xl w-fit h-fit  flex justify-center items-center flex-col sm:translate-y-[-64px] -translate-y-10 gap-2  ">
								<h1 className="text-white font medium sm:text-xl text-base">
									Fresh Apple
								</h1>
								<p className="text-third font-semibold sm:text-2xl text-xl">
									20% OFF
								</p>
							</div>
						</div>
					</div>
					<div className="w-full  flex justify-start items-start flex-col overflow-hidden rounded-2xl  border-third border">
						<div className="w-full sm:h-[320px] h-[300px] overflow-hidden">
							<img className="w-full h-full object-fill   z-0 " src={image2} />
						</div>
						<div className=" bg-third w-full sm:h-[120px] h-[80px] py-5 gap-2  rounded-2xl rounded-t-none flex justify-center items-center">
							<div className="px-10 sm:min-w-64 min-w-48 sm:py-8 py-4 bg-white rounded-xl w-fit h-fit  flex justify-center items-center flex-col sm:translate-y-[-64px] -translate-y-10 gap-2  ">
								<h1 className="text-primary font medium sm:text-xl text-base">
									Testy Fruits
								</h1>
								<p className="text-third font-semibold sm:text-2xl text-xl">
									Free delivary
								</p>
							</div>
						</div>
					</div>
					<div className="w-full  flex justify-start items-start flex-col overflow-hidden rounded-2xl border-primary border ">
						<div className="w-full sm:h-[320px] h-[300px] overflow-hidden">
							<img className="w-full h-full object-fill   z-0 " src={image3} />
						</div>
						<div className="bg-primary w-full sm:h-[120px] h-[80px] py-5 gap-2  rounded-2xl rounded-t-none flex justify-center items-center ">
							<div className="px-10 sm:min-w-64 min-w-48 sm:py-8 py-4 bg-secondary rounded-xl w-fit h-fit  flex justify-center items-center flex-col sm:translate-y-[-64px] -translate-y-10 gap-2  ">
								<h1 className="text-white font medium sm:text-xl text-base">
									Exotic Vegitables
								</h1>
								<p className="text-third font-semibold sm:text-2xl text-xl">
									Discount 30$
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			;
		</>
	);
};

export default Feature;
