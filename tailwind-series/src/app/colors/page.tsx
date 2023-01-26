import Link from "next/link"
export default function Colors() {
    return (
        <div>
<Link href='/'>Home</Link>
    <h1 className="text-3xl font-bold underline">
      Hello world! 
    </h1>
    {/* //-------------------------------applying colors */}
    <h1 className="text-green-600">
      Hello world! 
    </h1>

    <h1 className="bg-yellow-200">
      Hello world! 
    </h1>

    <h1 className="border-4 border-green-400">
      Hello world! 
    </h1>

    {/* --------------let use custom color  from extend in themes in tailwing.config*/}
    <h1 className="bg-ateeq">
      Hello world! 
    </h1>

    <h1 className="bg-aqeel">
      Hello world! 
    </h1>
    </div>

    )}