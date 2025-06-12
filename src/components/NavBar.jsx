"use client"

import { useState } from "react"
// import Link from "next/link"
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
            <a href="mailto:enquiries@agcapps.com" className="flex items-center hover:text-gray-300">
              <Mail className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">enquiries@agcapps.com</span>
            </a>
            <a href="mailto:agsupport@agcapps.com" className="flex items-center hover:text-gray-300">
              <Mail className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">agsupport@agcapps.com</span>
            </a>
          </div>
          <a href="tel:01753386530" className="flex items-center text-sm hover:text-gray-300">
            <Phone className="h-4 w-4 mr-1" />
            <span>01753 386530</span>
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
                  alt="AGC Apps Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
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
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="h-6 w-6" />
            </button>

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
                  <button
                    className="flex items-center justify-between w-full text-gray-600 py-2"
                    onClick={() => toggleMenu(item.name)}
                  >
                    {item.name}
                    {(item.megaMenu || item.dropdown) && (
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${activeMenu === item.name ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>

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
    name: "Services",
    megaMenu: [
      {
        title: "Enterprise Asset Management",
        links: [
          { text: "SAP Intelligent Asset Management Suite", href: "#" },
          { text: "SAP Service & Asset Manager (SSAM)", href: "#" },
          { text: "SAP Field Service Management (FSM)", href: "#" },
          { text: "SAP S4 HANA Enterprise Asset Management", href: "#" },
          { text: "SAP S4 Resource Scheduler", href: "#" },
          { text: "AG EAM Skins for SSAM", href: "#" },
        ],
      },
      {
        title: "SAP Business Technology Platform",
        links: [
          { text: "SAP Application Development and Automation", href: "#" },
          { text: "SAP Data and Analytics", href: "#" },
          { text: "SAP Integration Suite", href: "#" },
          { text: "SAP Artificial Intelligence", href: "#" },
        ],
      },
      {
        title: "SAP S/4 HANA",
        links: [
          { text: "RISE with SAP", href: "#" },
          { text: "GROW with SAP", href: "#" },
          { text: "SAP Business Suite", href: "#" },
          { text: "AG - S4Energy QPPS", href: "#" },
          { text: "SAP S/4HANA Cloud", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Products & Solutions",
    megaMenu: [
      {
        title: "Enterprise Automation",
        links: [
          { text: "SAP Signavio Transformation Suite", href: "#" },
          { text: "SAP Build - Apps, Automation & Workzone", href: "#" },
          { text: "UiPath RPA & Test Automation", href: "#" },
          { text: "AG Store - Pre-Built SAP Automations", href: "#" },
          { text: "Automation Fast Start Pack - Finance AP", href: "#" },
          { text: "Automation Fast Start Pack - Finance Month-End", href: "#" },
          { text: "Automation Fast Start Pack - SCM & Logistics", href: "#" },
          { text: "Automation Fast Start Pack - Asset Management", href: "#" },
        ],
      },
      {
        title: "SAP Analytics",
        links: [
          { text: "SAP Analytics", href: "#" },
          { text: "SAP Ariba", href: "#" },
          { text: "SAP Concur", href: "#" },
          { text: "SAP SuccessFactors", href: "#" },
          { text: "SAP GRC", href: "#" },
          { text: "SAP Data Governance", href: "#" },
        ],
      },
      {
        title: "SAP Business Technology Platform",
        links: [
          { text: "SAP Business Technology Platform", href: "#" },
          { text: "SAP Implementation", href: "#" },
          { text: "SAP Application Management (AMS)", href: "#" },
          { text: "SAP Consultancy", href: "#" },
          { text: "SAP Project Management", href: "#" },
          { text: "SAP Optimisation", href: "#" },
        ],
      },
    ],
  },
  {
    name: "Industry Sectors",
    dropdown: [
      { text: "Manufacturing", href: "#" },
      { text: "Energy & Utilities", href: "#" },
      { text: "Life Sciences", href: "#" },
      { text: "Consumer Products", href: "#" },
      { text: "Retail", href: "#" },
    ],
  },
  {
    name: "Resources",
    dropdown: [
      { text: "Case Studies", href: "#" },
      { text: "Events & Webinars", href: "#" },
      { text: "On-Demand", href: "#" },
      { text: "AG Podcast", href: "#" },
      { text: "Blogs", href: "#" },
    ],
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact us",
    href: "/contact",
  },
]
