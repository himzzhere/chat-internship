module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        right: "10px 0 10px -10px #333;",
      },
      borderRadius: {
        recieved: "0px 20px 10px",
        sent: "20px 0px 10px 20px;",
      },
      colors: {
        sent: "rgba(180, 223, 229, 0.5);",
      },
    },
  },
  plugins: [],
};
