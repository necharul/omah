const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        'container': '1166px',
        'xl': '576px',
      },
      colors: {
        'myStone': '#EEEDDE',
        'myStoneOp': '#1f31378e',
        'biblack':'#203239',
        'biorange':'#F6762E',
        'biorangeOp':'#f6762c33',
        'semiblack':'#D6D5C7',
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'fs56': '56px',
      },
      lineHeight: {
        'l30': '30px',
      },
      width: {
        'w30': '30%',
      },
    },
  },
  plugins: [require("limbcss")],
}