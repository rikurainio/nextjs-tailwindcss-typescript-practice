module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx,html,css}',
           './components/**/*.{js,ts,jsx,tsx,html,css}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1600px'
    },
    colors: {
      'erasion-wht': '#ffffff',
      'erasion-chp': '#faf5ed',
      'erasion-drk2': '#383642',
      'erasion-drk1': '#1c1b23',
      'erasion-drk3': '#111212',

      'red': '#ee3e38',
      'blue': '#1fb6ff',
      'purple': '#7e5bef', 
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {

      fontFamily: {
        'bigheader': 'MT ',
      },
      contrast: {
        105: '1.05',
        110: '1.1',
        115: '1.15',
      },

      brightness: {
        105: '1.05',
        110: '1.1',
        115: '1.15',
      },

      backgroundImage: {
        'kayle': "url('/kayle.jpg')"
      },
      scale: {
        '-1': '-1',
        '105': '1.05',
      },
      visibility: ["group-hover"],
      spacing: {
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
