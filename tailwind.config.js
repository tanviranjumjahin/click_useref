/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // font family start 
      fontFamily: {
        dm: "DM Sans"
      },
      // font family End
      // container start 
      maxWidth: {
        'menuContainer': '1320px',
      },
      // container End 
      // color start  
      colors: {
        'headerBg': '#FFFFFF',
        'menuText': '#767676',
        'menuHover': '#262626',
        'categoryBG': '#F5F5F3',
        'borderBG': '#979797',
      },
      // color end  
      // width start 
      width:{
          logoW: "40%",
          menuW: "60%",
      },
      // width end 
      // background image start 
      backgroundImage: {
        bannerimg: "url('../src/assets/banner.png')",
        
      }
      // background image end 
    
    },
  },
  plugins: [],
}

