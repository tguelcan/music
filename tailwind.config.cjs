const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		container: {
			center: true,
			screens: {
				'2xl': '768px'
			},
			padding: {
				DEFAULT: '0.5rem',
				md: '0rem'
			}
		},
		fontFamily: {
			sans: ['Raleway', ...fontFamily.sans]
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#FFF',
			black: '#000',
			gray: {
				// Baby powder
				light: '#F7F7F2',
				// Alabaster
				DEFAULT: '#DBE1D4',
				// Night
				dark: '#121113'
			},
			primary: {
				// Beige
				light: '#E4E6C3',
				// Moss green
				DEFAULT: '#899878',
				// Eerie black
				dark: '#222725'
			}
		},
		extend: {
			screens: {
				xs: '465px'
				// => @media (min-width: 465px) { ... }
			}
		}
	},

	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};

module.exports = config;
