import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import colors from 'tailwindcss/colors';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'false' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: colors.teal,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockquote: {
              borderLeftColor: theme('colors.teal.500'),
            },
          },
        },
      }),
    },
  },
  plugins: [typography()],
} satisfies Config;
