/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            display: ['Instrument Serif', 'Georgia', 'serif'],
            serif: ['Instrument Serif', 'Georgia', 'serif'],
            mono: ['Space Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
          },
      colors: {
        // HiiiWAV palette
        primary: {
          DEFAULT: '#994DFF', // Purple
          600: '#7A34CC',
        },
        accent: '#FF4D16',   // Orange
        brandGreen: '#99FF69',
        ink: '#000000',       // Black
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

