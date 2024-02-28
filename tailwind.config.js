/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateX(0) rotate(0)' },
          '50%': { transform: 'translateX(-10px) rotate(-10deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(-10px) scale(1)' },
          '50%': { transform: 'translateY(0) scale(1.1)' },
        },
        floatReverse2: {
          '0%, 100%': { transform: 'translateY(-20px) rotate(0deg)' },
          '50%': { transform: 'translateY(0) rotate(90deg)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        floatReverse: 'floatReverse 6s ease-in-out infinite',
        floatReverse2: 'floatReverse2 45s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}