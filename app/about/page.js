import Navbar from "../components/Navbar"
import AboutTheBook from "../components/AboutTheBook"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import NewsIcon from "../components/NewsIcon"


export const metadata = { title: '100qa - عن الموقع' }

const page = () => {
    return (
        <>
            <NewsIcon />
            <Navbar />
            <div className="about fadeInUp-2">
                <AboutTheBook />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default page
