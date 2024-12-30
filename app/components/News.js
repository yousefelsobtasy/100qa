'use client'
import Link from "next/link"
import { useNewsOpenStore } from "@/app/store/useNewsOpenStore"

const News = () => {
    const { newsOpen, showHide } = useNewsOpenStore()

    return (
        <div
            className={`newsOverlay ${newsOpen ? "show" : ""}`}
            onClick={showHide}
        >
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
                    onClick={showHide}
                >
                    حسناً
                </button>
            </div>
        </div>
    )
}

export default News

