/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],  
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#570df8",

          secondary: "#f000b8",

          accent: "#1dcdbc",

          neutral: "#2b3440",

          "base-100": "#ffffff",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",

          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
};
