'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 p-4 shadow-lg w-full">
      <nav className="flex justify-between items-center relative">
        {/* Brand Name */}
        <div className="text-2xl md:text-3xl font-bold text-lightGrey">
          <Image
          src="/logo2.jpeg"
          alt="Logo"
          width={80}
          height={90}
          />
        </div>
        
        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden text-lightGrey z-20">
          {isMenuOpen ? (
            <FiX className="text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          ) : (
            <FiMenu className="text-3xl" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          )}
        </div>

        {/* Links (for desktop) */}
        <ul className={`hidden md:flex space-x-6 text-lightGrey`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Services</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/mission">Mission</Link></li>
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`flex-col z-10 space-y-4 text-lightGrey absolute top-[3rem] right-0 bg-slate-800 p-4 rounded-lg shadow-lg md:hidden w-[200px] transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="text-right"><Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li className="text-right"><Link href="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
          <li className="text-right"><Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li className="text-right"><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          <li className="text-right"><Link href="/mission" onClick={() => setIsMenuOpen(false)}>Mission</Link></li>
        </ul>
      </nav>
    </header>
  );
}
