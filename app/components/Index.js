import Image from "next/image"
import { IoClose } from "react-icons/io5";

export default function Index({ showIndex, setShowIndex }) {
    const indexPages = [36, 37, 38, 39, 40]

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setShowContent(false);
        }
    };

    return (
        <div
            className={`indexOverlay`}
            onClick={() => setShowIndex(false)}
            onKeyDown={handleKeyDown}
        >
            <div
                className={`indexImgContainer`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="closeBtn"
                    onClick={() => setShowIndex(false)}
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
        </div>
    )
}
