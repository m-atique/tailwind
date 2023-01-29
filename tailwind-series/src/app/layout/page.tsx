import Link from "next/link"
export default function Layout() {
    return (
        <div className="m-8">
            <div className="m-8">
                <Link className=' p-4 border-2 rounded-lg border-red-300 bg-blue-600' href='/'>Home</Link>
            </div>
            <div className="grid p-4 gap-4 grid-cols-2 ">
                <div className="bg-sky-200 rounded-md p-4 ">
                    <div className="container p-6 max-auto rounded-lg bg-white columns-3">
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
                <div className="bg-green-200 rounded-md  p-4">
                <div className="container bg-yellow-200 rounded-lg p-4 columns-3">
                   <img  className='float-left p-2'
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                   alt="first image"  />
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Distinctio impedit adipisci cum repellendus ab suscipit reprehenderit,
                        reiciendis ad placeat, aliquid, quas expedita optio veritatis tempore hic.
                        Dolore dignissimos esse vel.
                    </p>
                   <img  className='float-right p-2'
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                   alt="2nd-image image"  />
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Distinctio impedit adipisci cum repellendus ab suscipit reprehenderit,
                        reiciendis ad placeat, aliquid, quas expedita optio veritatis tempore hic.
                        Dolore dignissimos esse vel.
                    </p>
                    </div>
                </div>
                <div className="bg-green-200 rounded-md  p-4 col-span-4">
                <div className="container bg-yellow-200 rounded-lg p-4 columns-12">
                   <img  className='float-left p-2'
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                   alt="first image"  />
                   
                   <img  className=' float-right p-2'
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqE9JkP40KmN2BSykrZrtYDUvwMBS--6TFA&usqp=CAU"
                   alt="2nd-image image"  />
                   <p className='' >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Distinctio impedit adipisci cum repellendus ab suscipit reprehenderit,
                        reiciendis ad placeat, aliquid, quas expedita optio veritatis tempore hic.
                        Dolore dignissimos esse vel.
                    </p>
                    
                    <p className='clear-both'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Distinctio impedit adipisci cum repellendus ab suscipit reprehenderit,
                        reiciendis ad placeat, aliquid, quas expedita optio veritatis tempore hic.
                        Dolore dignissimos esse vel.
                    </p>
                    </div>   
                </div>

                <div className="bg-sky-200 h-96 rounded-md ">
                    <div className="bg-red-300 w-32 h-32 relative m-8"> 
                    <div className=" bg-gray-900 w-16 h-16 absolute left-3 top-6 ">child</div>
                    </div>
                    <div className="bg-red-300 w-32 h-32 relative m-8"> 
                    <div className=" bg-blue-400 w-16 h-16 absolute -left-5 -bottom-5">child</div>
                    <div className=" bg-orange-400 w-16 h-16 absolute -right-5 -bottom-5">child</div>
                    <div className=" bg-slate-400 w-16 h-16 absolute -top-5  -left-5 ">child</div>
                    <div className=" bg-violet-600 w-16 h-16 absolute -top-5  -right-5 ">child</div>
                    </div>            
            </div>
            
            
           
         </div>

         </div>
    )
}