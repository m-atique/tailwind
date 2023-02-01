import * as React from 'react';
import  { useState, useEffect} from 'react';
import Link from 'next/link';
import Moon from './moon';
import Sun from './sun';

export default function Header (){
    const size='28px'
    const [darkMode, setDarkMode] = useState<Boolean|undefined>(undefined)
    const toggleMode =()=>{
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        if(darkMode){
                localStorage.setItem("darkMode",'true')
                window.document.documentElement.classList.add("dark")
        }
        else if(darkMode === false){
            localStorage.setItem("darkMode",'false')
                window.document.documentElement.classList.remove("dark")

        }
        else{
            setDarkMode(localStorage.getItem('darkMode') === 'true')
        }

    },[darkMode])

    return(
        <div className="flex flex-row  items-center justify-between border-b-2 border-slate-50 border-dotted  p-4 font-sans">
        <div className="">
            <Link className=' px-4 p-2 border-2 border-purple-300 rounded-md hover:bg-purple-300' href='/'>Home</Link>
        </div>
        <div className =" pr-4 transition hover:text-blue-900 cursor-pointer" 
        onClick={toggleMode}>
            {darkMode? (<Moon width={size} height ={size} />)
            :(<Sun  width={size} height ={size} />)
            }
        </div>
    </div>
    )
}
