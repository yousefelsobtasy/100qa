'use client';

import { overlayStore } from "@/app/stores/overlayStore"
import { FaRegNewspaper } from 'react-icons/fa'

const NewsIcon = () => {

    const { setIsOpen, setOverlayContent } = overlayStore()

    const handleOnClick = () => {
        setIsOpen(true)
        setOverlayContent('news')
    }

    return (
        <div
            className="newsIcon fadeInUp-1"
            role="button"
            onClick={handleOnClick}
        >
            <FaRegNewspaper />
        </div>
    )
}

export default NewsIcon
