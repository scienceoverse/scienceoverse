import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors :{
        first: '#03001C',
        second: '#301E67',
        third: '#5B8FB9',
        fourth: '#B6EADA',
      },
      fontFamily: {
        ocr: ['OCR A', ...defaultTheme.fontFamily.sans], // Replace 'OCR A' with your desired font
      },
      // fontSize: {
      //   ocr: '1rem', // Adjust the font size as needed
      // },
      letterSpacing: {
        ocr: '0.1em', // Adjust the letter spacing as needed
      },
    },
  },
  plugins: [],
};
export default config;
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}