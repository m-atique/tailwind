import Link from "next/link"
export default function Layout() {
    return (
        <div className="m-16">
           
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
                        <img className='float-left p-2'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                            alt="first image" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Distinctio impedit adipisci cum repellendus ab suscipit reprehenderit,
                            reiciendis ad placeat, aliquid, quas expedita optio veritatis tempore hic.
                            Dolore dignissimos esse vel.
                        </p>
                        <img className='float-right p-2'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                            alt="2nd-image image" />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Distinctio impedit adipisci cum repellendus ab suscipit reprehenderit,
                            reiciendis ad placeat, aliquid, quas expedita optio veritatis tempore hic.
                            Dolore dignissimos esse vel.
                        </p>
                    </div>
                </div>
                <div className="bg-green-200 rounded-md  p-4 col-span-4">
                    <div className="container bg-yellow-200 rounded-lg p-4 columns-12">
                        <img className='float-left p-2'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                            alt="first image" />

                        <img className=' float-right p-2'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqE9JkP40KmN2BSykrZrtYDUvwMBS--6TFA&usqp=CAU"
                            alt="2nd-image image" />
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

                <div className="bg-sky-200 h-screen   rounded-md ">
                   <div className="grid grid-cols-2">
                    <div className="bg-red-300 w-32 h-32 relative m-8">
                        <div className=" bg-gray-900 w-16 h-16 absolute left-3 top-6 ">child</div>
                    </div>
                    <div className=" bg-red-300 w-32 h-32 relative m-8">
                        <div className=" bg-blue-400 w-16 h-16 rounded-full absolute -left-5 -bottom-5"></div>
                        <div className=" bg-orange-400 w-16 h-16 absolute -right-5 -bottom-5">child</div>
                        <div className=" bg-slate-400 w-16 h-16 absolute -top-5  -left-5 ">child</div>
                        <div className=" bg-violet-600 w-16 h-16 absolute -top-5  -right-5 ">child</div>
                    </div>
                   </div>
                   <div className="grid  grid-cols-2">
                    <div className="bg-red-900 ">

                        <div className=" bg-slate-300  h-12  border-slate-600 border-1  overflow-hidden rounded-md relative m-8">parent
                        <img className='w-16 h-16 -top-2 -left-3  border-slate-600 border-4 rounded-full absolute'
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                                alt="first image" />
                        </div>
                        </div>
                    <div className="bg-yellow-400">
                        <div className=" bg-slate-300 w-40 h-12  rounded-md relative m-8">parent
                        <img className='w-16 h-16 -top-2 -left-3  border-slate-600 border-4  rounded-full absolute'
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                                alt="first image" />
                        </div>
                        </div>
                    </div>

                    <div className=" bg-slate-300 h-32 overflow-scroll rounded-md m-8 relative ">
                    <div className=" bg-gray-300 h-16  fixed w-full top-0 left-0">
                        <div className="m-6">
                             <Link className=' p-2 border-2 rounded-md hover:bg-blue-200' href='/'>Home</Link>
                        </div>
                    </div> 
                    <div className=" bg-red-300 h-8 rounded-md  m-2 p-2">one</div> 
                    <div className=" bg-red-300 h-8 rounded-md   m-2 p-2">one</div> 
                    <div className=" bg-red-300 h-8 rounded-md   m-2 p-2">one</div> 
                    <div className=" bg-red-300 h-8 rounded-md   m-2 p-2">one</div> 
                    </div>
                        
                </div>
                <div className="bg-rose-200 rounded-md  ">
                    
                    <div className="grid p-4 h-1/2  ">
                        
                        <div className="  bg-slate-300 relative h-64 p-16 mb-1 ">
                            <div className=" absolute left-1 text-center bg-red-300 w-24 h-24  rounded-full z-10 ">1</div>
                            <div className=" absolute left-8 text-center bg-blue-300 w-24 h-24  rounded-full z-20 ">2</div>
                            <div className=" absolute left-16 text-center bg-green-300 w-24 h-24  rounded-full z-30 ">3</div>
                            <div className=" absolute left-24 text-center bg-yellow-300 w-24 h-24  rounded-full z-40 ">4</div>
                            <div className=" absolute left-32 text-center bg-violet-300 w-24 h-24  rounded-full z-50 ">5</div>
                        </div>
                        
                        <div className="bg-green-400  grid grid-cols-3">
                        <img className='object-none object-left-top h-24 w-24 m-2 border-4 rounded-md'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                            alt="first image" />
                        <img className='object-none object-top h-24 w-24 m-2 border-4 rounded-md'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                            alt="first image" />
                        <img className='object-none object-right-top h-24 w-24 m-2 border-4 rounded-md'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                            alt="first image" />
                        <img className='object-none object-left h-24 w-24 m-2 border-4 rounded-md'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                            alt="first image" />
                        <img className='object-none object-center h-24 w-24 m-2 border-4 rounded-md'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                            alt="first image" />
                        <img className='object-none  object-right h-24 w-24 m-2 border-4 rounded-md'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                            alt="first image" />
                        <img className='object-none object-left-bottom h-24 w-24 m-2 border-4 rounded-md'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                            alt="first image" />
                        <img className='object-none object-bottom h-24 w-24 m-2 border-4 rounded-md'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                            alt="first image" />  
                         <img className='object-none  object-right-bottom h-24 w-24 m-2 border-4 rounded-md'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
                            alt="first image" />               

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}