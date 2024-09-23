import React, { useEffect, useState } from "react";
import Card from "./Card";
import SummaryApi from "../../common";
import displayCurrency from "../../helper/displayCurrency";

const Filter = () => {
	const [allProducts, setAllProducts] = useState([]);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [value, setValue] = useState(600);
	const itemsPerPage = 12;

	const categoryLoading = new Array(8).fill(null);

	// Function to fetch all products from the API
	const fetchAllProducts = async () => {
		try {
			setLoading(true);
			const response = await fetch(SummaryApi.allProduct.url);
			const dataResponse = await response.json();
			const products = dataResponse?.data || [];
			setLoading(false);
			setAllProducts(products);
			setData(products); // Display all products by default
		} catch (error) {
			console.error("Error fetching products:", error);
			setLoading(false);
		}
	};

	// Fetch products when the component mounts
	useEffect(() => {
		fetchAllProducts();
	}, []);

	// Effect to filter and sort products whenever 'value' or 'allProducts' changes
	useEffect(() => {
		if (allProducts.length > 0) {
			const filteredAndSorted = allProducts
				.filter((item) => item.sellingPrice <= value) // Filter by sellingPrice
				.sort((a, b) => b.sellingPrice - a.sellingPrice); // Sort in descending order by sellingPrice
			setData(filteredAndSorted);
			setCurrentPage(1); // Reset to the first page when filter changes
		}
	}, [value, allProducts]);

	// Handler for slider value change
	const handleChange = (e) => {
		setValue(Number(e.target.value)); // Convert input value to number
	};

	// Calculate indices for pagination
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

	// Calculate the total number of pages
	const totalPages = Math.ceil(data.length / itemsPerPage);

	// Function to handle page change
	const paginate = (pageNumber) => {
		// Ensure the page number is within valid bounds
		if (pageNumber >= 1 && pageNumber <= totalPages) {
			setCurrentPage(pageNumber);
		}
	};

	return (
		<div
			className="max-w-7xl bg-cover mx-auto bg-no-repeat bg-center lg:block p-2 pt-32 px-4"
			id="products"
		>
			{/* Header and Slider */}
			<div className="mx-auto flex justify-between items-start lg:items-center lg:flex-row flex-col gap-y-4 mb-10">
				<div className="space-y-4 md:space-y-7 max-w-lg">
					<h1 className="font-medium text-slate-700 text-2xl md:text-3xl lg:text-4xl">
						Our Organic Products
					</h1>
				</div>
				<div>
					<input
						type="range"
						min="600"
						max="14000"
						value={value}
						onChange={handleChange}
						className="w-full h-4 bg-secondary rounded-lg appearance-none cursor-pointer"
					/>
					<p>Max Price: {displayCurrency(value)}</p>
				</div>
			</div>

			{/* Products Grid */}
			<div className="sm:grid max-w-7xl mx-auto grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-5 gap-3 flex flex-col justify-center items-center sm:px-0 px-3">
				{loading
					? categoryLoading.map((el, index) => (
							<div
								className="w-full h-96 overflow-hidden bg-slate-200 animate-pulse"
								key={"categoryLoading" + index}
							></div>
					  ))
					: currentItems.map((item) => <Card key={item.id} data={item} />)}
			</div>

			{/* Pagination Controls */}
			<div className="flex justify-center mt-6 space-x-2">
				<button
					className="px-4 py-2 bg-secondary text-white rounded-full disabled:opacity-50"
					onClick={() => paginate(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Prev
				</button>

				{/* Page Numbers */}
				{Array.from({ length: totalPages }, (_, index) => index + 1).map(
					(page) => (
						<button
							key={page}
							onClick={() => paginate(page)}
							className={`px-4 py-2 mx-1 rounded-full ${
								page === currentPage
									? "bg-secondary text-white"
									: "bg-slate-100"
							}`}
						>
							{page}
						</button>
					)
				)}

				<button
					className="px-4 py-2 bg-secondary text-white rounded-full disabled:opacity-50"
					onClick={() => paginate(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Filter;
