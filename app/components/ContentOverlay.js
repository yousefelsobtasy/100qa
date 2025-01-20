'use client';

import { overlayStore } from '@/app/stores/overlayStore'

import News from '@/app/components/News'
import ContentImg from '@/app/components/ContentImg'
import QuestionsIndex from '@/app/components/َQuestionsIndex';
import { useEffect } from 'react';


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
            {overlayContent === 'news' && <News />}
            {overlayContent === 'ayaOrQa' && <ContentImg />}
            {overlayContent === 'questionsIndex' && <QuestionsIndex />}
        </div>
    );
};

export default ContentOverlay;