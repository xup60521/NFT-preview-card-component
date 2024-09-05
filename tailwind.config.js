/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Soft_blue: "hsl(215, 51%, 70%)",
                c_Cyan: "hsl(178, 100%, 50%)",
                c_main_BG: "hsl(217, 54%, 11%)",
                c_card_BG: "hsl(216, 50%, 16%)",
                c_line: "hsl(215, 32%, 27%)",
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"]
            }
        },
    },
    plugins: [],
}

