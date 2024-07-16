/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  animation: {
			'loop-scroll': 'loop-scroll 50s linear infinite',
			typing: "typing 2s steps(10) infinite alternate, blink .7s infinite"

		  },
		  
		  keyframes: {
			'loop-scroll': {
			  from: { transform: 'translateX(0)' },
			  to: { transform: 'translateX(-100%)' },
			},
			typing: {
				"0%": {
				  width: "0%",
				  visibility: "hidden"
				},
				"100%": {
				  width: "100%"
				}
			  },
			  blink: {
				"50%": {
				  borderColor: "transparent"
				},
				"100%": {
				  borderColor: "white"
				}
			  }
		  }                    
		},
	  },
	  plugins: [],
}
