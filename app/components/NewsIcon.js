'use client';

import { useNewsOpenStore } from "../store/useNewsOpenStore"
import { FaRegNewspaper } from 'react-icons/fa'

const NewsIcon = () => {
    const { showHide } = useNewsOpenStore();

    return (
        <div
            className="newsIcon fadeInUp-1"
            role="button"
            onClick={showHide}
        >
            <FaRegNewspaper />
        </div>
    )
}

export default NewsIcon
