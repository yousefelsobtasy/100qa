import { FaFacebookMessenger } from 'react-icons/fa'
import { FaWhatsappSquare } from "react-icons/fa";
import { SiGmail } from 'react-icons/si'

const SocialLinks = () => {
    return (
        <div className="socialLinks">
            <span><FaFacebookMessenger /></span>
            <span><FaWhatsappSquare /></span>
            <span><SiGmail /></span>
        </div>
    )
}

export default SocialLinks
