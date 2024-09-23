import React, { useEffect, useState } from "react";
import SummaryApi from "../common";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const AllReviewsPage = () => {
	const [AllReview, setAllReview] = useState([]);
	const fetchAllReview = async (req, res) => {
		const response = await fetch(SummaryApi.getReview.url);
		const dataResponse = await response.json();
		setAllReview(dataResponse?.data || []);
		// console.log(dataResponse?.data);
	};
	async function deleteProductById(productId) {
		try {
			const response = await fetch(
				`${SummaryApi.deleteReview.url}/${productId}`,
				{
					method: SummaryApi.deleteReview.method,
				}
			);

			const result = await response.json(); // Assuming the API returns a JSON response
			if (result.success) {
				toast.success(result?.message);
				fetchAllReview();
			}
			if (result.error) {
				toast.error(result?.message);
			}

			return result; // Return the result for further use if needed
		} catch (error) {
			throw error; // Optionally re-throw the error to be handled by the calling function
		}
	}

	useEffect(() => {
		fetchAllReview();
	}, []);

	return (
		<>
			<div className="bg-white py-2 px-4 flex justify-between items-center shadow-xl ">
				<h2 className="font-bold text-lg">All Reviews</h2>
			</div>
			{/* all products */}
			<div className="h-[calc(100vh-250px)] overflow-y-scroll grid  grid-cols-1 gap-4  p-10">
				{AllReview.map((item, index) => {
					// console.log("item ", item.ClientName);
					return (
						<div className="border-b-2 border-l-2  p-2 flex justify-between items-center">
							<div>
								<div
									className=" flex flex-row justify-start items-center gap-2 font-medium"
									key={index}
								>
									<div
										className={`${
											item.Rating == 1
												? "bg-red-600"
												: item.Rating == 2
												? "bg-secondary"
												: "bg-green-700"
										} p-1 px-2 w-fit h-fit text-white text-base`}
									>
										{item.Rating} ★
									</div>
									<div className=" text-base ">{item.ReviewComment}</div>
								</div>
								<div className="my-3 text-sm text-ellipsis line-clamp-2">
									{item.description}
								</div>
								<div className="text-gray-400 flex flex-row justify-start items-center gap-4">
									<div>{item.ClientName}</div>
									<div className="flex flex-row justify-start items-center gap-1 ">
										<FaCheckCircle /> Certified Buyer
									</div>
								</div>
							</div>
							<div
								className="w-fit  p-2 bg-red-100 hover:bg-red-600 rounded-full hover:text-white cursor-pointer "
								onClick={() => {
									deleteProductById(item._id);
								}}
							>
								<MdDelete />
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default AllReviewsPage;
