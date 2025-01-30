import React, { useEffect, useState } from "react";
import Card from "./Card";
import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import displayCurrency from "../../helper/displayCurrency";
import SummaryApi from "../../common";
import { Link, useNavigate } from "react-router-dom";
import Ratingstar from "../../helper/Ratingstar";
const BestSellerProduct = () => {
	const [data, setData] = useState([]);
	const [data2, setData2] = useState([]);

	const [loading, setLoading] = useState(false);
	const categoryLoading = new Array(6).fill(null);
	const fetchBestSellerProduct = async () => {
		setLoading(true);
		const response = await fetch(SummaryApi.allProduct.url);
		const dataResponse = await response.json();
		const limit = 6;
		const offset = Math.floor(
			Math.random() * (dataResponse.data.length - limit)
		);
		const randomData = dataResponse.data.slice(offset, offset + limit);
		setLoading(false);
		setData(randomData);
	};
	const fetchBestSellerProduct2 = async () => {
		setLoading(true);
		const response = await fetch(SummaryApi.allProduct.url);
		const dataResponse = await response.json();
		const limit = 4;
		const offset = Math.floor(
			Math.random() * (dataResponse.data.length - limit)
		);
		const randomData = dataResponse.data.slice(offset, offset + limit);
		setLoading(false);
		setData2(randomData);
	};
	useEffect(() => {
		fetchBestSellerProduct();
		fetchBestSellerProduct2();
	}, []);

	// const id = props.data._id;
	const navigate = useNavigate();
	return (
		<>
			<div className="max-w-7xl bg-cover mx-auto bg-no-repeat bg-center lg:block pt-32  p-2  px-4">
				<h1 className="font-[500] text-third text-3xl lg:text-4xl  xl:text-5xl w-full  text-center  justify-center items-center flex  mb-5 ">
				Bestseller Handcrafted Treasures
				</h1>
				<p className="text-third  text-base md:text-lg lg:text-[18px] leading-[40px] max-w-[800px] text-center mx-auto">
				Discover our most-loved creations, each crafted with precision and care. Every piece tells a story of artistry and passion.
				</p>

				<div className="sm:grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 flex flex-col justify-center items-center mt-10 ">
					{loading
						? categoryLoading.map((el, index) => (
								<div
									className="w-full h-96 overflow-hidden bg-slate-200 animate-pulse"
									key={"categoryLoading" + index}
								></div>
						  ))
						: data.map((item, index) => <Card key={index} data={item} />)}
				</div>
				<div className="sm:grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 flex flex-col justify-start items-start mt-10 sm:px-0 px-3 ">
					{loading
						? categoryLoading.map((el, index) => (
								<div
									className="w-full h-96 overflow-hidden bg-slate-200 animate-pulse"
									key={"categoryLoading" + index}
								></div>
						  ))
						: data2.map((data, index) => (
								<div
									className="max-w-full   flex justify-start items-start flex-col overflow-hidden  "
									key={index}
								>
									<div className="w-full h-[200px] overflow-hidden rounded-2xl self-start">
										<img
											className="  object-fill  w-full h-full "
											src={data.productImage}
										/>
									</div>

									<div className=" w-full  gap-2  mt-3 flex justify-start items-start my-auto mx-auto flex-col ">
										<h1 className=" text-slate-700 font-medium  w-full  h-[62px]  text-2xl capitalize  text-center  truncate-2-lines ">
											{data.productName}
										</h1>
										<p className="w-full justify-center items-center text-xl font-light whitespace-nowrap flex text-primary  text-center">
											<Ratingstar rating={data.productRating} />
										</p>

										<p className=" w-full font-semibold text-2xl text-slate-700  text-center">
											{displayCurrency(data.sellingPrice)}
										</p>

										<Link
											to={`/product-details/${data._id}`}
											onClick={() => navigate(`/product-details/${data._id}`)}
											className="w-fit text-primary  hover:text-white hover:bg-secondary font-semibold   px-3 py-2  flex justify-center items-center gap-2 border-primary hover:border-secondary border rounded-full text-base capitalize transition-all duration-500 self-center "
										>
											<FaShoppingBag className="text-primary" /> Buy Now
										</Link>
									</div>
								</div>
						  ))}
				</div>
			</div>
		</>
	);
};

export default BestSellerProduct;
