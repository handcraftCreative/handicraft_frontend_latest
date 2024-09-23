import React, { useState, useEffect } from "react";
import UploadProducts from "../components/UploadProducts";
import SummaryApi from "../common";
import AdminProductCard from "../components/AdminProductCard";
const AllProducts = () => {
	const [openUploadProduct, setOpenUploadProduct] = useState(false);
	const [AllProducts, setAllProducts] = useState([]);
	const fetchAllProducts = async (req, res) => {
		const response = await fetch(SummaryApi.allProduct.url);
		const dataResponse = await response.json();
		setAllProducts(dataResponse?.data || []);
	};

	useEffect(() => {
		fetchAllProducts();
	}, []);

	return (
		<>
			<div className="bg-white pt-5 pb-2 px-4 flex justify-between items-center shadow-xl ">
				<h2 className="font-bold text-lg">All Product</h2>
				<button
					className="border-2 border-primary text-primary hover:border-secondary hover:bg-secondary hover:text-white transition-all py-1 px-3 rounded-full "
					onClick={() => setOpenUploadProduct(true)}
				>
					Upload Product
				</button>
			</div>
			{/* all products */}
			<div className="h-[calc(100vh-250px)] overflow-y-scroll grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4  p-10">
				{AllProducts.map((product, index) => {
					return (
						<AdminProductCard
							data={product}
							index={index}
							fetchData={fetchAllProducts}
						/>
					);
				})}
			</div>
			{openUploadProduct && (
				<UploadProducts
					onClose={() => setOpenUploadProduct(false)}
					fetchData={fetchAllProducts}
				/>
			)}
		</>
	);
};

export default AllProducts;
