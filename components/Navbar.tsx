import Image from "next/image"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="py-2">
        <Image
          src="/logo1-250-100.png"
          alt="Bubble Games Logo"
          width={180}
          height={30}
          priority
        />
      </Link>
      <ul className="navlink">
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}
