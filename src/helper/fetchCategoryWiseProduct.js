const { default: SummaryApi } = require("../common");

const fetchCategoryWiseProduct = async (category) => {
	try {
		const response = await fetch(SummaryApi.get_categoryWiseProduct.url, {
			method: SummaryApi.get_categoryWiseProduct.method,
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				category: category,
			}),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const dataResponse = await response.json();
		return dataResponse;
	} catch (error) {
		console.error("Error fetching category-wise products:", error);
		return { data: [], error: error.message };
	}
};

export default fetchCategoryWiseProduct;
