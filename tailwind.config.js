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
          primary: "#0d77a8",

          secondary: "#baa8ea",

          accent: "#79cbd1",

          neutral: "#202932",

          "base-100": "#f6edf7",

          info: "#9abce4",

          success: "#1f8980",

          warning: "#f8b062",

          error: "#f4677c",

          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
};
