module.exports = {
  mode: 'jit',
  content: ['/**/*.html'],
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
        carrot: {
          '50': '#f9f4e6',
          '100': '#faecc5',
          '200': '#f8e08e',
          '300': '#f4c94b',
          '400': '#f0a91b',
          '500': '#ef840b',
          '600': '#fa6400',
          '700': '#c4470c',
          '800': '#a23913',
          '900': '#862f14',
        },
      },
    },
    fontFamily: {
      Poppins: ['DM Sans', 'sans-serif'],
      Inter: ['sans-serif'],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};