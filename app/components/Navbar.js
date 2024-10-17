'use client';
import { useState } from 'react';
import Link from 'next/link';
import { IoIosInformationCircle } from 'react-icons/io';
import { FaHome, FaBars, FaPlay } from 'react-icons/fa';
import { usePathname } from 'next/navigation'; // Import usePathname

const Navbar = () => {
    const pathname = usePathname(); // Get the current pathname
    const [navOpen, setNavOpen] = useState(false); // State to control nav visibility

    const toggleNav = () => {
        setNavOpen((prev) => prev = !prev); // Toggle nav open/close
    };

    return (
        <nav>
            {/* Mobile hamburger icon */}
            <div className={"navIcon" + (navOpen ? ' active' : '')} onClick={toggleNav}>
                <FaBars />
            </div>

            <ul className={navOpen ? 'show' : ''}>
                {/* Only show Home link if not on the Home page */}
                {pathname !== '/' && (
                    <li><Link href='/'><FaHome /> Home</Link></li>
                )}

                {/* Only show Get Started link if not on the /questionsAndAnswers page */}
                {pathname !== '/questionsAndAnswers' && (
                    <li><Link href='/questionsAndAnswers'><FaPlay /> Get Started</Link></li>
                )}

                {/* Only show About link if not on the /about page */}
                {pathname !== '/about' && (
                    <li><Link href='/about'><IoIosInformationCircle /> About</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
