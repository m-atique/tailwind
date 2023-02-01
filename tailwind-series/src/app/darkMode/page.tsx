"use client"
import { useState } from "react"
import Arrowdown from "./components/arrowDown"
import Link from "next/link"
export default function Darkmode() {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState('Select One Value')
    return (
        <div >
            <div className=" bg-gray-300 h-16  fixed w-full top-0 left-0 font-sans">
                <div className="m-6">
                    <Link className=' p-2 border-2 rounded-md hover:bg-blue-200' href='/'>Home</Link>
                </div>
            </div>


            <div className="mt-24  p-8 grid  place-content-center ">
                <div className=" grid p-4 w-[400px]  bg-slate-50 shadow-slate-300 shadow-lg rounded-lg  ">
                    <div className="mb-10 grid grid-rows-2 ">
                        <h1 className="font-sans font-extrabold text-right ">tC</h1>
                        <h1 className=" p-4 font-sans font-extrabold text-5xl  bg-purple-300 rounded-md">Selector </h1>
                    </div>
                        <div className=" mx-10 select rounded-md  "
                            onClick={() => setIsOpen(!isOpen)}>
                           <div className="flex justify-between items-center">
                           <span> {selected} </span>
                           <div className={isOpen? "rotate-180 transition":"transition rotate-0"}>
                            <Arrowdown />
                           </div>
                            </div>
                            {
                                isOpen && (
                                    <div className="border-t-2">
                                        <ul className="flex flex-col divide-y-2">
                                            <li className="pr-7 py-2 " onClick={() => setSelected('Option1')}>Option-1 </li>
                                            <li className="pr-7 py-2 " onClick={() => setSelected('Option2')}>Option-2 </li>
                                            <li className="pr-7 py-2 " onClick={() => setSelected('Option3')}>Option-3 </li>
                                            <li className="pr-7 py-2 " onClick={() => setSelected('Option4')}>Option-4 </li>
                                            <li className="pr-7 py-2 " onClick={() => setSelected('Select One Value')}>None</li>
                                        </ul>
                                    </div>
                                )}
                        </div>
                </div>
            </div>
        </div>
    )
}

