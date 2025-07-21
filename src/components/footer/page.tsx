"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-20 font-shantell">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="mb-4">
            <svg
              width="150.8"
              height="40.284164886026"
              viewBox="0 0 150 48.92062659050325"
              className="looka-1j8o68f"
            >
              <defs id="SvgjsDefs1193">
                <linearGradient id="SvgjsLinearGradient1196">
                  <stop
                    id="SvgjsStop1197"
                    stop-color="#905e26"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop1198"
                    stop-color="#f5ec9b"
                    offset="0.5"
                  ></stop>
                  <stop
                    id="SvgjsStop1199"
                    stop-color="#905e26"
                    offset="1"
                  ></stop>
                </linearGradient>
              </defs>
              <g
                id="SvgjsG1194"
                transform="matrix(3.305447487008027,0,0,3.305447487008027,-5.35481745795372,-16.527237435040135)"
                fill="url(#SvgjsLinearGradient1196)"
              >
                <path d="M8.36 5 q2.38 0 3.84 1.37 t1.46 3.65 t-1.44 3.64 t-3.86 1.36 l-3.82 0 l0 4.08 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -6.2 q0 -0.28 0.21 -0.49 t0.49 -0.21 l5.92 0 q1.34 0 1.92 -0.58 q0.58 -0.52 0.58 -1.58 t-0.6 -1.63 t-1.9 -0.57 l-5.92 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.04 0 z M26.948 14.1 l3.02 4.62 q0.22 0.36 0.02 0.72 q-0.08 0.16 -0.25 0.26 t-0.35 0.1 l-1.82 0 q-0.18 0 -0.34 -0.09 t-0.24 -0.23 l-3.04 -4.82 l-3.56 0 l0 4.44 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -6.58 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.16 0 q1.76 0 2.34 -1 q0.2 -0.32 0.2 -0.92 q0 -0.94 -0.62 -1.48 q-0.64 -0.58 -1.84 -0.58 l-6.24 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.42 0 q2.34 0 3.74 1.32 q1.46 1.32 1.46 3.58 q0 1.46 -0.64 2.49 t-1.86 1.57 z M46.856 18.7 q0.12 0.14 0.14 0.34 t-0.07 0.38 t-0.26 0.28 t-0.37 0.1 l-1.9 0 q-0.18 0 -0.33 -0.08 t-0.25 -0.22 l-4.78 -6.88 l-1.96 1.84 l0 4.64 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -5.56 q0 -0.32 0.22 -0.5 l8.36 -7.84 q0.2 -0.2 0.48 -0.2 l2.16 0 q0.2 0 0.38 0.12 t0.26 0.32 t0.04 0.41 t-0.2 0.37 l-4.68 4.4 z M34.856 10.1 q-0.28 0 -0.49 -0.2 t-0.21 -0.5 l0 -3.7 q0 -0.28 0.21 -0.49 t0.49 -0.21 l1.52 0 q0.28 0 0.49 0.21 t0.21 0.49 l0 3.7 q0 0.3 -0.21 0.5 t-0.49 0.2 l-1.52 0 z"></path>
              </g>
            </svg>
          </div>
          <p className="text-gray-400">
            Building beautiful web experiences with performance and
            accessibility in mind.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/experience" className="hover:text-white transition">
                Experience
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact US
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300 text-2xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider & Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Pranjay[PRK]. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
