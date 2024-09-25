/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center : true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary : '#009379',
        poek : '#0f172a',
        jingga : '#EADBC8',
        persimmon : '#FF634D',
      },
      // screens: {
      //   '2xl': '1200px'
      // }
      screens: {
        'xs': '250px',
      },
      spacing: {
        '13px' : '13px',
        '14px' : '14px',
        '21px' : '20.8px',
        '22px' : '22px',
        '26px' : '26px',
        '29px' : '29.5px',
        '37px': '37px',
        '37px' : '37.5px',
        'tegak' : '37px',
        '42px' : '42px',
        
      },
    },
  },
  plugins: [],
}

