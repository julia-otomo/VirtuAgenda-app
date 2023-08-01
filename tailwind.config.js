/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { sm: "375px", md: "768px", lg: "1024px", xl: "1440px" },
    backgroundImage: {
      "wallpaper-1": "url('./src/assets/wallpaper1')",
      "wallpaper-2": "url('./src/assets/wallpaper2')",
    },

    extend: {
      colors: {
        "green-leaf": "#007304",
      },
      backgroundImage: {
        "wallpaper-1": "url('./src/assets/wallpaper1')",
        "wallpaper-2": "url('./src/assets/wallpaper2')",
      },
    },
  },
  plugins: [],
};
