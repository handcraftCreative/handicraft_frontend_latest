import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import displayCurrency from "../../helper/displayCurrency";
import { Link, useNavigate } from "react-router-dom";
import Ratingstar from "../../helper/Ratingstar";

const Card = (props) => {
	const navigate = useNavigate();

	return (
		<>
			<div className="w-full  grid grid-cols-2 overflow-hidden rounded-2xl bg-forth hover:shadow-black/60 hover:shadow-2xl transition-all duration-500  py-4 ">
				<div className="w-fit h-fit p-5 py-8 overflow-hidden  flex justify-center items-center  ">
					<div className="xl:w-[170px] xl:h-[170px] lg:w-[100px] md:w-[140px] sm:w-[100px] lg:h-[100px] md:h-[140px] sm:h-[100px] w-[120px] h-[120px] overflow-hidden">
						<div className="w-full h-full overflow-hidden rounded-full">
							<img
								className=" rounded-full object-fill   "
								src={props.data.productImage}
							/>
						</div>
					</div>
				</div>
				<div className=" w-full  mg:gap-4 gap-2   flex justify-start items-start my-auto mx-auto flex-col ">
					<h1 className="text-slate-700 font-medium  w-full   text-xl capitalize   ">
						{props.data.productName}
					</h1>
					<p className="w-full text-xl font-light whitespace-nowrap flex text-primary">
						<Ratingstar rating={props.data.productRating} />
					</p>

					<p className="font-semibold text-2xl text-slate-700">
						{displayCurrency(props.data.sellingPrice)}
					</p>
					<Link
						to={`/product-details/${props.data._id}`}
						onClick={() => navigate(`/product-details/${props.data._id}`)}
						className="w-fit text-primary  hover:text-white hover:bg-secondary font-semibold   px-3 py-2  flex justify-center items-center gap-2 border-primary hover:border-secondary border rounded-full text-base capitalize transition-all duration-500  "
					>
						<FaShoppingBag className="text-primary" /> Buy Now
					</Link>
				</div>
			</div>
		</>
	);
};

export default Card;
