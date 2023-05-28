import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config()
    // https://vitejs.dev/config/
export default defineConfig({
    define: {
        __VALUE__: `"${process.env.VITE_API_URL}"` // wrapping in "" since it's a string
    },
    plugins: [react()],

})