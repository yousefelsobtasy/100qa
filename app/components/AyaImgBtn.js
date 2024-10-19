import Image from "next/image"
import { useState } from "react"
import { IoClose } from "react-icons/io5";

const AyaImg = ({ qaData, showAyaImg, setShowAyaImg }) => {
    return (
        <div className={`overlay ${showAyaImg ? 'show' : ''}`} onClick={() => setShowAyaImg(false)}>
            <div className='ayaImg' style={{ display: showAyaImg ? 'block' : 'none' }} onClick={(e) => e.stopPropagation()}>
                <button className="closeBtn" onClick={() => setShowAyaImg(false)}>
                    <IoClose fontSize={20} />
                </button>
                <Image
                    className='imgQuestion'
                    src={qaData.ayaImgAnswer}
                    alt={`Image ${qaData.id} Question`}
                    width={100}
                    height={100}
                    layout="responsive"
                />
            </div>
        </div>
    )
}

const AyaImgBtn = ({ qaData }) => {
    const [showAyaImg, setShowAyaImg] = useState(false)

    return (
        < >
            <AyaImg qaData={qaData} showAyaImg={showAyaImg} setShowAyaImg={setShowAyaImg} />
            <button className='ayaImgBtn' onClick={() => setShowAyaImg(true)} style={{ visibility: qaData.ayaImgAnswer ? "visible" : "hidden" }}>
                {/* {showAyaImg ? 'اغلاق الصورة' : 'عرض تفسير الأية'} */}
                عرض تفسير الأية
            </button>
        </>
    )
}

export default AyaImgBtn
