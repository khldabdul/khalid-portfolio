/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#3B82F6', // Blue color
				secondary: '#0F172A', // Dark blue for text
				accent: '#10B981', // Green for highlights
				neutral: '#111827', // Dark background
				'base-100': '#F9FAFB', // Light background
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['Fira Code', 'monospace']
			},
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					"primary": "#3B82F6",
					"secondary": "#0F172A",
					"accent": "#10B981",
					"neutral": "#111827",
					"base-100": "#F9FAFB",
				},
				dark: {
					"primary": "#3B82F6",
					"secondary": "#94A3B8",
					"accent": "#10B981",
					"neutral": "#F9FAFB",
					"base-100": "#0F172A",
				}
			}
		],
		darkTheme: "dark",
		base: true
	}
};
