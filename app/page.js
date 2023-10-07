import Link from "next/link"
import React from "react"
export default function Home() {
  return (
    <>
    <div className="flex flex-wrap justify-center items-center font-extralight" style={{
            backgroundImage: `url("img/mainpage.jpeg")`,
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
        <div className="grid grid-rows-4 gap-3 items-center">
        <h1 className="text-white text-[75px]">Biographical Blog</h1>
        <Link href="/vangogh" className="text-white text-[30px] hover:text-white">Vincent Van Gogh</Link>
        <Link href="/oppenheimer" className="text-white text-[30px] hover:text-white">J Robert Oppenheimer</Link>
        <Link href="/stevejobs" className="text-white text-[30px] hover:text-white">Steve Jobs</Link>
        <Link href="/messi" className="text-white text-[30px] hover:text-white">Lionel Messi</Link>
        </div>
        </div>
    </>
  )
}
