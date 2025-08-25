const config = {
  plugins: ["@tailwindcss/postcss"],
  theme: {
    extends: {
      animation:{
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#000319'
        }
      }
    }
  }
};


export default config;
