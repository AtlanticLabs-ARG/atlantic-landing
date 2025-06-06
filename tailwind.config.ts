import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        primary: "var(--primary)",
        blue: "var(--blue)",
        darkGreen: "var(--darkGreen)",
        grey: "var(--grey)",
        lightBlue: "var(--lightBlue)",
        darkGrey: "var(--darkGrey)",
        softWhite: "var(--softWhite)",
      },
      screens: {
        xs: "500px",
        xxs: "400px"
      },
    },
  },
  plugins: [],
};
export default config;
