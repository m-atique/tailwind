import Link from "next/link"
export default function Typograpy() {
    return (
        <div className="m-8">
            <div>
                <Link className=' p-4 border-2 border-red-300 bg-blue-600' href='/'>Home</Link>
            </div>
                <div className="parent m-8 bg-yellow-100">
                    <div className="Header">
                        header
                    </div>
                    <div className="flex  lg:flex-row sm:flex-col">
                    <div className="sidebar bg-slate-400 p-4 w-3/12 sm:min-w-max">
                        sideBar
                    </div>
                    <div className="maincontent bg-rose-300 p-4 w-9/12 sm:min-w-max">
                        mainContent
                        <p>
                            its reponsive and can manage width on screen size
                        </p>
                    </div>
                    </div>
                </div>                
        </div>
    )
}
