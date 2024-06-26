import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white py-8">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Image src="/placeholder.svg" alt="Radnor Golf Club" className="h-8 mr-4" width={40} height={40} />
          <span>&copy; 2023 Radnor Golf Club. All rights reserved.</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="hover:text-[#4CAF50]">HOME</Link>
          <Link href="#" className="hover:text-[#4CAF50]">GOLF</Link>
          <Link href="#" className="hover:text-[#4CAF50]">CLUB HOUSE</Link>
          <Link href="#" className="hover:text-[#4CAF50]">STAY WITH US</Link>
          <Link href="#" className="hover:text-[#4CAF50]">WHERE TO FIND US</Link>
          <Link href="#" className="hover:text-[#4CAF50]">CONTACT US</Link>
        </nav>
      </div>
    </footer>
  )
}
