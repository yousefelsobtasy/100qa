import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa";

const ImgError = () => {
    return (
        <>
            <p>الصفحة غير متاحة</p>
            <Link href="/about">
                <button>
                    <p>الرجوع لصفحة  ( المزيد عن الموقع )</p>
                    <FaArrowLeft />
                </button>
            </Link>
        </>
    );
};

const Page = ({ params }) => {
    return (
        <div className="imgOverlay">
            {![1, 2, 3, 4, 5, 6].includes(Number(params.pageNum)) ? (
                <ImgError />
            ) : (
                <>
                    <button className='goBackBtn'>
                        <FaArrowLeft />
                    </button>
                    <Image
                        className="bookImage"
                        src={`/p-${params.pageNum}.png`}
                        alt="book"
                        width={259}
                        height={395}
                        layout="responsive"
                    />
                </>
            )}
        </div>
    );
};

export default Page;
