
import '@/app/global.css'
import localFont from "next/font/local";
import Logo from '@/app/components/Logo'
import ContentOverlay from '@/app/components/ContentOverlay'


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


export const metadata = {
  title: '100qa',
  description: "view questino and answer every day",
  viewport: "width=device-width, initial-scale=1.0",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl" >
        <ContentOverlay />
        <div className="container">
          {/* <div className="betaMessage">الموقع جاهز للهاتف والتابلت فقط حالياً</div> */}
          {children}

        </div>
      </body>
    </html>
  );
}

