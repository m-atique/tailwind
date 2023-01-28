import Link from "next/link"
export default function Grids() {
    return (
        <div className="m-8">
            <div className="m-8">
                <Link className=' p-4 border-2 rounded-lg border-red-300 bg-blue-600' href='/'>Home</Link>
            </div>
            <div className="grid grid-cols-2 bg-slate-200 gap-4 p-4">
                <div className="bg-sky-300 rounded-lg ">
                <div className="">
                    <div className="">1</div>
                    <div className="">2</div>
                    <div className="">3</div>
                    <div className="">4</div>
                    <div className="">5</div>
                    <div className="">6</div>
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