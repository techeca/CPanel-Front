/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
  'sm': '540px',
  // => @media (min-width: 640px) { ... }

  'md': '932px',
  // => @media (min-width: 768px) { ... }

  'lg': '1024px',
  // => @media (min-width: 1024px) { ... }

  'xl': '1280px',
  // => @media (min-width: 1280px) { ... }

  '2xl': '1536px',
  // => @media (min-width: 1536px) { ... }
},
extend: {
  colors: {
    primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
    bgdark: '#101726'
  }
},
fontFamily: {
  'body': [
'Inter',
'ui-sans-serif',
'system-ui',
'-apple-system',
'system-ui',
'Segoe UI',
'Roboto',
'Helvetica Neue',
'Arial',
'Noto Sans',
'sans-serif',
'Apple Color Emoji',
'Segoe UI Emoji',
'Segoe UI Symbol',
'Noto Color Emoji'
],
  'sans': [
'Inter',
'ui-sans-serif',
'system-ui',
'-apple-system',
'system-ui',
'Segoe UI',
'Roboto',
'Helvetica Neue',
'Arial',
'Noto Sans',
'sans-serif',
'Apple Color Emoji',
'Segoe UI Emoji',
'Segoe UI Symbol',
'Noto Color Emoji'
]
},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
