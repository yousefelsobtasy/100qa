import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const AyaImg = ({ qaData, showAyaImg, setShowAyaImg }) => {
    // Close modal on Escape key press for better accessibility
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setShowAyaImg(false);
        }
    };

    return (
        <div
            className={`overlay ${showAyaImg ? 'show' : ''}`}
            onClick={() => setShowAyaImg(false)}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-labelledby={`aya-img-${qaData.id}`}
            tabIndex={-1}
        >
            <div
                className='ayaImg'
                style={{ display: showAyaImg ? 'block' : 'none' }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="closeBtn"
                    onClick={() => setShowAyaImg(false)}
                    aria-label="Close image modal"
                >
                    <IoClose fontSize={20} />
                </button>
                <Image
                    className='imgQuestion'
                    src={qaData.ayaImgAnswer}
                    alt={`Image ${qaData.id} Question`}
                    width={800}
                    height={600}
                    layout="responsive"
                    priority={true}
                />
            </div>
        </div>
    );
};

const AyaImgBtn = ({ qaData }) => {
    const [showAyaImg, setShowAyaImg] = useState(false);

    return (
        <>
            {/* Modal for showing Aya Image */}
            {showAyaImg && <AyaImg qaData={qaData} showAyaImg={showAyaImg} setShowAyaImg={setShowAyaImg} />}

            {/* Button to show Aya Image */}
            <button
                className='ayaImgBtn'
                onClick={() => setShowAyaImg(true)}
                aria-expanded={showAyaImg}
                aria-controls={`aya-img-${qaData.id}`}
                style={{ visibility: qaData.ayaImgAnswer ? "visible" : "hidden" }}
            >
                عرض تفسير الأية
            </button>
        </>
    );
};

export default AyaImgBtn;
