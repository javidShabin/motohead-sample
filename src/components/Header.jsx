import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll to change header color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change when scrolled more than 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 ${
        isScrolled ? "bg-[#3d3d3db3] backdrop-blur-sm" : ""
      } text-white transition duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-2xl font-bold">MoTohead</h1>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block backdrop-blur-md" : "hidden"
          } absolute top-full left-0 w-full bg-[#ffffff64] backdrop-blur-sm md:relative md:block md:w-auto md:bg-transparent md:backdrop-blur-none`}
        >
          <ul className="md:flex md:space-x-6">
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:text-yellow-400 transition duration-300"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:text-yellow-400 transition duration-300"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:text-yellow-400 transition duration-300"
              >
                PRODUCTS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:text-yellow-400 transition duration-300"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        {/* Join Us Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-[#ffff] text-[#000] py-2 px-4 rounded-md font-medium hover:bg-[#000] hover:text-[#fff] transition duration-300"
          >
            Join Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
