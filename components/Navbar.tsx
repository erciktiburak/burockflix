"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Search } from "@mui/icons-material";


const Navbar = () => {
    const [search, setSearch] = useState<string>('')
    const [dropdownMenu, setDropdownMenu] = useState<boolean>(false);

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // Cleanup function to remove the event listener when component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
  return (
    <div className={`navbar ${isScrolled && "bg-black-1"}`}>
        <Link href="/">
          <img src="/assets/logo.png" alt='logo' className='logo' />
        </Link>
        
        <div className="nav-links">
        <Link href="/" className='nav-link'>Home</Link>
        <Link href="/my-list" className='nav-link'>My List</Link>
    </div>

    <div className="nav-right">
        <div className="search">
            <input
            placeholder="Search movie..."
            className="input-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="icon" />
        </div>
        <img
          src="/assets/profile_icon.jpg"
          className="profile"
          alt="profile"
          onClick={() => setDropdownMenu(!dropdownMenu)}
        />
         {dropdownMenu && (
          <div className="dropdown-menu">
            <Link href="/">Home</Link>
            <Link href="/my-list">My List</Link>
            <a href="">Log Out</a>
          </div>
        )}
    </div>
    </div>
  )
}

export default Navbar