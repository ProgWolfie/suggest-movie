/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  darkMode: "class",
  theme: {
    screens: {
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1280px",
      "2xl": "1536px"
    },
    extend: {
      colors: {
        "primary": {
          DEFAULT: "#967259",
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
          1000: "#FED7AA",

        },

        "secondary": {
          DEFAULT: "#03A9F4",
          50: "#E1F5FE",
          100: "#B3E5FC",
          200: "#81D4FA",
          300: "#4FC3F7",
          400: "#29B6F6",
          500: "#03A9F4",
          600: "#03A9F4",
          700: "#0288D1",
          800: "#0277BD",
          900: "#0277BD",
        }

      },
      spacing: {
        22: "5.5rem",
        23: "5.75rem",
        75: "18.75rem",
        30: "7.5rem",
      },

      fontFamily: {
        "poppins": "Poppins",
        "Dana": "Dana",
        "DanaMedium": "Dana Medium",
        "DanaDemiBold": "Dana DemiBold",
        "MorabbaMedium": "Morabba Medium",
        "MorabbaBold": "Morabba Bold",
        "MorabbaLight": "Morabba Light",
      },

      boxShadow: {
        "onlyshadow": "0px 1px 10px rgba(0,0,0,0.05)",
      },

      borderRadius: {
        "4xl": "2rem"
      },
      letterSpacing: {
        "middletight": "-0.065em"
      }

    },
    container: {
      "center": true,
      "padding": "2rem"
    }
  },
  plugins: [
    function ({addVariant}){
      addVariant('child','& > *');
      addVariant('child-hover','& > *:hover');
    }
  ],
}

