import Link from "next/link"
export default function Devide() {
    return (
        <div>
            <div className=" bg-gray-300 h-16  fixed w-full top-0 left-0">
                <div className="m-6">
                    <Link className=' p-2 border-2 rounded-md hover:bg-blue-200' href='/'>Home</Link>
                </div>
            </div>


            <div className="grid grid-cols-3 mt-24 p-4 gap-4 rounded-lg">
                <div className= "border-4 border-blue-400  divide-dotted divide-y-2  hover:divide-red-800 rounded-lg p-4 ">
                    <div>Number 01</div>                
                    <div>Number 02</div>
                    <div>Number 03</div>
                    <div>Number 04</div>                
                    <div>Number 05</div>
                    <div>Number 06</div>
                </div>
                <div className= " grid grid-cols-6 border-4 border-green-400  divide-dotted divide-x-2  hover:divide-red-800 rounded-lg p-4 ">
                    <div className = "h-8 p-2">No. 01</div>                
                    <div className = "h-8 p-2">No. 02</div>
                    <div className = "h-8 p-2">No. 03</div>
                    <div className = "h-8 p-2">No. 04</div>                   
                </div>
                <div className= " grid grid-cols-1 gap-2 border-4 border-green-400   rounded-lg p-4 ">
                    <div className="m-4 outline outline-4 bg-slate-300">No. 02</div>
                    <div className="outline outline-offset-4 outline-2 bg-slate-300">No. 01</div>                
                    <div className="m-4 border-2 border-black  ring-2 ring-rose-400  bg-slate-300">No. 03</div>
                    <div className="m-4 border-4 border-green-400 ring-offset-4 ring-4 ring-yellow-600 bg-slate-300">No. 04</div>                   
                </div>




            </div>
        </div>
    )
}