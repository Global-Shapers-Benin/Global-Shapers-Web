import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Sun, Moon, ArrowUp } from "lucide-react"; // Added ArrowUp icon
import globallogo from "../../assets/global-logo.png";
import DynamicButton from "../DynamicButton";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Existing effects
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/projects" },
    { name: "Join Us", path: "/join-us" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <>
      <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/80 dark:bg-[#1A1A1A]/80 shadow-sm'
          : 'bg-transparent'
      }`}>
        {/* Existing nav content */}
        <div className="flex items-center rounded-4xl justify-between w-[90%] mx-auto py-4">
          <Link to="/" className="flex items-center">
            <img src={globallogo} alt="Logo" className="w-[clamp(2.5rem,5vw,5rem)]" />
          </Link>

          <ul className="hidden md:flex space-x-6 text-gray-900 dark:text-white font-Montserrat-reg">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  onClick={handleNavLinkClick}
                  className="relative group font-bold"
                >
                  {item.name}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gray-900 dark:bg-white transform group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out"></span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <div className="hidden md:block">
              <DynamicButton text="Contribute" link="/donation" />
            </div>

            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <span className={`block h-0.5 w-6 bg-gray-900 dark:bg-white transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}></span>
              <span className={`block h-0.5 w-6 bg-gray-900 dark:bg-white my-1 transform transition duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}></span>
              <span className={`block h-0.5 w-6 bg-gray-900 dark:bg-white transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <div className={`md:hidden bg-white/80 dark:bg-[#1A1A1A]/80 backdrop-blur-md absolute w-full top-full left-0 overflow-hidden transform transition-transform duration-300 origin-top ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}>
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-900 dark:text-white font-medium">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.path}
                  onClick={handleNavLinkClick}
                  className="relative group"
                >
                  {item.name}
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-gray-900 dark:bg-white transform group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out"></span>
                </Link>
              </li>
            ))}
            <li>
              <DynamicButton text="Contribute" link="/contribute" />
            </li>
          </ul>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg transition-opacity duration-300 ${
          showScrollTop ? 'opacity-100' : 'opacity-0'
        } z-50 hover:bg-gray-300 dark:hover:bg-gray-600`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-gray-900 dark:text-white" />
      </button>
    </>
  );
};

export default Navbar;