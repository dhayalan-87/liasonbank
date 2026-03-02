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
    const [openMenu, setOpenMenu] = useState(null);

    const handleToggle = (name) => {
      setOpenMenu(openMenu === name ? null : name);
    };
    
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
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center justify-between h-16">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src={isScrolled ? logoScrolled : logoScrolled}
                  alt="Company Logo"
                  width={150}
                  priority
                />
              </Link>

              <div className="hidden xl:flex">
                <ul className="flex space-x-8">
                  {navLinks.map((link) => {
                    const hasSubmenu = link.submenu && link.submenu.length > 0;
                    return(
                        <li key={link.name} className={`${hasSubmenu ? "has-submenu" : ""}`}>
                          {link.href ? (
                            <Link href={link.href}>
                              {link.name}
                            </Link>
                          ) : (
                            <span className="cursor-pointer">
                              {link.name}
                            </span>
                          )}
                          {link.submenu && (
                            <ul className="absolute left-0 mt-2 w-[300px] bg-white shadow-2xl border-t-4 border-[#ef7f1a] 
                                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                          transition-all duration-300 custom-counter-list">
                              {link.submenu.map((sub) => (
                                <li key={sub.name} className="flex items-center p-2 border-b border-gray-50 hover:bg-[#ef7f1a] group/item transition-colors">
                                  <Link href={sub.href} className="flex items-center w-full">
                                    <span className="font-medium text-gray-800 group-hover/item:text-white transition-colors">
                                      {sub.name}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      )
                    })}
                </ul>
              </div>
              <button
                className={`hamburger xl:hidden ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                <span></span>
                <span></span>
              </button>
            </nav>
          </div>

          <div className={`fixed top-0 right-0 h-full w-100 shadow-lg transform transition-transform duration-300
                  ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div
              id="myNav"
              className="overlay"
              style={{ width: isOpen ? "100%" : "0%" }}
            >

              <div className="overlay-content">
                <ul className="submenu flex flex-col pt-4 px-4 space-y-4">
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
