import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loginIcons from "../assest/signin.gif";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const ForgotPassword = () => {
	const [error, setError] = useState("");

	const [data, setData] = useState({ email: "" });

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(SummaryApi.forgotPassowrd.url, {
				method: SummaryApi.forgotPassowrd.method,
				credentials: "include",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			const dataApi = await response.json();

			if (dataApi.success) {
				toast.success(dataApi.message);
			} else if (dataApi.error) {
				setError(dataApi.message);
			}
		} catch (error) {
			setError("An error occurred. Please try again.");
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section id="hero">
			<div className="mx-auto pt-40 p-4 h-fit">
				<div className="bg-white p-5 w-full max-w-sm mx-auto">
					<div className="w-20 h-20 mx-auto">
						<img src={loginIcons} alt="login icons" />
					</div>

					<form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
						<div className="grid">
							<label>Email:</label>
							<div className="bg-slate-100 p-2">
								<input
									type="email"
									placeholder="Enter email"
									name="email"
									value={data.email}
									onChange={handleOnChange}
									className="w-full h-full outline-none bg-transparent"
									required
								/>
							</div>
						</div>

						{error === "User not found" && (
							<p className="text-red-600 mt-2">
								Email not found! Please register your account.
							</p>
						)}

						<button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 whitespace-nowrap">
							Forgot Password
						</button>
					</form>

					<p className="my-5">
						Don't have an account?{" "}
						<Link
							to={"/sign-up"}
							className="text-red-600 hover:text-red-700 hover:underline"
						>
							Sign up
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
};

export default ForgotPassword;
