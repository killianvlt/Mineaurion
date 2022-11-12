/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      'dark-blue': '#232731',
      'marine-blue': '#4F476D',
      'blue': '#4B9AD7',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#A4ABBF',
      'gray-light': '#F6EFEF',
    },
    fontFamily: {
      sans: ['Roboto'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      rotate: {
        '360': '360deg',
      },
      backgroundImage: {
        'hero-pattern': "url('~assets/img/background.svg')",
        'servers-pattern' : "url('~assets/img/servers-list.jpg')"
      }
    }
  },
}


