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
	console.log(id);
	const [data, setData] = useState([]);
	const [value, setValue] = useState(1);

	const fetchProductById = async (productId) => {
		try {
			const response = await fetch(
				`${SummaryApi.getProductById.url}/${productId}`
			);

			const dataResponse = await response.json();
			const product = dataResponse?.data || null;
			console.log(product);
			setData(product);
		} catch (error) {
			console.error("Error fetching the product:", error);
		}
	};
	const number = "7062326863";
	const productname = data.productName;
	const description = data.description;
	const price = data.price;
	const imageUrl = data.productImage;
	const message = `Check out this product:\n\nName: ${productname}\nDescription: ${description}\nPrice: ${price}\nImage: ${imageUrl}`;

	const onSubmit = (e) => {
		e.preventDefault();
		let url = `https://web.whatsapp.com/send?phone=${number}`;
		url += `&text=${encodeURI(message)}`;

		window.open(url);
	};
	const onSubmited = (e) => {
		e.preventDefault();

		let url = `https://web.whatsapp.com/send?text=${encodeURIComponent(
			message
		)}`;

		window.open(url);
	};

	// const phoneNumber = "7062326863";
	// const name = data.productName;
	// const category = data.category;
	// const price = data.price;
	// const imageUrl = data.productImage;

	// const message = `Check out this product:\n\nName: ${name}\nCategory: ${category}\nPrice: ${price}\nImage: ${imageUrl}`;
	// const encodedMessage = encodeURIComponent(message);

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
				<div className="w-full box-border lg:grid grid-cols-12 flex flex-col justify-start items-start my-10 gap-3  ">
					<div className="col-span-5 py-16 w-full relative h-full  ">
						<div className="flex justify-center items-start flex-col  w-full sticky top-0">
							{data.productImage && (
								<img
									src={data.productImage[0]}
									alt={data.productName}
									className="sm:max-h-[600px] max-h-[400px] w-full min-w-[360px]"
								/>
							)}
						</div>
					</div>
					<div className=" col-span-7 flex justify-center items-center flex-col min-h-max md:min-w-[600px] w-full ">
						<div className="w-full flex flex-col justify-start items-center lg:mt-16 lg:px-10">
							<h1 className="text-sm font-light capitalize text-black  w-full text-start my-1">
								Home / Product-Details
							</h1>
							<h1 className="text-2xl font-light capitalize text-black  w-full text-start my-4">
								{data.productName || "Product Title"}
							</h1>
							<h1 className="text-2xl font-light capitalize text-primary  w-full text-start my-4">
								<Ratingstar rating={data.productRating} />

								<span className="inline-block mx-2 text-base font-medium">
									{data.productRating} Rating
								</span>
							</h1>
							<div className="flex gap-4 place-self-start">
								<h1 className="text-medium font-medium capitalize text-black  w-full text-start my-2 line-through">
									{displayCurrency(data.price)}
								</h1>
								<h1 className="text-medium font-medium capitalize text-red-600  w-full text-start my-2">
									{displayCurrency(data.sellingPrice)}
								</h1>
							</div>
							<h1 className="text-base font-normal capitalize text-black  w-full text-start my-4 text-ellipsis line-clamp-2 ">
								{data.description || "Product description"}
							</h1>

							<a
								href="_blank"
								onClick={onSubmited}
								className="text-sm uppercase  border border-primary hover:border-secondary hover:bg-secondary hover:opacity-80 text-center font-bold tracking-[2px] text-primary hover:text-white  w-full my-2 p-3"
							>
								Share whatsapp
							</a>
							<a
								href="_blank"
								onClick={onSubmit}
								className="text-sm uppercase bg-secondary border border-secondary hover:opacity-80 text-center font-bold tracking-[2px] text-white  w-full my-2 p-3"
							>
								Join with whatsapp
							</a>
							<ReviewBox productId={id} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;

// import React, { useState } from 'react';

// const SendMessage = () => {
//   const [number, setNumber] = useState('');
//   const [message, setMessage] = useState('');
//   const [image, setImage] = useState('');

//   const onSubmit = (e) => {
//     e.preventDefault();
//     let url = https://web.whatsapp.com/send?phone=${number};
//     url += &text=${encodeURI(message)};
//     url += &image=${encodeURI(image)};
//     window.open(url);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Mobile Number" />
//         <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default SendMessage;
