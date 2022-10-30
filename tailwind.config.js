/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        bgColor : "hsl(218, 23%, 16%)",
        mainColor: "hsl(217, 19%, 24%)",
        adColor : "hsl(150, 100%, 66%)",
        txtColor : "hsl(193, 38%, 86%)"
      }
    },
  },
  plugins: [],
}
