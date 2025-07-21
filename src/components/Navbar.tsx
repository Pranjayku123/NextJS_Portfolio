'use client';
import React, { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/components/about" },
    { name: "Skills", path: "/components/skills" },
    { name: "Projects", path: "/components/build-project" },
    { name: "Experience", path: "/components/experience" },
    { name: "Contact", path: "/components/contactus" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="relative w-full h-[60px] sm:h-[70px] bg-[var(--bgColor)] font-shantell">
      <nav className="fixed top-0 left-0 sm:left-32 z-20 w-full sm:w-[80%] h-[60px] sm:h-[70px] p-4 bg-[var(--bgColor)] text-teal-50 mx-auto shadow">
        <div className="flex justify-between items-center">
          <div>
            <svg
              width="120" 
              height="32" 
              viewBox="0 0 150 48.92062659050325"
              className="looka-1j8o68f sm:w-[150.8] sm:h-[40.284164886026]"
            >
              <defs id="SvgjsDefs1193">
                <linearGradient id="SvgjsLinearGradient1196">
                  <stop id="SvgjsStop1197" stop-color="#905e26" offset="0"></stop>
                  <stop id="SvgjsStop1198" stop-color="#f5ec9b" offset="0.5"></stop>
                  <stop id="SvgjsStop1199" stop-color="#905e26" offset="1"></stop>
                </linearGradient>
              </defs>
              <g
                id="SvgjsG1194"
                transform="matrix(3.305447487008027,0,0,3.305447487008027,-5.35481745795372,-16.527237435040135)"
                fill="url(#SvgjsLinearGradient1196)"
              >
                <path d="M8.36 5 q2.38 0 3.84 1.37 t1.46 3.65 t-1.44 3.64 t-3.86 1.36 l-3.82 0 l0 4.08 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -6.2 q0 -0.28 0.21 -0.49 t0.49 -0.21 l5.92 0 q1.34 0 1.92 -0.58 q0.58 -0.52 0.58 -1.58 t-0.6 -1.63 t-1.9 -0.57 l-5.92 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.04 0 z M26.948 14.1 l3.02 4.62 q0.22 0.36 0.02 0.72 q-0.08 0.16 -0.25 0.26 t-0.35 0.1 l-1.82 0 q-0.18 0 -0.34 -0.09 t-0.24 -0.23 l-3.04 -4.82 l-3.56 0 l0 4.44 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -6.58 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.16 0 q1.76 0 2.34 -1 q0.2 -0.32 0.2 -0.92 q0 -0.94 -0.62 -1.48 q-0.64 -0.58 -1.84 -0.58 l-6.24 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.42 0 q2.34 0 3.74 1.32 q1.46 1.32 1.46 3.58 q0 1.46 -0.64 2.49 t-1.86 1.57 z M46.856 18.7 q0.12 0.14 0.14 0.34 t-0.07 0.38 t-0.26 0.28 t-0.37 0.1 l-1.9 0 q-0.18 0 -0.33 -0.08 t-0.25 -0.22 l-4.78 -6.88 l-1.96 1.84 l0 4.64 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -5.56 q0 -0.32 0.22 -0.50 l8.36 -7.84 q0.2 -0.2 0.48 -0.20 l2.16 0 q0.2 0 0.38 0.12 t0.26 0.32 t0.04 0.41 t-0.20 0.37 l-4.68 4.4 z M34.856 10.1 q-0.28 0 -0.49 -0.20 t-0.21 -0.50 l0 -3.7 q0 -0.28 0.21 -0.49 t0.49 -0.21 l1.52 0 q0.28 0 0.49 0.21 t0.21 0.49 l0 3.7 q0 0.3 -0.21 0.50 t-0.49 0.20 l-1.52 0 z"></path>
              </g>
            </svg>
          </div>
          <div>
            <button
              className="sm:hidden text-teal-50 hover:cursor-pointer"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <ul className={`flex gap-4 sm:gap-6 items-center mt-2 text-[0.9rem] sm:text-[1rem] ${isMenuOpen ? 'flex-col absolute top-[60px] left-0 w-full bg-[var(--bgColor)] p-4 shadow' : 'hidden sm:flex'}`}>
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className={pathname === item.path ? "text-blue-400 font-semibold" : ""}
                >
                  <Link
                    href={item.path}
                    className="hover:text-blue-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;