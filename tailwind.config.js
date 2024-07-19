/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        'home-section':"url('src/assets/main_page/home/home.webp')"
      }
    }
  },
  plugins: []
}
