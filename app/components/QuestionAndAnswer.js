'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { qa } from '@/api/questions_and_answers.js';
import StartPause from '@/app/components/StartPause';
import AyaImgBtn from '@/app/components/AyaImgBtn';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


const QuestionAndAnswer = () => {
    const [qaIndex, setqaIndex] = useState(4); // Initialize state to track current question index
    const [qaData, setQaData] = useState(null); // State to store fetched question and answer
    const [input, setInput] = useState(qaIndex + 1); // Corrected to camelCase

    // // Set an interval to change the question index every 5 seconds
    // useEffect(() => {
    //     let intervalId;

    //     if (!isPaused) {
    //         intervalId = setInterval(() => {
    //             setqaIndex((prevIndex) => (prevIndex + 1) % qa.length); // Adjusted to use qa.length for dynamic indexing
    //         }, 1000);
    //     }

    //     // Cleanup interval on component unmount
    //     return () => { clearInterval(intervalId) };
    // }, [isPaused]);

    // Fetch new question data when qaIndex changes
    useEffect(() => {
        setQaData(qa[qaIndex]); // Fetch function
        setInput(() => qaIndex + 1);
    }, [qaIndex]);

    return (
        <div className='qaContent'>
            {qaData && (
                <>
                    {/* <StartPause isPaused={isPaused} setIsPaused={setIsPaused} /> */}


                    <div className='progress'>
                        <p className='progressText'>{qa.length}/<span className={`questionId`}>{qaData.id}</span></p>
                        <div className='progressBar'><span className='progressBarInner' style={{ width: `${qaData.id / qa.length * 100}%` }}></span></div>
                    </div>
                    <div className='questionAndAnswer'>
                        <div className='question'>{qaData.question}</div>
                        <div className='answer'>{qaData.textAnswer}</div>
                        {qaData.ayaAnswer && <div className='ayaAnswer'>{qaData.ayaAnswer}</div>}
                    </div>
                    <AyaImgBtn qaData={qaData} isAyaImg={qaData.ayaImgAnswer} />
                    <div className={`indexSelector`}>
                        <button onClick={() => { setqaIndex((prevIndex) => (prevIndex - 1 + qa.length) % qa.length) }}><FaChevronRight /></button>
                        <input
                            dir="ltr"
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && input > 0 && input <= qa.length) {
                                    setqaIndex(input - 1)
                                } else if (e.key === 'Enter' && (input < 0 || input > qa.length || typeof input !== typeof Number)) {
                                    alert(`Number between 1 and ${qa.length}`)
                                }
                            }}
                            min="1"
                            max={qa.length - 1}
                        />
                        <button onClick={() => { setqaIndex((prevIndex) => (prevIndex + 1 + qa.length) % qa.length) }}><FaChevronLeft /></button>
                    </div>
                </>
            )}
        </div>
    );
};

export default QuestionAndAnswer;
