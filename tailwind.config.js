
import pateern from ""
module.exports = {
  content: [
   "./src/**/*.{js,ts,tsx,jsx,mdx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        // "pattern": pattern,
 "hero-bg": "url('/src/assets/images/hero-bg.png')",
 "pattern-bg" : "url('/src/assets/images/pattern.png')",
      },
    },
  },
  plugins: [],
};
