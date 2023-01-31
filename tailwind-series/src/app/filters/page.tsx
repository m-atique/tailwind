import Link from "next/link"
export default function Filters() {
    return (
        <div>
            <div className=" bg-gray-300 h-16  fixed w-full top-0 left-0 font-sans">
                <div className="m-6">
                    <Link className=' p-2 border-2 rounded-md hover:bg-blue-200' href='/'>Home</Link>
                </div>
            </div>

            {/* --------------------------------------------------------------page code */}
            <div className="grid grid-cols-2 gap-4  mt-24 m-4 p-4 border-4 border-sky-400 rounded-md">               
<div className="rounded-md ">
    <div className="rounded-md inline-block shadow-lg border-2 border-slate-100/50 p-6 m-4">
        <h1 className="text-2xl font-serif">Outer Shadow</h1>
        <h1>description here plz......</h1>
        <button className="bg-sky-200 rounded-md border-4 px-4">Button</button>
    </div>
    <div className=" rounded-md inline-block shadow-inner shadow-green-600  hover:shadow-lg hover:shadow-orange-600  border-5 border-slate-100/50 p-6 m-4">
        <h1 className="text-2xl font-serif">Inner Shadow</h1>
        <h1> check Hover effect</h1>
        <button className="bg-purple-500 rounded-md border-4 px-4 ">Button</button>
    </div>

</div>
<div className="bg-violet-200 rounded-md p-4 ">
    
<div className="flex justify-center -space-x-14 m-2"> Color Blend
  <div className="mix-blend-multiply bg-blue-400 w-24 h-24 rounded-full"></div>
  <div className="mix-blend-multiply bg-pink-400 w-24 h-24 rounded-full"></div>
</div>
<div className="flex justify-center bg-blend-lighten bg-yellow-500 bg-gradient-to-r from-red-500 to-purple-400 -space-x-14 m-2 h-24  ">BackGround Blend(yellow blend with  purple-blue gradient)
</div>
<div className="flex justify-center bg-blend-overlay bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcD2RyKiqkWglwZN6MhUZnNOfTYtesu4sWQ&usqp=CAU')] bg-rose-300 -space-x-14 m-2 h-24  ">
    <h1 className="text-3xl font-extrabold  text-rose-900">Rose  blend with  silk image</h1>
</div>

</div>
<div className="bg-violet-200 rounded-md  inline-flex p-4">
Image effects
<img className='w-32 h-32  border-slate-200  border-4'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
    alt="first image" />
<img className='w-32 h-32  border-slate-200  blur-sm border-4'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
    alt="first image" />
 <img className='w-32 h-32  border-slate-200  sepia border-4'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
    alt="first image" />  
    <img className='w-32 h-32  border-slate-200 invert border-4'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
    alt="first image" />   
</div>

<div className="bg-violet-200 rounded-md inline-flex  p-4 ">
    Back-drop effects 
<div className="relative">
<div className="w-16 h-16 border-2 backdrop-blur-sm left-5 top-4 absolute"></div>
<img className='w-32 h-32   border-slate-200  border-4'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
    alt="first image" />
    </div>
    <div className="relative">
<div className="w-16 h-16 border-2 backdrop-hue-rotate-60 left-5 top-4 absolute"></div>
<img className='w-32 h-32  border-slate-200  border-4'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
    alt="first image" />
    </div>
    
    
    <div className="relative">
<div className="w-16 h-16 border-2 backdrop-brightness-110 left-5 top-4 absolute"></div>  
 <img className='w-32 h-32  border-slate-200  border-4'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
    alt="first image" />  
    </div>
    <img className='w-32 h-32  border-slate-200 border-4'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfIbWyBam6Q6-P55K6byv4icmyv4dxVWt9w&usqp=CAU"
    alt="first image" />  
</div>
            </div>
        </div>
    )}