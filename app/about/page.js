import Navbar from "../components/Navbar"
import AboutTheBook from "../components/AboutTheBook"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const page = () => {
    return (
        <div className="about">
            <Navbar />
            <AboutTheBook />
            <Contact />
            <Footer />
        </div>
    )
}

export default page
