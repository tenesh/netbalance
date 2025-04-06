const { heroui } = require('@heroui/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.{js,ts,jsx,tsx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['Archivo', 'sans-serif'],
            },
        },
    },
    plugins: [
        heroui({
            addCommonColors: true,
            themes: {
                light: {
                    colors: {
                        primary: {
                            50: '#e8eaff',
                            100: '#bec4f6',
                            200: '#959ceb',
                            300: '#6a75e1',
                            400: '#414dd8',
                            500: '#2734be',
                            600: '#1e2895',
                            700: '#141d6b',
                            800: '#0a1143',
                            900: '#02051b',
                            DEFAULT: '#606bdf',
                        },
                        secondary: {
                            50: '#ecf1ff',
                            100: '#d2d4e3',
                            200: '#b6b7ca',
                            300: '#999bb4',
                            400: '#7c7e9d',
                            500: '#626583',
                            600: '#4d4e67',
                            700: '#37384b',
                            800: '#202230',
                            900: '#0a0a17',
                            DEFAULT: '#606bdf',
                        },
                    }
                },
            },
        }),
    ],
};
