/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pano: 'url("/photos/empty_panorama.jpeg")',
      },
      colors: {
        customGreen: "#00ff00",
        customYellow: "#037882",
        customBeige: "#F0E5E5",
      },
    },
  },
  plugins: [],
};
