"use client";
import { navLinks } from "@/constants";
import { playFairDisplay } from "@/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMenuSharp, IoPersonCircle } from "react-icons/io5";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const currentPath = usePathname();

  return (
    <header className='screen-container sticky top-0 h-[100px]'>
      <nav className='flex h-full items-center justify-between'>
        {/* Logo */}
        <div className='px-4'>
          <Link href='/'>
            <h1 className={`${playFairDisplay.className} text-2xl`}>
              Medi<span className='text-primary-green text-[35px]'>Q</span>uest
            </h1>
          </Link>
        </div>
        {/* Nav Links */}
        <ul
          className={`flex items-center gap-16 font-[300] max-md:fixed max-md:inset-0 max-md:h-screen max-md:w-screen max-md:flex-col max-md:items-center max-md:justify-center max-md:text-2xl max-md:font-[600] max-md:backdrop-blur ${isMenuOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"}`}
        >
          {navLinks.map(({ title, path, className }) => (
            <li
              key={title}
              className={`${className} ${currentPath === path ? "text-primary-green underline underline-offset-8" : null}`}
            >
              <Link href={path}>{title}</Link>
            </li>
          ))}
          <GoArrowLeft
            className='hidden max-md:block'
            size={40}
            onClick={() => setIsMenuOpen(false)}
          />
        </ul>
        {/* user Icon or the login button */}
        <div className='px-4'>
          <IoPersonCircle
            size={35}
            className='text-primary-green max-md:hidden'
          />
          <IoMenuSharp
            className='text-primary-green hidden max-md:block'
            size={35}
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
