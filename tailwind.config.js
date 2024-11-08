/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card_shadow': '0px 0px 32px 0px #0000001A',
      },
      backgroundImage: {
        'bg_gradient_img': "url('/assets/images/png/homapage-img/page-bg-gradient.png')",
      },
    },
  },
  plugins: [],
}