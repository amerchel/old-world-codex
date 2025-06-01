import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                text: "#0f0f0f",
                primary: "#eac360",
                secondary: "#ffffff",
                dark: "#cda42a",
                bg: "#262626",
            },
            fontFamily: {
                sans: ["DM Sans", "sans-serif"],
                awesome: ["FontAwesome", "sans-serif"],
            },
            animation: {
                float: 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(0.75rem)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
