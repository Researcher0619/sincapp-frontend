import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // app dizinindeki dosyaları tara
    "./components/**/*.{js,ts,jsx,tsx}", // components dizinindeki dosyaları tara
    "./pages/**/*.{js,ts,jsx,tsx}" // pages dizinindeki dosyaları tara
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
