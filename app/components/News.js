'use client'
import Link from "next/link"
import { useEffect, useState } from 'react'
import Loading from "../Louding"
import { FaWhatsappSquare } from "react-icons/fa"

const News = () => {
    const [news, setNews] = useState(false)
    const [loading, setLoading] = useState(true); // Loading state for data fetch

    useEffect(() => {
        if (localStorage.getItem('isNewsReaded') === 'true') {
            setNews(true)
        }
        setLoading(false);
    }, [])

    function handleIsNewsReaded() {
        setNews(true)
        localStorage.setItem('isNewsReaded', 'true')
    }

    if (loading) {
        return <Loading />; // Display loading spinner when data is being fetched
    }
    return (
        <div className={`newsOverlay ${news ? "" : "show"}`}
            onClick={handleIsNewsReaded}
        >
            <div className="news">
                <div className="newsText">
                    روابط التواصل الإجتماعي في صفحة
                    <Link href={"/about"}>
                        {" عن الموقع "}
                    </Link>
                    تعمل الأن
                </div>
                <div className="newsText">
                    عند وجود أي أخطاء في الموقع ولم يتم اصلاحها خلال يرجى التواصل عبر صفحة
                    <Link href={"/about"}>
                        {" عن الموقع "}
                    </Link>
                </div>
                <div className="newsText">
                    يرجى العلم بأن الصفحة يتم تحديثها يومياً تقريباً
                </div>
                <button
                    onClick={handleIsNewsReaded}
                >
                    حسناً
                </button>
            </div>
        </div>
    )
}

export default News

