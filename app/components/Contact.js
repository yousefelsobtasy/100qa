import Link from 'next/link';
import { MdDoubleArrow } from "react-icons/md";


const Contact = () => {
    return (
        <div className="w-full flex gap-2 justify-center flex-col md:justify-between md:flex-row md:items-center rounded-xl p-5 shadow-custom text-[1rem]">
            <div className="flex flex-col md:flex-row gap-2 justify-center items-center w-full md:w-1/3">
                <p>تواصل معنا</p>
                <MdDoubleArrow className='transform rotate-90 md:rotate-180' />
            </div>
            <p className="text-center">
                <Link className='underline' href='mailto:yousefelsbotasy1@gmail.com'>
                    yousefelsbotasy1@gmail.com
                </Link>
            </p>
        </div>
    )
}

export default Contact;
