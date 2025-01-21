'use client';
import Image from 'next/image';
import { contentImgStore } from '@/app/stores/contentImgStore';
import { qaStore } from '../stores/qaStore';


const ContentImg = () => {
    const { contentImgType } = contentImgStore();
    const { currentQuestion } = qaStore()

    return (
        <>
            {contentImgType === "aya" ?
                currentQuestion.ayaImgAnswer.map(imgSrc => (
                    <Image
                        className='rounded-xl fadeInUp-1 mb-2'
                        src={imgSrc}
                        alt={`Image aya img `}
                        width={800}
                        height={600}
                        layout="responsive"
                        priority={true}
                    />))
                : <Image
                    className='rounded-xl fadeInUp-1'
                    src={currentQuestion.qaImg}
                    alt={`Image qa img`}
                    width={800}
                    height={600}
                    layout="responsive"
                    priority={true}
                />}
        </>
    );
};

export default ContentImg;