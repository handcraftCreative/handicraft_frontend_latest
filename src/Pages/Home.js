import React from "react";

import Filter from "../components/Filter/Filter";
import Feature from "../components/Features/Feature";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import BestSellerProduct from "../components/BestSellerProduct/BestSellerProduct";
import Testimonial from "../components/Testimonial/Testmonial";
import TestimonialMobile from "../components/Testimonial/TestimonialMobile";

const Home = () => {
	return (
		<div>
			{/* <CategoryList /> */}
			<Hero />
			<Filter />
			<Feature />
			<Slider />
			<BestSellerProduct />
			{/* <Testimonial /> */}
			{/* <TestimonialMobile /> */}
		</div>
	);
};

export default Home;
