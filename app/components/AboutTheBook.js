'use client'
import Image from "next/image"
import { useState } from "react"
import { FaCaretDown } from "react-icons/fa";

const AboutTheBookl = () => {
    const pageNumbers = [1, 2, 3, 4, 5, 6]

    const [bookIntroShow, setBookIntroShow] = useState(false)
    return (
        <>
            <button className={`bookIntroBtn`} onClick={() => setBookIntroShow(prev => !prev)}>مقدمة الكتاب <FaCaretDown /></button>

            <div className={`bookIntro ${bookIntroShow ? "show" : ""}`}>
                {
                    pageNumbers.map((pageNum) => (
                        <div>
                            {/* <Link href={`/about/${pageNum}`}> */}
                            <Image
                                className="bookImage"
                                src={`/p-${pageNum}.jpg`}
                                alt="book"
                                width={259}
                                height={395}
                                layout="responsive"
                            />
                            {/* </Link> */}
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default AboutTheBookl
