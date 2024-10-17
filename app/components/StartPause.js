'use client';
import { VscDebugStart } from "react-icons/vsc";
import { BsFillPauseFill } from "react-icons/bs";

const StartPause = ({ isPaused, setIsPaused }) => { // Corrected destructuring

    return (
        <button className="startPause" onClick={() => setIsPaused(prev => !prev)}>
            {isPaused ? <VscDebugStart /> : <BsFillPauseFill />}
        </button>
    );
};

export default StartPause;
