import Navbar from "../components/Navbar"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import NewsIcon from "../components/NewsIcon"


export const metadata = { title: '100qa - عن الموقع' }

const layout = ({ children }) => {
    return (
        <>
            <NewsIcon />
            <Navbar />
            <div className="about fadeInUp-2">
                {children}
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default layout
