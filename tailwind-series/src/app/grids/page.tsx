import Link from "next/link"
export default function Grids() {
    return (
        <div className="m-8">
            <div className="m-8">
                <Link className=' p-4 border-2 rounded-lg border-red-300 bg-blue-600' href='/'>Home</Link>
            </div>
            <div className="grid grid-cols-2 bg-slate-200 gap-4 p-4">
                <div className="bg-sky-300 rounded-lg p-5 ">
                <div className="grid grid-cols-4  gap-3 ">
                    <div className=" bg-slate-500 rounded-md col-span-3">1</div>
                    <div className=" bg-slate-500 rounded-md col-span-1">2</div>
                    <div className=" bg-slate-500 rounded-md col-span-2">3</div>
                    <div className=" bg-slate-500 rounded-md col-span-2">4</div>
                    <div className=" bg-slate-500 rounded-md ">5</div>
                    <div className=" bg-slate-500 rounded-md ">6</div>
                    <div className=" bg-slate-500 rounded-md ">7</div>
                    <div className=" bg-slate-500 rounded-md ">8</div>
                </div>
                </div>

                <div className="bg-yellow-300 rounded-lg ">
                <div className="">
                    <div className="">1</div>
                    <div className="">2</div>
                    <div className="">3</div>
                    <div className="">4</div>
                    <div className="">5</div>
                    <div className="">6</div>
                </div>
                </div>

                <div className="bg-green-300 rounded-lg ">
                <div className="">
                    <div className="">1</div>
                    <div className="">2</div>
                    <div className="">3</div>
                    <div className="">4</div>
                    <div className="">5</div>
                    <div className="">6</div>
                </div>
                </div>

                <div className="bg-rose-300 rounded-lg ">
                <div className="">
                    <div className="">1</div>
                    <div className="">2</div>
                    <div className="">3</div>
                    <div className="">4</div>
                    <div className="">5</div>
                    <div className="">6</div>
                </div>
                </div>

            </div>

        </div>
    )
}