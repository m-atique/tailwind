"use client"
import { useState } from "react"
import Arrowdown from "../components/arrowDown"
import Link from "next/link"
import Header from "../components/header"
export default function Darkmode() {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState('Select One Value')
    return (
        <div >
            <Header />
            
            <div className="mt-8  p-8 grid  place-content-center ">
                <div className=" grid p-4 w-[400px] border-2 bg-white shadow-purple-300 shadow-md rounded-lg  ">
                    <div className="mt-6 grid grid-rows-2 ">
                        {/* <h1 className="font-sans font-extrabold text-right "></h1> */}
                        <h1 className=" p-4 font-sans font-extrabold text-5xl bg-purple-400 rounded-md">Selector </h1>
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

