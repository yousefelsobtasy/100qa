import Image from "next/image"

const AboutTheBookl = () => {
    const pageNumbers = [1, 2, 3, 4, 5, 6]

    return (
        <>
            <h2 className={`bookIntroHeading`} >مقدمة الكتاب </h2>
            <div className={`bookIntro `}>
                <div className={`bookIntroContainer`}>
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
            </div>
        </>
    )
}

export default AboutTheBookl
