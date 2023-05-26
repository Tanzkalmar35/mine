/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [{
            mytheme: {
                "primary": "#c0a4fb",
                "secondary": "#83bce2",
                "accent": "#121212",
                "neutral": "#1D1424",
                "base-100": "#222222",
                "info": "#6583DC",
                "success": "#6DE8B5",
                "warning": "#9C5C07",
                "error": "#F66555",
            },
        }],
    }
}

