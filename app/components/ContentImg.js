'use client';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { contentImgStore } from '@/app/stores/contentImgStore';
import { overlayStore } from '../stores/overlayStore';
import { qaStore } from '../stores/qaStore';


const ContentImg = () => {
    const { contentImgType } = contentImgStore();
    const { setIsOpen } = overlayStore()
    const { currentQuestion } = qaStore()

    return (
        <>
            <div
                className={`contentImgContainer`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="closeBtn"
                    onClick={() => setIsOpen(false)}
                    aria-label={`Close ${contentImgType === "aya" ? 'aya img' : 'qa img'} modal`}
                >
                    <IoClose fontSize={20} />
                </button>
                {contentImgType === "aya" ?
                    currentQuestion.ayaImgAnswer.map(imgSrc => (
                        <Image
                            className='contentImg fadeInUp-1'
                            src={imgSrc}
                            alt={`Image aya img `}
                            width={800}
                            height={600}
                            layout="responsive"
                            priority={true}
                        />))
                    : <Image
                        className='contentImg fadeInUp-1'
                        src={currentQuestion.qaImg}
                        alt={`Image qa img`}
                        width={800}
                        height={600}
                        layout="responsive"
                        priority={true}
                    />}
            </div>
        </>
    );
};

export default ContentImg;