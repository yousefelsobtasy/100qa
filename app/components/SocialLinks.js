import Link from 'next/link';
import { FaFacebook, FaWhatsappSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const SocialLinks = () => {
    return (
        <div className="socialLinks">
            <span>
                <Link href="https://www.facebook.com/100021982488563" passHref target='_blank'>
                    <FaFacebook />
                </Link>
            </span>
            <span>
                <Link href="https://wa.me/+201009630771" passHref target='_blank'>
                    <FaWhatsappSquare />
                </Link>
            </span>
        </div>
    );
};

export default SocialLinks;
