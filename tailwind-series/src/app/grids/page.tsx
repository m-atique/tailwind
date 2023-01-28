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

                <div className="bg-yellow-300 rounded-lg  ">
                <div className="grid grid-cols-5 gap-4 p-4">
                    <div className="bg-pink-200 rounded-md col-start-2 col-end-4  ">col-start-2 col-end-4</div>
                    <div className="bg-pink-200 rounded-md col-start-3 col-end-5  ">col-start-3 col-end-5</div>
                    <div className="bg-pink-200 rounded-md col-start-1 col-end-4  ">col-start-1 col-end-4</div>
                    <div className="bg-pink-200 rounded-md col-start-2 col-end-3  ">col-start-2 col-end-3</div>
                    <div className="bg-pink-200 rounded-md col-start-1 col-end-5  ">col-start-1 col-end-5</div>
                    <div className="bg-pink-200 rounded-md ">6</div>
                    <div className="bg-pink-200 rounded-md ">7</div>
                    <div className="bg-pink-200 col-span-4 rounded-md ">8</div>
                    
                </div>
                </div>

                <div className="bg-green-300 rounded-lg ">
                <div className="grid grid-flow-col grid-rows-2 p-4 gap-4">
                    <div className="bg-orange-300 rounded-md row-span-3 ">row-span-3</div>
                    <div className="bg-orange-300 rounded-md  ">2</div>
                    <div className="bg-orange-300 rounded-md  ">3</div>
                    <div className="bg-orange-300 rounded-md  ">4</div>
                    <div className="bg-orange-300 rounded-md row-span-2 ">row-span2</div>
                    <div className="bg-orange-300 rounded-md  ">6</div>
                    <div className="bg-orange-300 rounded-md  ">7</div>
                    <div className="bg-orange-300 rounded-md  ">8</div>
                    <div className="bg-orange-300 rounded-md  ">9</div>
                    <div className="bg-orange-300 rounded-md  ">10</div>
                    <div className="bg-orange-300 rounded-md row-span-4 ">11 row span 5</div>
                    <div className="bg-orange-300 rounded-md  ">12</div>
                </div>
                </div>

                <div className="bg-rose-300 rounded-lg ">
                <div className="grid grid-flow-row-dense grid-rows-2 p-4 gap-4">
                    <div className="bg-green-300 rounded-md row-span-3 ">row-span-3</div>
                    <div className="bg-green-300 rounded-md  ">2</div>
                    <div className="bg-green-300 rounded-md  ">3</div>
                    <div className="bg-green-300 rounded-md  ">4</div>
                    <div className="bg-green-300 rounded-md row-span-3 ">row-span2</div>
                    <div className="bg-green-300 rounded-md  ">6</div>
                    <div className="bg-green-300 rounded-md  ">7</div>
                    <div className="bg-green-300 rounded-md  ">8</div>
                    <div className="bg-green-300 rounded-md  ">9</div>
                    <div className="bg-green-300 rounded-md  ">10</div>
                    <div className="bg-green-300 rounded-md col-span-4 ">11 col span 5</div>
                    <div className="bg-green-300 rounded-md  ">12</div>
                </div>
                </div>

            </div>

        </div>
    )
}