// import type { Config } from "tailwindcss";

// const config: Config = {
//     darkMode: ["class"],
//     content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//   	container: {
//   	    center: true ,
//   		padding: '15px'
//   	},
//   	screens: {
//   		sm: '640px',
//   		md: '768px',
//   		lg: '960px',
//   		xl: '1200'
//   	},
//   	fontFamily: {
//   		primary: 'var(--font-cormorant_upright)',
//   		secondary: 'var(--font-open_sans)'
//   	},
//   	extend: {
// 		color:{
// 			primary:{
// 				DEFAULT: "#100e0e"
// 			},
// 			secondary:{
// 				DEFAULT:"#787f8a"
// 			},
// 			accent:{
// 				DEFAULT:"#c7a17a",
// 				hover:"#a08161"
// 			}
// 		}
//   		},
// 		  backgroundImage: {
// 			hero_overlay: "url('/hero/hero-overlay.png')", // Corrected this line
// 			opening_hours: "url('/opening-hours/bg')", // Corrected this line
// 			footer: "url('/footer/bg')" // Corrected this line
// 		  },
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		}
//   	}
//   }
// //   plugins: [require("tailwindcss-animate")],
// // };
// export default config;


import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: 'var(---font-cormorant_upright)',
      secondary: 'var(---font-open_sans)',
    },
    extend: {
      colors: {
        primary: "#100e0e",
        secondary: "#787f8a",
        accent: {
          DEFAULT: "#c7a17a",
          hover: "#a08161",
        },
      },
      backgroundImage: {
        hero_overlay: "url('/hero/hero-overlay.png')",
        opening_hours: "url('/opening-hours/bg')",
        footer: "url('/footer/bg')",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
};
export default config;
