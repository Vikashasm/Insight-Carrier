/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg_gradient_img': "url('/assets/images/png/homapage-img/page-bg-gradient.png')",
      },
    },
  },
  plugins: [],
}