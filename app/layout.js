
import '@/app/global.css'
import Head from "next/head";
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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>100qa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="view questino and answer every day" />
      </Head>
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

