/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pano: 'url("/photos/empty_panorama.jpeg")',
      },
    },
  },
  plugins: [],
};
