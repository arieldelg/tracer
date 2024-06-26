import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        // ! en este orden: derecha a izquierda, arriba - abajo, difuminacion (intensidad), longitud
        "3xl": "-5px 5px 30px 5px rgba(0,0,0,.6)",
        "4xl": "50px 0px 30px 20px rgba(0,0,0,.6)",
        "5xl": "0px 0px 30px 30px rgba(0,0,0,.6)",
        "6xl": "-10px 0px 10px 8px rgba(0,0,0,.4)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite origin-center",
      },
    },
  },
  plugins: [],
};
export default config;
