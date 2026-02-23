"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import logoScrolled from "@/assets/images/logo.png"
import { navLinks } from '@/static/menus'

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const openPopup = () => setIsActive(true);
  const closePopup = () => setIsActive(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // change at 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed w-full z-50 transition-all ${isSticky ? "sticky" : ""}`}>
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" onClick={() => setIsOpen(false)}>
              {/* <Image src={logo} alt="Company Logo" width={150} /> */}
              <Image
                src={isScrolled ? logoScrolled : logoScrolled}
                alt="Company Logo"
                width={150}
                priority
              />
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
                <li>
                <button className="action-btn-search text-white" onClick={openPopup}><i className="fa fa-search"></i> Search</button>
                </li>
              </ul>
            </div>

            {/* ================= MOBILE HAMBURGER ================= */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "X" : "Menu"}
            </button>
            <button
              className={`hamburger md:hidden ${isOpen ? "active" : ""}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>

        {/* ================= MOBILE DRAWER ================= */}
        <div className={`fixed top-0 right-0 h-full w-100 shadow-lg transform transition-transform duration-300 md:hidden z-50
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* Drawer Header */}
          {/* <div className="flex items-center justify-between px-4 h-20">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image src={logo} alt="Liaisonbank" width={120} />
            </Link>
            <button onClick={openNav}>Open Menu</button>
          </div> */}

          {/* Drawer Menu */}
          <ul className="submenu flex flex-col p-4 space-y-4 d-none">
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

          <div
            id="myNav"
            className="overlay"
            style={{ width: isOpen ? "100%" : "0%" }}
          >
            <button className="closebtn" onClick={closeNav}>
              &times;
            </button>

            <div className="overlay-content">
              <ul className="submenu flex flex-col p-4 space-y-4">
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
          </div>
        </div>

        {/* ================= OVERLAY ================= */}
        {/* {isOpen && (
          <div
            className="burger-menu fixed inset-0 bg-black bg-opacity-10 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )} */}
      </header>
      <div className={`search-popup ${isActive ? 'active' : 'inActive'}`}>
        <button type="button" className="search-popup-close" onClick={closePopup}><i className="fas fa-times"></i>✕</button>
        <form className="search-popup-form">
          <input type="text" className="search-popup-form-input" placeholder="Type Words Then Enter" />
          <button className="search-popup-btn"><i className="icon-search"></i></button>
        </form>
      </div>
    </>
  )
}
