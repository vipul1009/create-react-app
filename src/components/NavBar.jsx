"use client"

import { useState } from "react"
import { Mail, Phone, Search, ChevronDown, ArrowUp } from "lucide-react"

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu)
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-zinc-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-6 text-sm">
            <a
              href="mailto:info@aventis-consultancy.com"
              className="flex items-center hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">info@aventis-consultancy.com</span>
            </a>
          </div>
          <a href="tel:+919643589168" className="flex items-center text-sm hover:text-gray-300">
            <Phone className="h-4 w-4 mr-1" />
            <span>+919643589168</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <div className="w-60 h-24 relative">
                <img
                  src="/logo.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                    <a href={item.href} className="text-gray-600 hover:text-gray-900">
                  <button
                    className="flex items-center text-gray-600 hover:text-gray-900 py-2"
                    onClick={() => toggleMenu(item.name)}
                    onMouseEnter={() => setActiveMenu(item.name)}
                  >
                    {item.name}
                    {(item.megaMenu || item.dropdown) && (
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${activeMenu === item.name ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>
                    </a>

                  {/* Mega Menu */}
                  {item.megaMenu && activeMenu === item.name && (
                    <div
                      className="absolute left-0 mt-2 w-screen max-w-screen-xl bg-zinc-800 text-white shadow-lg z-50"
                      style={{ left: "50%", transform: "translateX(-40%)" }}
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      <div className="grid grid-cols-3 gap-4 p-6">
                        {item.megaMenu.map((section) => (
                          <div key={section.title} className="space-y-4">
                            <h3 className="text-lg font-medium">{section.title}</h3>
                            <ul className="space-y-2">
                              {section.links.map((link) => (
                                <li key={link.text}>
                                  <a href={link.href} className="text-gray-300 hover:text-white">
                                    {link.text}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Simple Dropdown */}
                  {item.dropdown && activeMenu === item.name && (
                    <div
                      className="absolute right-0 mt-2 w-56 bg-zinc-800 text-white shadow-lg z-50"
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      <ul className="py-2">
                        {item.dropdown.map((link) => (
                          <li key={link.text}>
                            <a href={link.href} className="block px-4 py-2 hover:bg-zinc-700">
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search button */}
            {/* <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="h-6 w-6" />
            </button> */}

            {/* Mobile menu button */}
            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-900 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-gray-900"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-200 pb-2">
                <a href={item.href} className="text-gray-600 hover:text-gray-900">
                  <button
                    className="flex items-center justify-between w-full text-gray-600 py-2"
                    
                  >
                    {item.name}
                    {(item.megaMenu || item.dropdown) && (
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${activeMenu === item.name ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>
                </a>

                  {/* Mobile Mega Menu */}
                  {item.megaMenu && activeMenu === item.name && (
                    <div className="pl-4 mt-2 space-y-4">
                      {item.megaMenu.map((section) => (
                        <div key={section.title} className="space-y-2">
                          <h3 className="text-sm font-medium text-gray-900">{section.title}</h3>
                          <ul className="space-y-1 pl-2">
                            {section.links.map((link) => (
                              <li key={link.text}>
                                <a href={link.href} className="text-gray-600 hover:text-gray-900 text-sm">
                                  {link.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mobile Simple Dropdown */}
                  {item.dropdown && activeMenu === item.name && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {item.dropdown.map((link) => (
                        <li key={link.text}>
                          <a href={link.href} className="text-gray-600 hover:text-gray-900 text-sm">
                            {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 z-50"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </header>
  )
}

// Navigation data (unchanged, no TypeScript used)
const navItems = [
{
    name: "Home",
    href: "#home",
},
  {
    name: "Services",
    href: "#services",
  },
 
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact us",
    href: "#contact",
  },
]
