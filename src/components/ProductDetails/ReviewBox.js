import React, { useState, useEffect } from "react";
import productReviews from "../../helper/productReviews";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SummaryApi from "../../common";
import { FaCheckCircle } from "react-icons/fa";

const ReviewBox = ({ productId }) => {
	const user = useSelector((state) => state?.user?.user);
	const [menuDisplay, setMenuDisplay] = useState(false);
	const dispatch = useDispatch(null);
	const navigate = useNavigate();

	const [AllReview, setAllReview] = useState([]);
	const [filterReviews, setFilteredReviews] = useState([]);
	const [data, setData] = useState({
		product_Id: productId,
		Rating: "",
		ClientName: "",
		ReviewComment: "",
		description: "",
	});

	const fetchAllReview = async (req, res) => {
		const response = await fetch(SummaryApi.getReview.url);
		const dataResponse = await response.json();
		setAllReview(dataResponse?.data || []);
		// console.log(dataResponse?.data);
	};

	useEffect(() => {
		if (user) {
			setData((prevData) => ({ ...prevData, ClientName: user.name }));
		}

		fetchAllReview();
	}, [user]);

	useEffect(() => {
		const filterType = (productId) => {
			if (productId === AllReview.product_Id) {
				setFilteredReviews(AllReview);
			} else {
				setFilteredReviews(
					AllReview.filter((item) => item.product_Id === productId)
				);
			}
		};

		filterType(productId);
	}, [AllReview, productId]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		setData((preve) => {
			return {
				...preve,

				[name]: value,
			};
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log("data", data);
		const response = await fetch(SummaryApi.uploadReview.url, {
			method: SummaryApi.uploadReview.method,
			credentials: "include",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const responseData = await response.json();
		if (responseData.success) {
			toast.success(responseData?.message);
			setMenuDisplay(!menuDisplay);
			fetchAllReview();
		}
		if (responseData.error) {
			toast.error(responseData?.message);
		}
	};

	return (
		<div className="w-full grid grid-cols-1  h-full overflow-y-scroll  -mx-4">
			<div className="w-full h-fit min-h-full flex justify-between items-center">
				<div>
					<h4 className="sm:text-2xl text-lg font-medium whitespace-nowrap">
						{" "}
						Ratings & Reviews
					</h4>
				</div>

				<div>
					<button
						className="p-5 py-4 border shadow whitespace-nowrap sm:text-base text-sm"
						onClick={() => {
							setMenuDisplay(!menuDisplay);
							if (!user) {
								toast.error("you must be logged in first");
								navigate("/login");

							}
						}}
					>
						Rate Product
					</button>
				</div>
			</div>

			<div>
				{user && menuDisplay && (
					<form
						className="w-full grid  gap-2  h-full pb-5"
						onSubmit={handleSubmit}
					>
						<label htmlFor="ClientName ">Client Name :</label>

						<input
							type="text"
							id="ClientName "
							name="ClientName"
							placeholder="enter Product Name "
							value={data.ClientName}
							onChange={handleOnChange}
							required
							className="p-2 bg-slate-100  rounded focus:border-black border-2 outline-none solid   "
						/>

						<label htmlFor="category " className="mt-3 ">
							Rating :
						</label>

						<select
							name="Rating"
							value={data.Rating}
							onChange={handleOnChange}
							required
							className="p-2 h-fit bg-slate-100  rounded focus:border-black border-2 outline-none solid   "
						>
							<option value="">Select Rating</option>
							<option value="1" key="1">
								1 Rating
							</option>
							<option value="2" key="2">
								2 Rating
							</option>{" "}
							<option value="3" key="3">
								3 Rating
							</option>{" "}
							<option value="4" key="4">
								4 Rating
							</option>{" "}
							<option value="5" key="5">
								5 Rating
							</option>
						</select>

						<label htmlFor="category " className="mt-3 ">
							Review Comment :
						</label>

						<select
							name="ReviewComment"
							value={data.ReviewComment}
							onChange={handleOnChange}
							required
							className="p-2 h-fit bg-slate-100  rounded focus:border-black border-2 outline-none solid   "
						>
							<option value="">Select Review Comment</option>

							{productReviews.map((el, index) => {
								return (
									<option value={el.value} key={el.value + index}>
										{el.label}
									</option>
								);
							})}
						</select>

						<label htmlFor="description " className="mt-3 ">
							Description :
						</label>

						<textarea
							name="description"
							id="description"
							onChange={handleOnChange}
							required
							value={data.description}
							className="h-20 bg-slate-100 rounded focus:border-black border-2 outline-none resize-none p-1 "
						>
							This product is very Awesome
						</textarea>

						<button
							type="submit"
							className="px-3 py-2 bg-primary text-white mb-10 hover:bg-secondary"
						>
							Upload Rating & Review
						</button>
					</form>
				)}
			</div>
			<div className="w-full h-[470px] overflow-y-scroll no-scrollbar transition-all ">
				{filterReviews.map((item, index) => {
					// console.log("item ", item.ClientName);
					return (
						<div className="border-b-2 border-l-2  p-2">
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
					);
				})}
			</div>
		</div>
	);
};

export default ReviewBox;
