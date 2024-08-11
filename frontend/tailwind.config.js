// /** @type {import('tailwindcss').Config} */
// export const content = ["./src/**/*.{html,js}"];
// export const theme = {
//   extend: {},
// };
// // eslint-disable-next-line no-undef
// export const plugins = [require("daisyui")];



/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
};