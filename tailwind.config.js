/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#039b75",
        "secondary": "#83bce2",
        "accent": "#ffd9cc",
        "neutral": "#1D1424",
        "base-100": "#494A4B",
        "info": "#6583DC",
        "success": "#6DE8B5",
        "warning": "#9C5C07",
        "error": "#F66555",
      },
    }],
  }
}

