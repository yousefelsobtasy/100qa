'use client';
import { useState, useEffect, Suspense } from 'react';
import { qa } from '@/api/questions_and_answers.js';
import dynamic from 'next/dynamic';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Loading from './Louding';

// Lazy-loaded components with Suspense
const ContentImgBtn = dynamic(() => import('@/app/components/ContentImgBtn'), { suspense: true });

const QuestionAndAnswer = () => {
    const [qaIndex, setqaIndex] = useState(() => (qa.length > 0 ? 0 : 4));
    const [qaData, setQaData] = useState(null); // State to store fetched question and answer
    const [input, setInput] = useState(qaIndex + 1); // Corrected to camelCase
    const [errorMessage, setErrorMessage] = useState(null); // State to track error messages
    const [loading, setLoading] = useState(true); // Loading state for data fetch

    // Fetch new question data when qaIndex changes
    useEffect(() => {
        setLoading(true); // Set loading to true when data is being fetched
        setQaData(qa[qaIndex]); // Fetch function
        setInput(qaIndex + 1);
        setLoading(false); // Set loading to false once data is loaded
    }, [qaIndex]);

    if (loading) {
        return <Loading />; // Display loading spinner when data is being fetched
    }

    return (
        <div className='qaContent'>
            {qaData && (
                <>
                    {/* Lazy-loaded components with suspense */}
                    <div className='progress'>
                        <p className='progressText'>{qa.length}/<span className={`questionId`}>{qaData.id}</span></p>
                        <div className='progressBar'><span className='progressBarInner' style={{ width: `${qaData.id / qa.length * 100}%` }}></span></div>
                    </div>
                    <div className='questionAndAnswer'>
                        <div className='question'>{qaData.question}</div>
                        <div className='answer'>{qaData.answer}</div>
                        {qaData.ayaAnswer && <div className='ayaAnswer'>{qaData.ayaAnswer}</div>}
                    </div>

                    <ContentImgBtn qaData={qaData} content={`aya`} />
                    <ContentImgBtn qaData={qaData} content={`qa`} />

                    <div className={`indexSelector`}>
                        <button aria-label="Previous Question" onClick={() => { setqaIndex((prevIndex) => (prevIndex - 1 + qa.length) % qa.length) }}>
                            <FaChevronRight />
                        </button>

                        <input
                            dir="ltr"
                            type="text"
                            value={input}
                            onChange={(e) => setInput(Number(e.target.value))} // Ensure input is converted to a number
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && Number(input) > 0 && Number(input) <= qa.length) {
                                    setqaIndex(Number(input) - 1);
                                    setErrorMessage(null); // Clear error message if valid
                                } else if (e.key === 'Enter') {
                                    setErrorMessage(`Please enter a number between 1 and ${qa.length}`);
                                }
                            }}
                            min="1"
                            max={qa.length}
                        />

                        <button aria-label="Next Question" onClick={() => { setqaIndex((prevIndex) => (prevIndex + 1 + qa.length) % qa.length) }}>
                            <FaChevronLeft />
                        </button>
                    </div>

                    {errorMessage && (
                        <div className="error-message">
                            <span className="icon">⚠️</span>
                            <p>{errorMessage}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default QuestionAndAnswer;
