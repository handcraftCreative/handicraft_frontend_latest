import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import AdminEditProduct from "./AdminEditProduct";
import displayINRCurrency from "../helper/displayCurrency";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const AdminProductCard = ({ data, fetchData, index }) => {
	const [editProduct, setEditProduct] = useState(false);

	async function deleteProductById(productId) {
		try {
			// const response = await fetch(SummaryApi.deleteProductById(productId), {
			// 	method: "DELETE", // Use the DELETE HTTP method
			// });
			const response = await fetch(
				`${SummaryApi.deleteProductById.url}/${productId}`,
				{
					method: SummaryApi.deleteProductById.method,
				}
			);

			const result = await response.json(); // Assuming the API returns a JSON response
			if (result.success) {
				toast.success(result?.message);
				fetchData();
			}
			if (result.error) {
				toast.error(result?.message);
			}
			// console.log("Product deleted successfully:", result);
			return result; // Return the result for further use if needed
		} catch (error) {
			// console.error("Error deleting product:", error);
			throw error; // Optionally re-throw the error to be handled by the calling function
		}
	}

	return (
		<div className="bg-white  h-fit  ">
			<div className="w-full flex justify-center items-center flex-col shadow-2xl shadow-slate-300 p-5 rounded-xl">
				<div className="w-full h-32 flex justify-center items-center">
					<img
						src={data?.productImage[0]}
						alt={data?.productName}
						className="mx-auto object-fill h-full"
					/>
				</div>
				<h1 className="text-ellipsis line-clamp-2">{data.productName}</h1>

				<div className="w-full">
					<div className="w-full flex justify-center items-center">
						<p className="font-semibold mx-auto">
							{displayINRCurrency(data.sellingPrice)}
						</p>
					</div>
					<div className=" w-full flex justify-between items-center flex-row">
						<div
							className="w-fit  p-2 bg-red-100 hover:bg-red-600 rounded-full hover:text-white cursor-pointer "
							onClick={() => {
								deleteProductById(data._id);
							}}
						>
							<MdDelete />
						</div>
						<div
							className="w-fit  p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer "
							onClick={() => setEditProduct(true)}
						>
							<MdModeEditOutline />
						</div>
					</div>
				</div>
			</div>

			{editProduct && (
				<AdminEditProduct
					onClose={() => setEditProduct(false)}
					productData={data}
					fetchData={fetchData}
				/>
			)}
		</div>
	);
};

export default AdminProductCard;
