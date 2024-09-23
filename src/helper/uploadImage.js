const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`;

const uploadImage = async (image) => {
	const formData = new FormData();
	formData.append("file", image);
	formData.append("upload_preset", "mern_products");

	try {
		const dataResponse = await fetch(url, {
			method: "POST",
			body: formData,
		});

		if (!dataResponse.ok) {
			throw new Error(`Upload failed with status ${dataResponse.status}`);
		}

		return await dataResponse.json();
	} catch (error) {
		console.error("Error uploading image:", error);
		throw error; // Re-throw the error so it can be handled by the caller
	}
};

export default uploadImage;
