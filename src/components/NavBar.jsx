import { Command } from "lucide-react";
import { useState, useEffect } from "react";

const navigationItems = [
  { label: "Features", href: "#features" },
  { label: "Prices", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

const ctaHref = "#get-started";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Scroll Effect On NavBar

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  },[])

  return (
      <header className={`fixed cursor-pointer top-3.5 left-1/2
      -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${

        isScrolled 
        ? "h-14 bg-[#1b1b1b]/40 backdrop-blur-xl border border-white/10 scale w-[95%] max-w-2xl" 
        : "h-14 bg-[#1b1b1b] w-[95%] max-w-3xl"
      }`}>

        <div className="mx-auto h-full px-6">

    <nav className="centered-row justify-between h-full">
        {/* Logo */}
      <a
        href="#top"
        aria-label="ForexPoint home"
        className="centered-row gap-2 hover:-translate-y-1 duration-200 transition-all ease-out"
      >

        <Command className="w-5 h-5 text-blue-400"/>

        <span className="font-blod text-base
        clash-display">ForexPoint</span>

      </a>
        {/* Desktop Navigation */}

      <div className="hidden md:centered-row gap-6">
        {navigationItems.map(({ label, href }) => (
            <a key={href} href={href} className="text-sm
            text-zinc-400 hover:text-blue-200 hover-translate-y-1
            ease-out transition-all duration-300">
              {label}
            </a>
        ))}
        {/* Button */}

      <a href={ctaHref} className="clash-display text-base bg-gradient-to-r
      from-blue-400 to-blue-600 px-4 py-2 rounded-full
      cursor-point hover:-translate-y-0.5 duration-200
      transition-all ease-out hover:shadow-xl
      hover:shadow-blue-900">Start Trading</a>

      </div>

      {/* Mobile Navigation */}
      <button
        type="button"
        className="md:hidden glass p-1 rounded-md cursor-pointer"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <img src="/menu.svg" alt="" className="w-8" />
      </button>

    </nav>

        </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-1/2 -translate-x-1/2 w-[90%] bg-[#1b1b1b]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4">
          {navigationItems.map(({ label, href }) => (
            <a key={href} href={href} className="text-sm text-zinc-400 hover:text-blue-200 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href={ctaHref}
            className="clash-display text-base bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-2 rounded-full cursor-pointer hover:-translate-y-0.5 duration-200 transition-all ease-out hover:shadow-xl hover:shadow-blue-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Start Trading
          </a>
        </div>
      )}

  </header>
  )}

export default NavBar
