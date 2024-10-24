import Link from "next/link"

const News = () => {
    return (
        <div className="news">
            <div className="newsText">
                روابط التواصل الإجتماعي في صفحة
                <Link href={"/about"}>
                    {" عن الموقع "}
                </Link>
                تعمل الأن
            </div>
            <button>
                حسناً
            </button>
        </div>
    )
}

export default News

