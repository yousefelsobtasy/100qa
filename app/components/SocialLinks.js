import Link from 'next/link';
import { FaFacebook, FaWhatsappSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SocialLinks = () => {
    return (
        <div className="socialLinks">
            {/* <span>
                <Link href="https://www.facebook.com/100021982488563" target='_blank' rel="noopener noreferrer">
                    <FaFacebook />
                </Link>
            </span> */}
            <span>
                <Link href="https://wa.me/+201009630771" target='_blank' rel="noopener noreferrer">
                    <FaWhatsappSquare />
                </Link>
            </span>
            {/* <span>
                <a href="mailto:yousefelsobtasy15@gmail.com" rel="noopener noreferrer">
                    <SiGmail />
                </a>
            </span> */}
        </div>
    );
};

export default SocialLinks;
