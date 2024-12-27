module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        26: "26deg", // Custom rotation value
      },
      animation: {
        marquee: "marquee 20s linear infinite", // Default animation speed (larger screens)
        "marquee-mobile": "marquee 2s linear infinite", // Faster animation for mobile
        linearSpin: "rotateScaleLinear 0.4s ease-in-out",
        enlarge: "ScaleEaseInOut 0.4s ease-in-out",
        nonLinearSpin: "rotateScaleNonLinear 0.4s ease-in-out",
        slide: "slide 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        rotateScaleLinear: {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "100%": { transform: "rotate(-15deg) scale(1.3)" },
        },
        rotateScaleNonLinear: {
          "0%": { transform: "rotate(-26deg) scale(1)" },
          "100%": { transform: "rotate(19deg) scale(1.5)" },
        },
        ScaleEaseInOut: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.5)" },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      fontFamily: {
        annie: ['"Annie Use Your Telescope"', "sans-serif"],
        amarante: ['"Amarante"', "sans-serif"], // Added Amarante font
      },
    },
  },
  plugins: [],
};
