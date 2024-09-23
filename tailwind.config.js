/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#fc118a",
				// primary: "#fc118a",

				secondary: "#9c3163",
				third: "#ffb524",
				forth: "#f4f6f8",
				darkcolor: "#000",
			},
		},
	},

	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				".no-scrollbar": {
					"scrollbar-width": "none" /* Firefox */,
					"-ms-overflow-style": "none" /* Internet Explorer 10+ */,
				},
				".no-scrollbar::-webkit-scrollbar": {
					display: "none" /* Chrome, Safari, and Opera */,
				},
			});
		},
	],
};
