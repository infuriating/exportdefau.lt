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
			},
			blur: {
				xs: '2px'
			},
			boxShadow: {
				'left-xs': '-2px 0 2px rgba(0, 0, 0, 0.5)',
				'left-sm': '-4px 0 4px rgba(0, 0, 0, 0.5)',
				'left-md': '-8px 0 8px rgba(0, 0, 0, 0.5)',
				'left-lg': '-12px 0 12px rgba(0, 0, 0, 0.5)',
				'left-xl': '-16px 0 16px rgba(0, 0, 0, 0.5)',
				'left-2xl': '-20px 0 20px rgba(0, 0, 0, 0.5)',
				'left-3xl': '-24px 0 24px rgba(0, 0, 0, 0.5)',
				inset: 'inset 0 0 40px 10px rgba(0, 0, 0, 0.25)'
			}
		}
	},
	plugins: []
};
