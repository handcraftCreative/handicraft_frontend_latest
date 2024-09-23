import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import displayCurrency from "../../helper/displayCurrency";
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {
	const id = props.data._id;
	const navigate = useNavigate();
	return (
		<>
			<div className="w-full h-[400px] max-w-[400px] mx-auto flex justify-start items-start flex-col overflow-hidden rounded-2xl hover:shadow-black/60 hover:shadow-2xl transition-all duration-500 ">
				<div className="w-full h-[240px] overflow-hidden">
					<img
						className="w-full h-full object-fill  transition-all hover:scale-125 duration-300 z-0 "
						src={props.data.productImage[0]}
					/>
				</div>
				<div className="border-secondary border border-t-0 w-full  grid rounded-2xl rounded-t-none h-[160px] box-border">
					<h1 className="text-slate-700 font-medium  w-full  flex justify-center items-center p-2  text-center  text-xl capitalize   m-0 h-fit  ">
						{props.data.productName}
					</h1>
					<p className="w-full text-center text-base px-4 font-normal  text-ellipsis line-clamp-2  ">
						{props.data.description}
					</p>
					<div className="w-full h-fit py-2 mt-auto px-4 flex justify-between items-center flex-row flex-wrap   ">
						<p className="font-semibold text-lg text-slate-700">
							{displayCurrency(props.data.sellingPrice)}
						</p>
						<Link
							to={`/product-details/${id}`}
							onClick={() => navigate(`/product-details/${id}`)}
							className="text-primary  hover:text-white  hover:bg-secondary font-semibold   px-3 py-2  text-center flex justify-center items-center gap-2 border-primary hover:border-secondary border rounded-full lg:text-base text-sm capitalize transition-all duration-500  "
						>
							<FaShoppingBag className="text-primary" /> Buy now
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;
