import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          xl: "1200px",
        },
      },
      colors: {
        primary: "hsl(var(--primary))",
        dark: "hsl(var(--dark))",
      },
      scale: {
        200: "2",
      },
    },
  },
  plugins: [],
};
export default config;
