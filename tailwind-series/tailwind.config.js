/** @type {import('tailwindcss').Config} */


module.exports = {
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    

    extend: {
      colors:{
        ateeq:"#ff77e9",
        aqeel:"#565584"
      },
     backgroundImage:{
              myImage:`url('../public/img/img.png')`
     },
    
      screens:{
        lg:'800px',
        sm:"500px"
      },
      fontFamily:{
        myfont:['Bungee Spice']
      }
      
    }
    
  },
  plugins: [],
}
