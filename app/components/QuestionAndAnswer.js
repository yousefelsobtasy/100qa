'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { qa } from '@/api/questions_and_answers.js';
import NotReady from '@/app/components/NotReady';


const QuestionAndAnswer = () => {
    const [qaIndex, setqaIndex] = useState(0); // Initialize state to track current question index
    const [qaData, setQaData] = useState(null); // State to store fetched question and answer

    // Set an interval to change the question index every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setqaIndex((prevIndex) => (prevIndex + 1) % 6); // Increment the index and loop back to 0 after 100
        }, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures this effect runs only once

    // Fetch new question data when qaIndex changes
    useEffect(() => {
        setQaData(qa[qaIndex]); // Call the fetch function
    }, [qaIndex]); // Re-run effect if qaIndex changes


    return (
        <div>
            {qaData ? <>
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
                {/* <h1>Hello</h1>
      <div>{qaData?.id}</div> */}
            </> : <NotReady />}
        </div>
    )
}

export default QuestionAndAnswer
