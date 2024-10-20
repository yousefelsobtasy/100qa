import SocialLinks from './SocialLinks';
import { MdDoubleArrow } from "react-icons/md";


const Contact = () => {
    return (
        <div className="contact">
            <div className="contactText">
                <p>تواصل معنا</p>
                <MdDoubleArrow />
            </div>
            <SocialLinks />
        </div>
    )
}

export default Contact;
