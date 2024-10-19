'use client'
import Link from "next/link"
import Image from "next/image"

const AboutTheBookl = () => {
    const pageNumbers = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <h2>مقدمة الكتاب</h2>

            {
                pageNumbers.map((pageNum) => (
                    <div>
                        {/* <Link href={`/about/${pageNum}`}> */}
                        <Image
                            className="bookImage"
                            src={`/p-${pageNum}.png`}
                            alt="book" width={259}
                            height={395}
                            layout="responsive"
                        />
                        {/* </Link> */}
                    </div>
                ))
            }

        </>
    )
}

export default AboutTheBookl
