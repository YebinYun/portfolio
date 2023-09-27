module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        custom: '0px 4px 10px rgba(0, 0, 0, 0.10)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-custom': {
          textShadow: '0px 4px 10px rgba(0, 0, 0, 0.10)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}