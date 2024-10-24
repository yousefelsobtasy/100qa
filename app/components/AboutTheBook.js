'use client'
import Image from "next/image"
import { useState } from "react"

const AboutTheBookl = () => {
    const [showMore, setShowMore] = useState(false)
    const pageNumbers = [
        { pageNum: 2, url: "/p-2.jpg" },
        { pageNum: 3, url: "/p-3.jpg" },
        { pageNum: 4, url: "/p-4.jpg" },
        { pageNum: 5, url: "/p-5.jpg" },
        { pageNum: 6, url: "/p-6.jpg" },
    ]
    const url = "/p-1.jpg"


    return (
        <>
            <div className={`bookIntro `}>
                <h2 className={`bookIntroHeading`} >مقدمة الكتاب </h2>
                <div className="firstImg">
                    <Image
                        className={`image-1 img`}
                        src={`/p-1.png`}
                        alt="book"
                        width={259}
                        height={395}
                        layout="responsive"

                    />
                </div>
                <div className={`restImgs ${!showMore ? "hidden" : ""}`}>
                    {
                        pageNumbers.map(({ pageNum, url }) => (

                            <div key={pageNum} className={`image-${pageNum}-container`}>
                                <Image
                                    className={`image-${pageNum} img`}
                                    src={`/p-${pageNum}.png`}
                                    alt="book"
                                    width={259}
                                    height={395}
                                    layout="responsive"
                                />
                            </div>
                        ))
                    }
                </div>
                <button className="showMoreBtn" onClick={() => setShowMore(prev => !prev)} >رؤية {showMore ? 'أقل' : 'أكثر'}</button>
            </div>
        </>
    )
}

export default AboutTheBookl
