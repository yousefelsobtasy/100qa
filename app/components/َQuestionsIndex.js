'use client';
import { overlayStore } from "@/app/stores/overlayStore";
import Image from "next/image"
import { IoClose } from "react-icons/io5";

export default function QuestionsIndex() {
    const { setIsOpen } = overlayStore()
    const indexPages = [36, 37, 38, 39, 40]

    return (
        <>
            <div
                className={`indexImgContainer`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="closeBtn"
                    onClick={() => setIsOpen(false)}
                >
                    <IoClose fontSize={20} />
                </button>
                {indexPages.map(page => (
                    <Image
                        className='indexImg'
                        src={`/p-${page}.png`}
                        alt={`index page ${page} img'}`}
                        width={800}
                        height={600}
                        layout="responsive"
                        priority={true}
                    />
                ))}
            </div>
        </>
    )
}
