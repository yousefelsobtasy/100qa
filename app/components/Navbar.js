import Link from 'next/link'
import React from 'react'
import { IoIosInformationCircle } from "react-icons/io";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
    return (
        <ul>
            <li><Link href='/'><FaHome /> Home</Link></li>
            <li><Link href='/questionsAndAnswers'>Get Started</Link></li>
            <li><Link href='/about'><IoIosInformationCircle /> About</Link></li>
        </ul>
    )
}

export default Navbar
