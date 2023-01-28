import Link from "next/link"


export default function Home() {
  return (
    <div>
      <Link className ='m-4 p-4 border-2 border-red-300 bg-blue-600' href='/colors'>  colors</Link>
     <Link className ='m-4 p-4 border-2 border-red-300 bg-blue-600'href='/customization'>  Customization</Link>
     
      <Link className ='m-4 p-4 border-2 border-red-300 bg-blue-600' href='/typograpy'>Typograpy</Link>
     
     <Link className ='m-4 p-4 border-2 border-red-300 bg-blue-600' href='/spacing'>Spacing</Link>
    </div>
  )
}
