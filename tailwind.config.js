/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['Home.html', 'about.html', 'contact.html', 'blog.html', 'portofolio.html', 'datadiri.html'],
  theme: {
    container : {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary:'#14b8a6',
        secondary:'#6478b',
        dark:'#0f172a',
      },
      screen: {
        '2xl':'1320px',
        
      }
    },
  },
  plugins: [],
}

