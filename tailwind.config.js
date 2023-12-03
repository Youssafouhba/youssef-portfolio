/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      backgroundImage: {
        explosion: 'url("/avatar.png")',
        circles: 'url("https://raw.githubusercontent.com/Youssafouhba/youssef-portfolio/main/circles.png")',
        circleStar: 'url("https://raw.githubusercontent.com/Youssafouhba/youssef-portfolio/c7cc9421e9556de1db7ed73f925882e69c13d52b/circle-sta.svg")',
        site: 'url("https://raw.githubusercontent.com/Youssafouhba/youssef-portfolio/e8d70af537d2ba979ecf4f6ca5f2b16095b6e9ee/site-b.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
