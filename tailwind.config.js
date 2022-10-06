/** @type {import('tailwindcss').Config} */
const formKitTailwind = require('@formkit/themes/tailwindcss');

module.exports = {
	darkMode: 'class',
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
		},
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {
			fontFamily: {
				sans: ['Nunito', 'sans-serif'],
			},
		},
	},
	content: ['./formkitTheme.js'],
	safelist: ['dark:bg-slate-600 h-full', 'bg-slate-100'],
	plugins: [formKitTailwind],
};
