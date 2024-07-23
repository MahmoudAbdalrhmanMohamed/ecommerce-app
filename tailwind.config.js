/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        me: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1),10px 0 15px -3px rgb(0 0 0 / 0.1),4px 0 6px -4px rgb(0 0 0 / 0.1);',
        search:
          '10px 10px 15px rgb(13 39 80 / 0.16),-23px -23px 45px rgb(255 255 255),-31px -31px 43px rgb(255 255 255 / 0.64) inset, 13px 13px 24px rgb(13 39 80 / 0.16) inset;',
        innerShadow: 'inset 0 -1px 1px rgba(0, 0, 0, 0.1)'
      },
      colors: {
        'main-hover-color': 'var(--main-hover-color)'
      }
    }
  },
  plugins: []
}
