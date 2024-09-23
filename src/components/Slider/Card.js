import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import displayCurrency from "../../helper/displayCurrency";
import { Link, useNavigate } from "react-router-dom";
const Card = (props) => {
	const navigate = useNavigate();
	return (
		<>
			<div className="sm:min-w-[301px]  max-w-[301px] min-w-[280px]  h-[400px]  flex justify-start items-start flex-col overflow-hidden rounded-2xl hover:shadow-black/60 hover:shadow-2xl transition-all duration-500 ">
				<div className="w-full h-[240px] overflow-hidden">
					<img
						className="w-full h-full object-fill  transition-all hover:scale-125 duration-300 z-0 "
						src={props.data.productImage}
						alt={props.data.productName}
					/>
				</div>
				<div className="border-secondary border border-t-0 w-full h-[160px]   grid rounded-2xl rounded-t-none">
					<h1 className="text-slate-700 font-medium  w-full p-2  text-center  text-xl capitalize   ">
						{props.data.productName}
					</h1>
					<p className="w-full text-center text-base px-4 font-light text-ellipsis line-clamp-2">
						{props.data.description}
					</p>
					<div className="w-full px-4 flex justify-between items-center flex-row  p-2 mt-auto">
						<p className="font-semibold text-lg text-slate-700">
							{displayCurrency(props.data.sellingPrice)}
						</p>
						<Link
							to={`/product-details/${props.data._id}`}
							onClick={() => navigate(`/product-details/${props.data._id}`)}
							className="text-primary  hover:text-white hover:bg-secondary font-semibold   px-3 py-2  text-center flex justify-center items-center gap-2 border-primary hover:border-secondary border rounded-full text-base capitalize transition-all duration-500  "
						>
							<FaShoppingBag className="text-primary" /> Buy Now
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
