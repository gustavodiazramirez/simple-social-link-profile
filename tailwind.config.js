/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': 'hsl(75, 94%, 57%)', // Color primario verde
        'neutral-white': 'hsl(0, 0%, 100%)', // Color neutral blanco
        'neutral-grey': 'hsl(0, 0%, 20%)', // Color neutral gris
        'neutral-dark-grey': 'hsl(0, 0%, 12%)', // Color neutral gris oscuro
        'neutral-off-black': 'hsl(0, 0%, 8%)', // Color neutral casi negro
      },
    },
  },
  plugins: [],
}
