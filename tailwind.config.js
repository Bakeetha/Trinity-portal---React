/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true, // This applies !important to all Tailwind utilities
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}