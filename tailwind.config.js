/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        hero: 'var(--hero-bg-color)',
        'hero-header': 'var(--hero-header-color)',
        secondary: 'var(--secondary-color)',
        body: 'var(--body-text-color)',
        testimonial: 'var(--testimonials-bg-color)',
        'mobile-bg': 'var(--mobile-bg-color)',
      },

      backgroundImage: {
        'hero-pattern': "url('../../public/svgs/globe.svg')",
        'about-bg': "url('../../public/svgs/about-bg.svg')",
        'about-bg-mobile': "url('../../public/svgs/about-bg-mobile.svg')",
        'com-about-us': "url('../../public/svgs/fst-section-bg.svg')",
        'recom-cross-bg': "url('../../public/svgs/recom-cross-bg.svg')",
        'about-linear':
          'linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%)',
      },
    },
    fontFamily: {
      serif: ['Georgia', 'Cambria', 'Tiempos Headline'],
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
