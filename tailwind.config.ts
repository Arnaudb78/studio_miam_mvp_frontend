import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                primary: "#232D32",
                secondary: {
                    100: "#F091FF",
                    200: "#FEFDF4",
                    300: "#FF6419",
                    400: "#F4F3EB",
                },
            },
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
            },
            rotate: {
                '3': '-3deg',    // Ajoute une rotation positive (si besoin)
              },
              flex: {
                "zero-zero-auto": "0 0 auto",
              },
              
        },
    },
    plugins: [],
};
export default config;
