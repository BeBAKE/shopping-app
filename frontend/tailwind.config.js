/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{jsx,js,tsx,ts}", "./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "screen-0.5xl": "1152px",
      },
    },
  },
  plugins: [],
};
