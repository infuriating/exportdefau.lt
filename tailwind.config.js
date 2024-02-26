/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontSize: {
				'2xs': '0.625rem'
			},
			animation: {
				'spin-slow': 'spin 5s linear infinite'
			}
		}
	},
	plugins: []
};
