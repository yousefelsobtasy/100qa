'use client'
import Image from 'next/image'
import { overlayStore } from '@/app/stores/overlayStore'

const HomeImage = () => {
    const { setIsOpen, setOverlayContent } = overlayStore()

    const handleOnClick = () => {
        setIsOpen(true)
        setOverlayContent(`bookCover`)
    }
    return (
        <>
            <button
                className='cta-button'
                onClick={handleOnClick}
            >
                غلاف الكتاب
            </button>
        </>
    )
}

export default HomeImage
