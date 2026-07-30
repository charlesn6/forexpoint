import {Command} from "lucide-react";
import { useState, useEffect } from "react";


const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll Effect On NavBar

  useEffect(()=>{
    const handleScroll = () => {
      setIsScrolled(window.scrolly > 50)
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
      <div className="centered-row gap-2 hover:-translate-y-1
      duration-200 transition-all ease-out">

        <Command className="w-5 h-5 text-blue-400"/>

        <span className="font-blod text-base
        clash-display">ForexPoint</span>

      </div>
        {/* Desktop Navigation */}

      <div className="hidden md:centered-row gap-6">
        {["Features", "Prices", "Testimonials"].map((item,index)=>(
            <a key={index} href="nav_link" className="text-sm
            text-zinc-400 hover:text-blue-200 hover-translate-y-1
            ease-out transition-all duration-300">
              {item}
            </a>
        ))}
        {/* Button */}

      <button className="clash-display text-base bg-gradient-to-r
      from-blue-400 to-blue-600 px-4 py-2 rounded-full
      cursor-point hover:-translate-y-0.5 duration-200
      transition-all ease-out hover:shadow-xl
      hover:shadow-blue-900">Start Trading</button>

      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden glass p-1 rounded-md">
        <img src="/menu.svg" alt="menu-icon" className="w-8"/>
      </div>

    </nav>

        </div>

  </header>
  )}

export default NavBar