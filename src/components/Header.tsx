import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo + Site Name */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">🔗 QRGen</span>
        </div>

        {/* Center Menus */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          <Link href="/portfolio" className="hover:text-blue-600">Portfolio</Link>
        </nav>

        {/* Auth Links */}
        <div className="space-x-4">
          <Link href="/login" className="text-blue-600 font-medium hover:underline">Login</Link>
          <Link href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
