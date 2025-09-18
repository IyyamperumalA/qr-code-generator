/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"], // ✅ Global clean fonts
      },
      colors: {
        background: "#FFFFFF", // White
        primary: "#FF6F00",    // Orange
        secondary: "#1565C0",  // Blue
        dark: "#000000",       // Black
        muted: "#666666",      // Dark Gray
        error: "#D32F2F",      // Red (error)
        success: "#388E3C",    // Green (success)
      },
    },
  },
  plugins: [],
};

export default config;