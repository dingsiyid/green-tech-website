module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2e7d32',
          light: '#4caf50',
          dark: '#1b5e20'
        },
        secondary: '#8bc34a',
        accent: '#ffc107',
        light: '#f5f9f5'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}