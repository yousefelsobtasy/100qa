'use client'
import Link from "next/link"
import { overlayStore } from "@/app/stores/overlayStore"

const News = () => {
    const { setIsOpen } = overlayStore()

    return (
        <>
            <div
                className="news fadeInUp-1"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="newsText">
                    روابط التواصل الإجتماعي في صفحة
                    <Link href={"/about"}>
                        {" عن الموقع "}
                    </Link>
                    تعمل الأن
                </div>
                <div className="newsText">
                    عند وجود أي أخطاء في الموقع ولم يتم اصلاحها خلال يوم يرجى التواصل عبر صفحة
                    <Link href={"/about"}>
                        {" عن الموقع "}
                    </Link>
                </div>
                <div className="newsText">
                    يرجى العلم بأن الصفحة يتم تحديثها يومياً تقريباً
                </div>
                <button
                    onClick={() => setIsOpen(false)}
                >
                    حسناً
                </button>
            </div>
        </>
    )
}

export default News

