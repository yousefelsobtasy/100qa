import Image from "next/image"
import { useState, Suspense } from "react"
import { IoClose } from "react-icons/io5";

const AyaImg = ({ qaData, showAyaImg, setShowAyaImg }) => {
    return (
        <div className={`overlay ${showAyaImg ? 'show' : ''}`} onClick={() => setShowAyaImg(false)}>
            <Suspense callBack={<div>Louding...............</div>}>
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
            </Suspense>
        </div>
    )
}

const AyaImgBtn = ({ qaData }) => {
    const [showAyaImg, setShowAyaImg] = useState(false)

    return (
        < >
            <Suspense fallBack={<div>Louding...</div>}>
                <AyaImg qaData={qaData} showAyaImg={showAyaImg} setShowAyaImg={setShowAyaImg} />
            </Suspense>
            <button className='ayaImgBtn' onClick={() => setShowAyaImg(true)} style={{ visibility: qaData.ayaImgAnswer ? "visible" : "hidden" }}>
                {/* {showAyaImg ? 'اغلاق الصورة' : 'عرض تفسير الأية'} */}
                عرض تفسير الأية
            </button>
        </>
    )
}

export default AyaImgBtn
