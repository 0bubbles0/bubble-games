import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="w-full flex items-center gap-4 px-4 bg-[#ffb703] text-[#023047] font-semibold text-xl">
      <Link href="/" className="py-2">
        <Image
          src="/logo1-250-100.png"
          alt="Bubble Games Logo"
          width={180}
          height={30}
          priority
        />
      </Link>
      <ul className="flex items-center gap-4 px-4 hover:bg-[#cef6ff] rounded-md">
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}
