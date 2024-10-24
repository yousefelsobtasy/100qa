import Link from 'next/link';
import { FaFacebook, FaWhatsappSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SocialLinks = () => {
    return (
        <div className="socialLinks">
            <span>
                <Link href="https://www.facebook.com/100021982488563" passHref>
                    <FaFacebook />
                </Link>
            </span>
            <span>
                <Link href="https://wa.me/01009630771" passHref>
                    <FaWhatsappSquare />
                </Link>
            </span>
        </div>
    );
};

export default SocialLinks;
