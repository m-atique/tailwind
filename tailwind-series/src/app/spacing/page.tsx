import Link from "next/link"
export default function Typograpy() {
    return (
        <div className="flex">
            <div className="  p-4 min-h-full  w-1/4 bg-yellow-300">

            <div>
                <Link className=' p-4 border-2 border-red-300 bg-blue-600' href='/'>Home</Link>
            </div>

            </div>
            <div className="  min-h-full  w-3/4  bg-slate-400 ">


            <div className=" flex m-16 bg-yellow-300"> main
                <div className="w-1/4 m-4 bg-red-300">
                    first
                </div>
                <div className=" w-3/4 m-4 bg-blue-300">
                    second
                </div>
            </div>
            <div className=" flex m-16 bg-red-300"> main
                <div className="w-1/4 m-4 bg-yellow-300">
                    first
                </div>
                <div className="w-24 min-w-full m-4 bg-blue-300">
                    full length
                </div>
            </div>
            <div className=" flex m-16 bg-red-300"> main
                <div className="w-1/4 m-4 bg-yellow-300">
                    first
                </div>
                <div className="min-w-min hover:w-2/4 hover:bg-green-400 hover:-m-14 bg-blue-300">
                    second div changes  on hover
                </div>
                
            </div>

            </div>
        </div>
    )
}