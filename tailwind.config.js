/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
      },
      padding: {
        DEFAULT: "16px",
        sm: "20px",
        md: "40px",
        lg: "60px",
        xl: "90px",
      },
    },
    extend: {
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
      },
      colors: {
        "white": '#ffffff',
        'violet': '#15093A',
        'orange-peel': '#fa9e00',
        'boulder':'#7a7979',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

