import Navbar from "../components/Navbar"
import AboutTheBook from "../components/AboutTheBook"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


export const metadata = { title: '100qa - عن الموقع' }

const page = () => {
    return (<>
        <Navbar />
        <div className="about">
            <AboutTheBook />
            <Contact />
            <Footer />
        </div>
    </>
    )
}

export default page
