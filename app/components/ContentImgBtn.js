import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const ContentImg = ({ qaData, showContent, setShowContent, content }) => {
    // Close modal on Escape key press for better accessibility
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setShowContent(false);
        }
    };

    return (
        <div
            className={`overlay ${showContent ? 'show' : ''}`}
            onClick={() => setShowContent(false)}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-labelledby={`${content === "aya" ? 'aya-img-' : 'qa-img-'}${qaData.id}`}
            tabIndex={-1}
        >
            <div
                className={`contentImgContainer`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="closeBtn"
                    onClick={() => setShowContent(false)}
                    aria-label={`Close ${content === "aya" ? 'aya img' : 'qa img'} modal`}
                >
                    <IoClose fontSize={20} />
                </button>
                {content === "aya" && (qaData.id === 7) ?
                    qaData.ayaImgAnswer.map(imgSrc => (
                        <Image
                            className='contentImg'
                            src={imgSrc}
                            alt={`Image 'aya img' `}
                            width={800}
                            height={600}
                            layout="responsive"
                            priority={true}
                        />))
                    : <Image
                        className='contentImg'
                        src={content === "aya" ? qaData.ayaImgAnswer : qaData.qaImg}
                        alt={`Image ${content === "aya" ? 'aya img' : 'qa img'}`}
                        width={800}
                        height={600}
                        layout="responsive"
                        priority={true}
                    />}
            </div>
        </div>
    );
};

const ContentImgBtn = ({ qaData, content }) => {
    const [showContent, setShowContent] = useState(false);

    return (
        <>
            {/* Modal for showing Aya Image */}
            {showContent && <ContentImg qaData={qaData} showContent={showContent} setShowContent={setShowContent} content={content} />}

            {/* Button to show Aya Image */}
            <button
                className={`contentImgBtn`}
                onClick={() => setShowContent(prev => !prev)}
                aria-expanded={showContent}
                aria-controls={`aya-img-${qaData.id}`}
                style={{ visibility: (content === "aya" ? qaData.ayaImgAnswer : qaData.qaImg) ? "visible" : "hidden" }}
            >
                {content === "aya" ? 'عرض تفسير الأية' : 'عرض صورة السؤال والجواب'}
            </button>
        </>
    );
};

export default ContentImgBtn;
