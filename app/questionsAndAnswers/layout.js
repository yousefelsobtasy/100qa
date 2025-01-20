import Navbar from '@/app/components/Navbar';
import NewsIcon from '@/app/components/NewsIcon'


export const metadata = { title: '100qa - السؤال والجواب' }

const layout = ({ children }) => {

    return (
        <>
            <NewsIcon />
            <Navbar />
            {children}
        </>
    );
};

export default layout;
