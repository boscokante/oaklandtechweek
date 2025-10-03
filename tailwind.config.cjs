/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0E7C66',
          600: '#0A5F4E',
        },
        accent: '#F59E0B',
        ink: '#0B1220',
      },
      borderRadius: {
        '2xl': '1rem',
      },
      spacing: {
        '16': '4rem',
        '24': '6rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
