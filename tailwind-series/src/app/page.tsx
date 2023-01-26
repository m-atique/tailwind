import Link from "next/link"


export default function Home() {
  return (
    <div>
      <Link href='/colors'>  colors</Link>
     <Link href='/customization'>  Customization</Link>
     <button className="bg-green-400">
      <Link  href='/typograpy'>Typograpy</Link>
     </button>
    </div>
  )
}
