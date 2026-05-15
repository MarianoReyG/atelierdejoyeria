import React from "react";
import { useState, useEffect, useRef } from "react";
import Icon from "./svgs/Icon";
import { Link, useLocation, useNavigate } from "react-router";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    {
      label: "Talleres",
      href: "#talleres",
    },

    {
      label: "Sobre Atelier",
      href: "#sobre-atelier",
    },

    {
      label: "Trabajos de alumnos",
      href: "#trabajos-alumnos",
    },

    {
      label: "Preguntas frecuentes",
      href: "#preguntas-frecuentes",
    },

    {
      label: "Contacto",
      href: "#contacto",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = async (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);

      setIsOpen(false);

      return;
    }

    const section = document.getElementById(id);

    if (section) {
      const top = section.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.getBoundingClientRect().top + window.pageYOffset;

          window.scrollTo({
            top,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const navItemStyles = `
    relative
    cursor-pointer
    text-[#334155]
    hover:text-[#334155]
    transition-colors
    duration-300
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[1px]
    after:w-0
    after:bg-[#334155]
    after:transition-all
    after:duration-500
    hover:after:w-full
  `;

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-[#f8f7f5]/90 backdrop-blur-md md:border-0">
        <div className="flex items-center justify-between px-4 py-4 md:px-12">
          <div className="flex items-center">
            <Link to="/" onClick={handleLogoClick} className="cursor-pointer">
              <Icon />
            </Link>
          </div>

          <ul className="hidden items-center gap-6 font-[ClashDisplay] text-lg md:flex">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(link.href.replace("#", ""))}
                  className={navItemStyles}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 cursor-pointer text-[#334155] md:hidden"
          >
            {isOpen ? (
              <HiOutlineX size={32} />
            ) : (
              <HiOutlineMenuAlt3 size={32} />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="absolute left-0 top-full w-full border-b border-slate-200 bg-[#f8f7f5] shadow-lg md:hidden"
              ref={menuRef}
            >
              <ul className="flex flex-col gap-6 px-6 py-8 font-[ClashDisplay] text-lg">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        scrollToSection(link.href.replace("#", ""))
                      }
                      className={`${navItemStyles} block text-left`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;
