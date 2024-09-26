import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { useParams } from "react-router-dom";
import SummaryApi from "../../common";
import displayCurrency from "../../helper/displayCurrency";
import ReviewBox from "./ReviewBox";
import Ratingstar from "../../helper/Ratingstar";

const Details = () => {
	const { id } = useParams();
	const [data, setData] = useState(null);
	const [value, setValue] = useState(1);
	const number = "7062326863"; // WhatsApp number

	// Fetch product data by ID
	const fetchProductById = async (productId) => {
		try {
			const response = await fetch(
				`${SummaryApi.getProductById.url}/${productId}`
			);
			const dataResponse = await response.json();
			const product = dataResponse?.data || null;
			setData(product);
		} catch (error) {
			console.error("Error fetching the product:", error);
		}
	};

	// Construct WhatsApp message dynamically
	const getWhatsAppMessage = () => {
		const productname = data?.productName || "N/A";
		const description = data?.description || "N/A";
		const price = data?.price ? displayCurrency(data.price) : "N/A";
		const imageUrl = data?.productImage ? data.productImage[0] : "";
		return `Check out this product:\n\nName: ${productname}\nDescription: ${description}\nPrice: ${price}\nImage: ${imageUrl}`;
	};

	// Combined function to handle WhatsApp sharing
	const openWhatsApp = (withPhoneNumber = false) => {
		const message = getWhatsAppMessage();
		let url = `https://wa.me/`;
		if (withPhoneNumber) {
			url += `${number}?text=${encodeURIComponent(message)}`;
		} else {
			url += `?text=${encodeURIComponent(message)}`;
		}
		window.open(url, "_blank");
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		if (id) {
			fetchProductById(id);
		}
	}, [id]);

	if (!data) {
		return <div>Loading...</div>;
	}

	return (
		<div
			className="flex justify-center items-center m-0 p-0 bg-white"
			id="hero"
		>
			<div className="max-w-7xl mx-auto flex justify-center items-center flex-col px-5">
				<div className="w-full box-border lg:grid grid-cols-12 flex flex-col justify-start items-start my-10 gap-3">
					<div className="col-span-5 py-16 w-full relative h-full">
						<div className="flex justify-center items-start flex-col w-full sticky top-0">
							{data.productImage && (
								<img
									src={data.productImage[0]}
									alt={data.productName}
									className="sm:max-h-[600px] max-h-[400px] w-full min-w-[360px]"
								/>
							)}
						</div>
					</div>
					<div className="col-span-7 flex justify-center items-center flex-col min-h-max md:min-w-[600px] w-full">
						<div className="w-full flex flex-col justify-start items-center lg:mt-16 lg:px-10">
							<h1 className="text-sm font-light capitalize text-black w-full text-start my-1">
								Home / Product-Details
							</h1>
							<h1 className="text-2xl font-light capitalize text-black w-full text-start my-4">
								{data.productName || "Product Title"}
							</h1>
							<h1 className="text-2xl font-light capitalize text-primary w-full text-start my-4">
								<Ratingstar rating={data.productRating} />
								<span className="inline-block mx-2 text-base font-medium">
									{data.productRating} Rating
								</span>
							</h1>
							<div className="flex gap-4 place-self-start">
								<h1 className="text-medium font-medium capitalize text-black w-full text-start my-2 line-through">
									{displayCurrency(data.price)}
								</h1>
								<h1 className="text-medium font-medium capitalize text-red-600 w-full text-start my-2">
									{displayCurrency(data.sellingPrice)}
								</h1>
							</div>
							<h1 className="text-base font-normal capitalize text-black w-full text-start my-4 text-ellipsis line-clamp-2">
								{data.description || "Product description"}
							</h1>

							{/* Share via WhatsApp */}
							<a
								href="javascript:void(0)"
								onClick={(e) => {
									e.preventDefault();
									openWhatsApp(false); // without phone number
								}}
								className="text-sm uppercase border border-primary hover:border-secondary hover:bg-secondary hover:opacity-80 text-center font-bold tracking-[2px] text-primary hover:text-white w-full my-2 p-3"
							>
								Share on WhatsApp
							</a>

							{/* Join via WhatsApp with phone number */}
							<a
								href="javascript:void(0)"
								onClick={(e) => {
									e.preventDefault();
									openWhatsApp(true); // with phone number
								}}
								className="text-sm uppercase bg-secondary border border-secondary hover:opacity-80 text-center font-bold tracking-[2px] text-white w-full my-2 p-3"
							>
								Join on WhatsApp
							</a>

							{/* Reviews */}
							<ReviewBox productId={id} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
