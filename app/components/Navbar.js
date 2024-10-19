'use client';
import { useState } from 'react';
import Link from 'next/link';
import { IoIosInformationCircle } from 'react-icons/io';
import { FaHome, FaBars, FaPlay } from 'react-icons/fa';
import { usePathname } from 'next/navigation'; // Import usePathname

const Navbar = () => {
    const pathname = usePathname(); // Get the current pathname

    return (
        <nav>
            <ul >
                {/* Only show Home link if not on the Home page */}
                {pathname !== '/' && (
                    <li><Link href='/'><FaHome /> الصفحة الرئيسية</Link></li>
                )}

                {/* Only show Get Started link if not on the /questionsAndAnswers page */}
                {pathname !== '/questionsAndAnswers' && (
                    <li><Link href='/questionsAndAnswers'><FaPlay /> لنبدء</Link></li>
                )}

                {/* Only show About link if not on the /about page */}
                {pathname !== '/about' && (
                    <li><Link href='/about'><IoIosInformationCircle /> عن الموقع</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
