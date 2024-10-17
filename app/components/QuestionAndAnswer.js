'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { qa } from '@/api/questions_and_answers.js';
import NotReady from './NotReady';
import StartPause from '@/app/components/StartPause';

const QuestionAndAnswer = () => {
    const [qaIndex, setqaIndex] = useState(0); // Initialize state to track current question index
    const [qaData, setQaData] = useState(null); // State to store fetched question and answer
    const [isPaused, setIsPaused] = useState(false); // Corrected to camelCase

    // Set an interval to change the question index every 5 seconds
    useEffect(() => {
        let intervalId;

        if (!isPaused) {
            intervalId = setInterval(() => {
                setqaIndex((prevIndex) => (prevIndex + 1) % qa.length); // Adjusted to use qa.length for dynamic indexing
            }, 1000);
        }

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [isPaused]);

    // Fetch new question data when qaIndex changes
    useEffect(() => {
        setQaData(qa[qaIndex]); // Fetch function
    }, [qaIndex]);

    return (
        <div>
            {qaData ? (
                <>
                    <StartPause isPaused={isPaused} setIsPaused={setIsPaused} /> {/* Adjusted prop name */}
                    <h1>100/<span className={`questionId`}>{qaData.id}</span></h1>
                    <div className='questionAndAnswer'>
                        <div className='question'>{qaData.question}</div>
                        <div className='answer'>{qaData.textAnswer}</div>
                        {qaData.ayaAnswer && <div className='ayaAnswer'>{qaData.ayaAnswer}</div>}
                        {qaData.ayaImgAnswer && <Image
                            className='imgAnswer'
                            src={qaData.ayaImgAnswer}
                            alt={`Image ${qaData.id} Answer`}
                            width={100}
                            height={100}
                            style={{ width: 'auto', height: 'auto' }}
                        />}
                    </div>
                </>
            ) : (
                <NotReady />
            )}
        </div>
    );
};

export default QuestionAndAnswer;
