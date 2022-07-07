module.exports = {
  content: ["*"],
  theme: {

    screens: {
      'mobile': '375px',
      'desktop': '940px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        'lightGray': 'hsl(212, 45%, 89%)',
        'grayishBlue': 'hsl(220, 15%, 55%)',
        'darkBlue': 'hsl(218, 44%, 22%)'
      },
      fontFamily: {
        "outfit":['Outfit', 'sans-serif']
      },
    },
  },
  plugins: [],
}