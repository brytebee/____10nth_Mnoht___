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
      }
    },
  },
  plugins: [],
}
