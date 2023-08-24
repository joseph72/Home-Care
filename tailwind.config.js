/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        accent: "var(--accent)",
        body: "var(--body)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
        "accent-4": "var(--accent-4)",
      },
    },
  },
  plugins: [],
};
