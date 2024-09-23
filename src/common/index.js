const backendDomin = process.env.REACT_APP_API;

const SummaryApi = {
	signUP: {
		url: `${backendDomin}/api/signup`,
		method: "post",
	},
	signIn: {
		url: `${backendDomin}/api/signin`,
		method: "post",
	},
	current_user: {
		url: `${backendDomin}/api/user-details`,
		method: "get",
	},
	logout_user: {
		url: `${backendDomin}/api/userLogout`,
		method: "get",
	},
	allUser: {
		url: `${backendDomin}/api/all-user`,
		method: "get",
	},
	updateUser: {
		url: `${backendDomin}/api/update-user`,
		method: "post",
	},
	uploadProduct: {
		url: `${backendDomin}/api/upload-product`,
		method: "post",
	},
	allProduct: {
		url: `${backendDomin}/api/get-product`,
		method: "get",
	},
	updateProduct: {
		url: `${backendDomin}/api/update-product`,
		method: "post",
	},
	category_Product: {
		url: `${backendDomin}/api/get-categoryProduct`,
		method: "get",
	},
	getProductById: {
		url: `${backendDomin}/api/get-ByIdProduct`,
		method: "get",
	},
	deleteProductById: {
		url: `${backendDomin}/api/delete-Product`,
		method: "delete",
	},
	uploadReview: {
		url: `${backendDomin}/api/post-Review`,
		method: "post",
	},
	getReview: {
		url: `${backendDomin}/api/get-Review`,
		method: "get",
	},
	deleteReview: {
		url: `${backendDomin}/api/delete-Review`,
		method: "delete",
	},
	forgotPassowrd: {
		url: `${backendDomin}/api/forgot-password`,
		method: "post",
	},
	resetPassword: {
		url: `${backendDomin}/api/reset-password`,
		method: "post",
	},
};

export default SummaryApi;
