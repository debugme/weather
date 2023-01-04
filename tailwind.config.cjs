/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
			gridTemplateColumns: {
				home: 'repeat(auto-fit, minmax(260px, 0.5fr))',
				map: '2fr 1fr',
			},
			colors: {
				primary: {
					300: 'var(--primary-300)',
					400: 'var(--primary-400)',
					500: 'var(--primary-500)',
					600: 'var(--primary-600)',
					800: 'var(--primary-800)',
				},
				secondary: {
					50: 'var(--secondary-50)',
					200: 'var(--secondary-200)',
					300: 'var(--secondary-300)',
					400: 'var(--secondary-400)',
					500: 'var(--secondary-500)',
					600: 'var(--secondary-600)',
					700: 'var(--secondary-700)',
					800: 'var(--secondary-800)',
				},
			},
			spacing: {
				header: 'var(--header)',
				footer: 'var(--footer)',
			},
		},
	},
}
