import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginIcons from "../assest/signin.gif";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const ResetPassword = () => {
	const navigate = useNavigate();
	const { token } = useParams(); // Extract the token from the URL
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [error, setError] = useState("");
	const [data, setData] = useState({
		newPassword: "",
		confirmPassword: "",
	});

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (data.newPassword !== data.confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		try {
			const response = await fetch(`${SummaryApi.resetPassword.url}/${token}`, {
				method: SummaryApi.resetPassword.method,
				credentials: "include",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ newPassword: data.newPassword }),
			});

			const dataApi = await response.json();

			if (dataApi.success) {
				toast.success(dataApi.message);
				setError(""); // Clear error message
				navigate("/login");
			} else {
				setError(dataApi.message);
			}
		} catch (error) {
			setError("An error occurred. Please try again.");
			console.log(error);
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
						<div>
							<label>Password:</label>
							<div className="bg-slate-100 p-2 flex">
								<input
									type={showPassword ? "text" : "password"}
									placeholder="Enter password"
									value={data.newPassword}
									name="newPassword"
									onChange={handleOnChange}
									required
									className="w-full h-full outline-none bg-transparent"
								/>
								<div
									className="cursor-pointer text-xl"
									onClick={() => setShowPassword((prev) => !prev)}
								>
									<span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
								</div>
							</div>
						</div>

						<div>
							<label>Confirm Password:</label>
							<div className="bg-slate-100 p-2 flex">
								<input
									type={showConfirmPassword ? "text" : "password"}
									placeholder="Enter confirm password"
									value={data.confirmPassword}
									name="confirmPassword"
									onChange={handleOnChange}
									required
									className="w-full h-full outline-none bg-transparent"
								/>
								<div
									className="cursor-pointer text-xl"
									onClick={() => setShowConfirmPassword((prev) => !prev)}
								>
									<span>
										{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
									</span>
								</div>
							</div>
						</div>

						{error && <p className="text-red-600 mt-2">{error}</p>}

						<button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 whitespace-nowrap">
							Reset Password
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

export default ResetPassword;
