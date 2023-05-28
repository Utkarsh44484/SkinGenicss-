/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                TiltWarp1: ["Tilt Warp"],
                mavenpro: ["MavenPro"],
                Adventpro: ["AdventPro"],
                Rowdies: ["Rowdies"]
            }
        },
    },
    plugins: [],
}