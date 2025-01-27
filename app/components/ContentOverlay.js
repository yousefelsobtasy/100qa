'use client';

import { overlayStore } from '@/app/stores/overlayStore'
import Image from 'next/image';
import News from '@/app/components/News'
import ContentImg from '@/app/components/ContentImg'
import QuestionsIndex from '@/app/components/َQuestionsIndex';
import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';


const ContentOverlay = ({ }) => {
    const { isOpen, setIsOpen, overlayContent, setOverlayContent } = overlayStore()
    // Close modal on Escape key press for better accessibility
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setIsOpen(false)
        }
    };

    useEffect(() => {
        if (!isOpen) {
            setOverlayContent('')
        }
    }, [isOpen])

    return (
        <div
            className={`overlay ${isOpen ? 'show' : ''}`}
            onClick={_ => setIsOpen(false)}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
        >
            <button
                className="closeBtn"
                onClick={() => setIsOpen(false)}
            >
                <IoClose fontSize={20} />
            </button>
            <div
                className='relative max-w-[80%] max-h-[80%] overflow-y-scroll rounded-xl scrollbar-w-none'
                onClick={(e) => e.stopPropagation()}
            >

                {overlayContent === 'news' && <News />}
                {overlayContent === 'ayaOrQa' && <ContentImg />}
                {overlayContent === 'questionsIndex' && <QuestionsIndex />}
                {overlayContent === 'bookCover' &&
                    <Image
                        onClick={(e) => e.stopPropagation()}
                        src={`/p-1.png`}
                        alt={`About The Book`}
                        width={16}
                        height={9}
                        layout="responsive"
                    />
                }
            </div>
        </div>
    );
};

export default ContentOverlay;