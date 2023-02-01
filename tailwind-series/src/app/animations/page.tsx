import Link from "next/link"
export default function Animations() {
    return (
        <div>
            <div className=" bg-gray-300 h-16  fixed w-full top-0 left-0 font-sans">
                <div className="m-6">
                    <Link className=' p-2 border-2 rounded-md hover:bg-blue-200' href='/'>Home</Link>
                </div>
            </div>

{/* --------------------------------------------------------------page code */}
            <div className="grid grid-cols-2 gap-4  mt-24 m-4 p-4 border-4 border-slate-400 rounded-md">
                <div className=" flex rounded-lg border-double border-2 border-slate-500">
                    <button className="h-12 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-4 m-4 rounded-md">Button</button>
                    <button className="h-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover:transition-all bg-sky-300 border-2 border-slate-500 px-4 m-4 rounded-md hover:transform-2">Button</button>
                    <button className="h-12 bg-sky-300 ease-in-out  border-2  px-4 m-4 rounded-md hover:scale-110 hover:shadow-lg hover:shadow-blue-400 hover:-translate-y-2">Button</button>
                    <button className="h-12 bg-rose-300 ease-in-out border-2 px-4 m-4 rounded-md hover:translate-x-2">Button</button>
                </div>
                <div className=" flex rounded-lg border-double border-2 border-red-400 p-6">
                1.-skew-x 2. skew-y 3.hover rotate
                <img className='m-4 w-32 h-32   border-slate-200  border-4 -skew-x-12'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
    alt="first image" />
     <img className='m-4 w-32 h-32   border-slate-200  border-4 skew-y-6'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
    alt="first image" />
     <img className='m-4 w-32 h-32   border-slate-200  border-4 hover:rotate-6'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
    alt="first image" />
                </div>
                <div className="rounded-lg border-double border-2 border-yellow-400 flex">
                ping
                <div className=" m-8 w-8 h-8 bg-rose-900 rounded-full animate-ping delay-75"></div>
                bounce
                <div className=" m-8 w-8 h-8 bg-blue-900 rounded-full animate-bounce delay-75"></div>
               spin
                <div className=" m-8 w-8 h-8 bg-green-900  animate-spin delay-75"></div>
                pulse
                <div className=" m-8 w-8 h-8 bg-yellow-900 rounded-full animate-pulse delay-75"></div>
                </div>
                
                <div className="flex rounded-lg border-double border-2 border-violet-500">
                    <div className="relative">
                    <div className="absolute top-2 left-2 z-10   rotate-45 bg-green-400 animate-spin w-2 h-2"></div>
                    <button className="z-0 bg-black rounded-md border-white border-2 px-4 m-2 h-12 text-white hover:border-green-400 hover:text-green-400 hover:bg-slate-900">Hover it</button>        
                    </div>
                   
                   <div className="relative">
                    <button className="  bg-black rounded-md border-white border-2 px-4 m-2 h-12 text-white hover:border-red-600 hover:text-red-600 hover:bg-slate-900">Hover it</button>
                   {/* <div 
                   className="absolute
                    top-2  hover:translate-x-6   rotate-45 bg-white hover:bg-red-400 hover:animate-spin hover:w-2 hover:h-2 w-24 h-16"></div> */}
                   </div>
                </div>
            </div>
{/* ------------------------------------------------------------------------ */}
            </div>
            )}