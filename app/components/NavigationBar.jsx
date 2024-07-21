import Link from "next/link"

const NavigationBar = () => {
  return (
    <div className="h-28 border-b-2 p-10">
        <div className="font-bold"><Link href='/event'>EVENTS</Link></div>
    </div>
  )
}

export default NavigationBar