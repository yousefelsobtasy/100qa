import localFont from "next/font/local";
import '@/app/global.css'
import Logo from '@/app/components/Logo'
import News from '@/app/components/News'

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
  title: "100qa",
  description: "view questino and answer every day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body dir="rtl" >
        <News />
        <div className="betaMessage">الموقع جاهز للهاتف فقط حالياً</div>
        {/* <Logo /> */}
        {children}
      </body>
    </html>
  );
}

