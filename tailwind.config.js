/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"']
      },
      container: {
        padding: {
          lg: '0',
        }
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1170px',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
