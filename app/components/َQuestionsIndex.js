'use client';
import Image from "next/image"

export default function QuestionsIndex() {
    const indexPages = [36, 37, 38, 39, 40]

    return (
        <>
            {indexPages.map(page => (
                <Image
                    className='rounded-xl mb-2'
                    src={`/p-${page}.png`}
                    alt={`index page ${page} img'}`}
                    width={800}
                    height={600}
                    layout="responsive"
                    priority={true}
                />
            ))}
        </>
    )
}
