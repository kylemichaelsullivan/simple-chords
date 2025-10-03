/**  @type {import('tailwindcss').Config}  */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				17: 'repeat(17, minmax(0, 1fr))',
			},
		},
	},
	safelist: [
		'border',
		'border-2',
		'border-double',
		'border-solid',
		'border-dashed',
		'border-dotted',
		'border-none',
	],
	plugins: [],
};
