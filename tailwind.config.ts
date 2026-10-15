import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#166534',
          600: '#15803d',
          700: '#14532d',
          800: '#0f3d1f',
          900: '#0a2614',
          950: '#05180a',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#d4a843',
          500: '#b8860b',
          600: '#92400e',
        },
        cream: '#faf7f2',
        charcoal: '#1a1a2e',
        midnight: '#16213e',
      },
    },
  },
  plugins: [],
};

export default config;
