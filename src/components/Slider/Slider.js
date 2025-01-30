import React, { useRef, useState, useEffect } from "react";

import Card from "./Card";
import imageUrl from "../../assest/img/baner-1.png";
import SummaryApi from "../../common";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const Slider = () => {
	const scrollElement = useRef();
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const categoryLoading = new Array(13).fill(null);
	const fetchAllProducts = async () => {
		setLoading(true);
		const response = await fetch(SummaryApi.allProduct.url);
		const dataResponse = await response.json();
		const limit = 10;
		const offset = Math.floor(
			Math.random() * (dataResponse.data.length - limit)
		);
		const randomData = dataResponse.data.slice(offset, offset + limit);
		setLoading(false);
		setData(randomData);
	};

	useEffect(() => {
		fetchAllProducts();
	}, []);

	const scrollRight = () => {
		scrollElement.current.scrollLeft += 305;
	};

	const scrollLeft = () => {
		scrollElement.current.scrollLeft -= 305;
	};

	return (
		<>
			<div className="max-w-7xl mx-auto   px-4 pt-32 ">
				<div className="mx-auto flex justify-between items-start lg:items-center lg:flex-row flex-col gap-4 lg:mb-0 mb-8">
					<div className="space-y-4 md:space-y-7 max-w-lg ">
						<h1 className="font-medium text-slate-700 text-2xl md:text-3xl lg:text-4xl">
						Pure & Natural Creations
						</h1>
					</div>
					<div className="lg:flex justify-between flex-wrap my-8 font-medium text-xl hidden">
						<button
							onClick={() => scrollLeft()}
							className="mx-1 my-2 capitalize hover:bg-secondary hover:text-white border border-secondary p-2 rounded-full px-4 min-w-20 flex justify-center items-center"
						>
							<FaLongArrowAltLeft />
						</button>
						<button
							onClick={() => scrollRight()}
							className="mx-1 my-2 capitalize hover:bg-secondary hover:text-white border border-secondary p-2 rounded-full px-4 min-w-20 flex justify-center items-center"
						>
							<FaLongArrowAltRight />
						</button>
					</div>
				</div>
				<div
					className="w-full flex items-center gap-4 md:gap-6 overflow-x-scroll  no-scrollbar transition-all sm:px-0 p-3 pb-5"
					ref={scrollElement}
				>
					{loading
						? categoryLoading.map((el, index) => {
								return (
									<div
										className="min-w-72 min-h-96 overflow-hidden bg-slate-200 animate-pulse"
										key={"categoryLoading" + index}
									></div>
								);
						  })
						: data.map((item, index) => <Card key={index} data={item} />)}
				</div>
			</div>
			<div className="w-full mb-5 bg-secondary mt-32  ">
				<div className="w-full  mb-5   ">
					<div className="max-w-[1400px] mx-auto p-5">
						<div className="w-full grid  sm:grid-cols-2 grid-cols-1  min-h-[330px] my-10 lg:gap-5 gap-10 sm:px-0 px-5">
							<div className="w-full h-full flex justify-center items-start flex-col gap-5 ">
								<h1 className=" text-white text-2xl md:text-2xl lg:text-3xl 2xl:text-5xl font-semibold tracking-normal">
								Exquisite Handmade Creations
								</h1>
								<h1 className=" text-third text-2xl md:text-2xl lg:text-3xl 2xl:text-5xl font-semibold tracking-normal">
								In Our Collection
								</h1>
								<p className="text-third text-sm">
								Each piece is thoughtfully crafted, ensuring uniqueness and quality. Free from repetition, every item tells its own story.
								</p>
								<button
									type="submit"
									className="h-fit border-2 border-white hover:bg-primary  transition-all text-third font-semibold rounded-full sm:p-4 p-2 min-w-32 uppercase"
								>
									Buy
								</button>
							</div>
							<div className="w-full h-full flex justify-center items-center mx-auto  rounded  box-border  ">
								<div className=" h-full w-full flex justify-center items-center ">
									{/* Desktop and tablet version */}
									<img
										src={imageUrl}
										className=" max-h-[580px] rounded-2xl  object-fill"
										alt="slider"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Slider;
