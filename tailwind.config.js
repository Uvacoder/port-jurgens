/** @type {import('tailwindcss').Config} */
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
};
