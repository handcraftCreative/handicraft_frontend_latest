import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
// import productCategory from "../helper/productCategory";
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from "../helper/uploadImage";
import DisplayImage from "./DisplayImage";
import { MdDelete } from "react-icons/md";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const AdminEditProduct = ({ onClose, productData, fetchData }) => {
	const [openFullScreenImage, setOpenFullScreenImage] = useState(false);
	const [fullScreenImage, setFullScreenImage] = useState("");
	const [data, setData] = useState({
		...productData,
		productName: productData?.productName,
		productRating: productData?.productRating,
		// brandName: productData?.brandName,
		// category: productData?.category,
		productImage: productData?.productImage || [],
		description: productData?.description,
		price: productData?.price,
		sellingPrice: productData?.sellingPrice,
	});
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setData((preve) => {
			return {
				...preve,
				[name]: value,
			};
		});
	};
	const handleUploadProduct = async (e) => {
		const file = e.target.files[0];

		const uploadImageCloudnary = await uploadImage(file);
		setData((preve) => {
			return {
				...preve,
				productImage: [...preve.productImage, uploadImageCloudnary.url],
			};
		});
		// console.log("file upload", uploadImageCloudnary);
	};
	const handleDeleteProductImage = async (index) => {
		// console.log("image index", index);

		const newProductImage = [...data.productImage];
		newProductImage.splice(index, 1);

		setData((preve) => {
			return {
				...preve,
				productImage: [...newProductImage],
			};
		});
	};

	// upload product
	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(SummaryApi.updateProduct.url, {
			method: SummaryApi.updateProduct.method,
			credentials: "include",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const responseData = await response.json();
		if (responseData.success) {
			toast.success(responseData?.message);
			onClose();
			fetchData();
		}
		if (responseData.error) {
			toast.error(responseData?.message);
		}
	};
	return (
		<>
			<div className="fixed w-full  h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
				<div className="bg-white  p-4 rounded w-full  max-w-2xl h-full max-h-[80%] overflow-hidden">
					<div className="flex justify-between items-center ">
						<h2 className="font-bold text-xl">Edit Products</h2>
						<button
							className="block ml-auto text-3xl cursor-pointer hover:text-red-600 font-bold"
							onClick={onClose}
						>
							<IoMdClose />
						</button>
					</div>
					<form
						className="grid p-4 gap-2 overflow-y-scroll h-full pb-5"
						onSubmit={handleSubmit}
					>
						<label htmlFor="productName ">Product Name :</label>
						<input
							type="text"
							id="productName "
							name="productName"
							placeholder="enter Product Name "
							value={data.productName}
							onChange={handleOnChange}
							required
							className="p-2 bg-slate-100  rounded focus:border-black border-2 outline-none solid   "
						/>
						<select
							name="productRating"
							value={data.productRating}
							onChange={handleOnChange}
							required
							className="p-2 h-fit bg-slate-100  rounded focus:border-black border-2 outline-none solid   "
						>
							<option value="">Select Rating</option>
							<option value="1" key="1">
								1 Rating
							</option>
							<option value="1.5" key="2">
								1.5 Rating
							</option>{" "}
							<option value="2" key="3">
								2 Rating
							</option>{" "}
							<option value="2.5" key="4">
								2.5 Rating
							</option>{" "}
							<option value="3" key="5">
								3 Rating
							</option>
							<option value="3.5" key="6">
								3.5 Rating
							</option>
							<option value="4" key="7">
								4 Rating
							</option>{" "}
							<option value="4.5" key="8">
								4.5 Rating
							</option>{" "}
							<option value="5" key="9">
								5 Rating
							</option>{" "}
						</select>
						{/* <label htmlFor="brandName " className="mt-3 ">
							Brand Name :
						</label>
						<input
							type="text"
							id="brandName "
							name="brandName"
							placeholder="enter Brand Name "
							value={data.brandName}
							onChange={handleOnChange}
							required
							className="p-2 bg-slate-100  rounded focus:border-black border-2 outline-none solid   "
						/>
						<label htmlFor="category " className="mt-3 ">
							Category :
						</label>
						<select
							name="category"
							value={data.category}
							onChange={handleOnChange}
							required
							className="p-2 bg-slate-100  rounded focus:border-black border-2 outline-none solid   "
						>
							<option value="">Select Category</option>
							{productCategory.map((el, index) => {
								return (
									<option value={el.value} key={el.value + index}>
										{el.label}
									</option>
								);
							})}
						</select> */}
						<label htmlFor="productImage " className="mt-3 ">
							Product Image :
						</label>
						<label htmlFor="uploadImageInput">
							<div className="p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer">
								<div className="text-slate-500 flex justify-center items-center flex-col gap-2">
									<span className="text-4xl">
										<FaCloudUploadAlt />
									</span>
									<p className="text-sm">Upload Product Image</p>
									<input
										type="file"
										id="uploadImageInput"
										className="hidden"
										onChange={handleUploadProduct}
									/>
								</div>
							</div>
						</label>
						<div className="grid grid-cols-4 gap-2 my-4 ">
							{data?.productImage[0] ? (
								data.productImage.map((el, index) => {
									return (
										<div className="relative group">
											<img
												src={el}
												key={index}
												alt={el}
												className="bg-slate-100  border  w-full h-full max-h-32 min-w-full min-h-full"
												onClick={() => {
													setOpenFullScreenImage(true);
													setFullScreenImage(el);
												}}
											/>
											<div
												className="absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer"
												onClick={() => handleDeleteProductImage(index)}
											>
												<MdDelete />
											</div>
										</div>
									);
								})
							) : (
								<p className="whitespace-nowrap">
									* please upload product image{" "}
								</p>
							)}
						</div>
						<label htmlFor="price " className="mt-3 ">
							Price:
						</label>
						<input
							type="text"
							id="price "
							name="price"
							placeholder="enter price "
							value={data.price}
							onChange={handleOnChange}
							required
							className="p-2 bg-slate-100 rounded focus:border-black border-2 outline-none solid   "
						/>{" "}
						<label htmlFor="sellingPrice " className="mt-3 ">
							Selling Price :
						</label>
						<input
							type="text"
							id="sellingPrice "
							name="sellingPrice"
							placeholder="enter selling price "
							value={data.sellingPrice}
							onChange={handleOnChange}
							required
							className="p-2 bg-slate-100  rounded focus:border-black border-2 outline-none solid   "
						/>
						<label htmlFor="description " className="mt-3 ">
							Description :
						</label>
						<textarea
							name="description"
							id="description"
							onChange={handleOnChange}
							required
							value={data.description}
							className="h-28 bg-slate-100 rounded focus:border-black border-2 outline-none resize-none p-1 "
						>
							This product is very Awesome
						</textarea>
						<button
							type="submit"
							className="px-3 py-2 bg-primary text-white mb-10 hover:bg-secondary"
						>
							Update Product
						</button>
					</form>
				</div>

				{/***display image full screen */}
				{openFullScreenImage && (
					<DisplayImage
						onClose={() => setOpenFullScreenImage(false)}
						imgUrl={fullScreenImage}
					/>
				)}
			</div>
		</>
	);
};

export default AdminEditProduct;
