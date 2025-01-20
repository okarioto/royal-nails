/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      colors: {
        'background': '#F1F0F0',
        'secondary-text': '#5f5f5f'
      },
      fontFamily: {
        title: ['Orbitron', 'serif'],
        subtitle: ['Jura', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
