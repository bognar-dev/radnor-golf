import Image from "next/image"
import Link from "next/link"

import { JSX, SVGProps } from "react"
 function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>
    )
  }
  


export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f5f5f5] dark:bg-[#121212] shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <Image src="/placeholder.svg" alt="Radnor Golf Club" className="h-8 mr-4"  width={40} height={40}/>
          <h1 className="text-2xl font-bold">Radnor Golf Club</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-[#4CAF50]">HOME</a>
          <a href="#" className="hover:text-[#4CAF50]">GOLF</a>
          <a href="#" className="hover:text-[#4CAF50]">CLUB HOUSE</a>
          <a href="#" className="hover:text-[#4CAF50]">STAY WITH US</a>
          <a href="#" className="hover:text-[#4CAF50]">WHERE TO FIND US</a>
          <a href="#" className="hover:text-[#4CAF50]">CONTACT US</a>
        </nav>
        <button className="md:hidden">
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}
