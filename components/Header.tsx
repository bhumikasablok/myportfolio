"use client"

import { useState } from "react"
import Link from "next/link"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">

      <div className="max-w-6xl mx-auto  px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-lg sm:text-xl font-bold text-white">
          Bhumika<span className="text-green-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          <Link href="#about" className="hover:text-green-400 transition">
            About
          </Link>

          <Link href="#skills" className="hover:text-green-400 transition">
            Skills
          </Link>

          <Link href="#experience" className="hover:text-green-400 transition">
            Experience
          </Link>

          <Link href="#education" className="hover:text-green-400 transition">
            Education
          </Link>

          <Link href="#projects" className="hover:text-green-400 transition">
            Projects
          </Link>

          <Link href="#contact" className="hover:text-green-400 transition">
            Contact
          </Link>

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gray-950 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* Close button */}
        <div className="flex justify-end p-6">
          <FaTimes
            onClick={toggleMenu}
            className="text-white text-2xl cursor-pointer"
          />
        </div>

        <nav className="flex flex-col items-center gap-8 text-lg text-gray-300 mt-10">

          <Link href="#about" onClick={toggleMenu} className="hover:text-green-400">
            About
          </Link>

          <Link href="#skills" onClick={toggleMenu} className="hover:text-green-400">
            Skills
          </Link>

          <Link href="#experience" onClick={toggleMenu} className="hover:text-green-400">
            Experience
          </Link>

          <Link href="#education" onClick={toggleMenu} className="hover:text-green-400">
            Education
          </Link>

          <Link href="#projects" onClick={toggleMenu} className="hover:text-green-400">
            Projects
          </Link>

          <Link href="#contact" onClick={toggleMenu} className="hover:text-green-400">
            Contact
          </Link>

        </nav>

      </div>

    </header>
  )
}

export default Navbar