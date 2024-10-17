import Link from "next/link";

const Page = () => {
    return (
        <main className="home">
            <div className="welcome">
                <h1>أهلا وسهلا</h1>
                <p>
                    هذا الموقع من أجل إعطائك سؤال وجواب عن العقيدة فهذه أسئلة وأجوبتها في أصل الأصول توحيد الله سبحانه
                    ، والتحذير من ضده وهو الشرك بالله ووسائله، وفي معتقد أهل السنة والجماعة
                </p>
                <div className="button-container">
                    <Link href='/questionsAndAnswers'>
                        <button className="cta-button">لنبدأ</button>
                    </Link>
                    <Link href='/about'>
                        <button className="cta-button">المزيد عن الموقع</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Page;
