import Link from "next/link"


export default function Home() {
  return (
    <div className='m-6 flex flex-wrap'>
      <Link className ='rounded-lg  m-4 p-4 border-4 border-red-400 bg-rose-300' href='/colors'>  colors</Link>
     <Link className ='rounded-lg  m-4 p-4 border-4 border-red-400 bg-slate-300'href='/customization'>  Customization</Link>
     
      <Link className ='rounded-lg  m-4 p-4 border-4 border-red-400 bg-green-300' href='/typograpy'>Typograpy</Link>
     
     <Link className ='rounded-lg  m-4 p-4 border-4 border-red-400 bg-blue-300' href='/spacing'>Spacing</Link>
     <Link className ='rounded-lg  m-4 p-4 border-4 border-red-400 bg-yellow-300' href='/flex'>Flex</Link>
     <Link className ='rounded-lg  m-4 p-4 border-4 border-red-400 bg-sky-400' href='/grids'>Grids</Link>
     <Link className ='rounded-lg  m-4 p-4 border-4 border-red-400 bg-pink-400' href='/layout'>Layout</Link>
     <Link className ='rounded-lg  m-4 p-4 border-4 border-red-400 bg-violet-400' href='/devide'>Devide and Rings</Link>
     <Link className ='rounded-lg  m-4 p-4 border-4 border-yellow-400 bg-violet-400' href='/filters'>Effect & Filters</Link>
     <Link className ='rounded-lg  m-4 p-4 border-4 border-blue-400' href='/animations'>Animations</Link>
     <Link className ='rounded-lg  m-4 p-4 border-4 border-slate-400' href='/darkMode'>Dark Mode</Link>
   
    </div>
  )
}
