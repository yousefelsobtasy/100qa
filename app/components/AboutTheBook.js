'use client'
import Image from "next/image"
import { useState } from "react"

const AboutTheBookl = () => {
    const pageNumbers = [2, 3, 4, 5, 6]
    const [showMore, setShowMore] = useState(false)

    return (
        <>
            <div className={`bookIntro `}>
                <h2 className={`bookIntroHeading`} >مقدمة الكتاب </h2>
                <div className="firstImg">
                    <Image
                        className={`image-1 img`}
                        src={`/p-1.jpg`}
                        alt="book"
                        width={259}
                        height={395}
                        layout="responsive"
                    />
                </div>
                <div className={`restImgs ${!showMore ? "hidden" : ""}`}>
                    {
                        pageNumbers.map((pageNum) => (
                            <div key={pageNum} className={`image-${pageNum}-container`}>
                                <Image
                                    className={`image-${pageNum} img`}
                                    src={`/p-${pageNum}.jpg`}
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
