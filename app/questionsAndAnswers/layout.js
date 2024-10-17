import Navbar from "@/app/components/Navbar";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body dir="rtl" >
                <Navbar />
                {children}
            </body>
        </html>
    );
}

