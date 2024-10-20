import Navbar from "../components/Navbar"
import AboutTheBook from "../components/AboutTheBook"
import Contact from "../components/Contact"

const page = () => {
    return (
        <div className="about">
            <Navbar />
            <AboutTheBook />
            <Contact />
        </div>
    )
}

export default page
