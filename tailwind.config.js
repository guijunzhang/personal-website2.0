/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E8EBE4', /* This color code represents a light shade. 
                               It could be used as the background color 
                               for your website or as a neutral color for 
                               text and other elements. */
        secondary: '#D2D5DD', /* This color code represents a medium-light shade.
                                 It could be used as a secondary background color 
                                 or for dividing sections on your website. */
        accented1: '#B8BACF', /* This color code represents a medium shade. 
                                 It could be used for headers, buttons, or 
                                 other prominent elements to create visual interest. */
        accented2: '#999AC6', /* This color code represents a medium-dark shade. 
                                 It could be used for accents, such as links or hover effects, 
                                 to draw attention to specific elements. */
        contrast: '#798071', /* This color code represents a dark shade. 
                                It could be used for text or footer elements 
                                to provide contrast against lighter backgrounds. */
        valid: '#39FF14',
      }
    },
  },
  plugins: [],
}
