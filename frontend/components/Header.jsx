"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import logo from "../assets/images/logo.png"
import { navLinks } from '../static/menus.jsx'
import Anouncement from "../components/Anouncement"

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const pathname = usePathname()


  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed w-full z-50 transition-all ${isSticky ? "sticky" : ""}`}>
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">

            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image src={logo} alt="Company Logo" width={150} />
            </Link>

            {/* ================= DESKTOP MENU ================= */}
            <div className="hidden md:flex">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative group">
                    {link.href ? (
                      <Link href={link.href} className="hover:text-blue-600">
                        {link.name}
                      </Link>
                    ) : (
                      <span className="cursor-pointer hover:text-blue-600">
                        {link.name}
                      </span>
                    )}

                    {/* Desktop Submenu (Hover Based) */}
                    {link.submenu && (
                      <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg 
                               opacity-0 invisible group-hover:opacity-100 
                               group-hover:visible transition-all duration-300">
                        {link.submenu.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= MOBILE HAMBURGER ================= */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>

        {/* ================= MOBILE DRAWER ================= */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg 
                transform transition-transform duration-300 
                md:hidden z-50
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-4 h-16 border-b">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image src={logo} alt="Company Logo" width={120} />
            </Link>
            <button onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Drawer Menu */}
          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>

                {/* Main Link */}
                {link.href ? (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-medium"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    onClick={() =>
                      setOpenSubmenu(
                        openSubmenu === link.name ? null : link.name
                      )
                    }
                    className="flex justify-between w-full font-medium"
                  >
                    {link.name}
                    <span>
                      {openSubmenu === link.name ? "-" : "+"}
                    </span>
                  </button>
                )}

                {/* Mobile Submenu (Click Based) */}
                {link.submenu && openSubmenu === link.name && (
                  <ul className="mt-2 ml-4 space-y-2">
                    {link.submenu.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-sm text-gray-600"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= OVERLAY ================= */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </header>

      {/* <Anouncement /> */}
    </>
  )
}
