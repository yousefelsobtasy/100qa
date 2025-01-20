import { contentImgStore } from "@/app/stores/contentImgStore";
import { overlayStore } from "@/app/stores/overlayStore";

const ContentImgBtn = ({ currentQuestion, content }) => {
    const { setContentImgType } = contentImgStore();
    const { setIsOpen, setOverlayContent } = overlayStore();

    const handleSettingContentType = () => {
        setContentImgType(content)
        setIsOpen(true)
        setOverlayContent('ayaOrQa')
    }

    return (
        <>
            {/* Button to show Aya Image */}
            <button
                className={`contentImgBtn`}
                onClick={handleSettingContentType}
                style={{ display: (content === "aya" ? currentQuestion.ayaImgAnswer : currentQuestion.qaImg) ? "block" : "none" }}
            >
                {content === "aya" ? 'عرض تفسير الأية ( التفسير المُيسَّر )' : 'عرض صورة السؤال والجواب'}
            </button>
        </>
    );
};

export default ContentImgBtn;
