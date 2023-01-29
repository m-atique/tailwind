import Link from "next/link"
export default function Layout() {
    return (
        <div className="m-8">
            <div className="m-8">
                <Link className=' p-4 border-2 rounded-lg border-red-300 bg-blue-600' href='/'>Home</Link>
            </div>
            <div className="container bg-yellow-200 columns-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio impedit adipisci cum repellendus ab suscipit reprehenderit,
                    reiciendis ad placeat, aliquid, quas expedita optio veritatis tempore hic.
                    Dolore dignissimos esse vel.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio impedit adipisci cum repellendus ab suscipit reprehenderit,
                    reiciendis ad placeat, aliquid, quas expedita optio veritatis tempore hic.
                    Dolore dignissimos esse vel.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio impedit adipisci cum repellendus ab suscipit reprehenderit,
                    reiciendis ad placeat, aliquid, quas expedita optio veritatis tempore hic.
                    Dolore dignissimos esse vel.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio impedit adipisci cum repellendus ab suscipit reprehenderit,
                    reiciendis ad placeat, aliquid, quas expedita optio veritatis tempore hic.
                    Dolore dignissimos esse vel.
                </p>
            </div>
           
         </div>
    )
}