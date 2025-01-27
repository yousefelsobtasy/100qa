'use client';
import { useState, useEffect, Suspense } from 'react';
import { qa, qaLength } from '@/api/questions_and_answers.js';
import dynamic from 'next/dynamic';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Loading from '@/app/components/Loading';
import { indexStore, qaStore } from '../stores/qaStore';
import IndexButton from '../components/IndexButton';
import { overlayStore } from '../stores/overlayStore';

// Lazy-loaded components with Suspense
const ContentImgBtn = dynamic(() => import('@/app/components/ContentImgBtn'), { suspense: true });

const page = () => {
  const { setIsOpen, setOverlayContent } = overlayStore()
  const { currentQuestion, setCurrentQuestionIndex, nextQuestion, prevQuestion } = qaStore()
  const [input, setInput] = useState(1)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null); // State to track error messages

  const handleQuestionIndexButton = () => {
    setOverlayContent('questionsIndex')
    setIsOpen(true)
  }

  useEffect(() => {
    setLoading(true);
    setInput(currentQuestion?.id)
    setLoading(false);
  }, [currentQuestion]);

  if (loading) {
    return <Loading />
  }

  return (
    <div className='qaContent fadeInUp-2'>
      {currentQuestion && (
        <>
          {/* Lazy-loaded components with suspense */}
          <div className={`contentHead`}>
            <div className={`indexBtnContainer`}>
              <button onClick={handleQuestionIndexButton}>
                الفهرس
              </button>
            </div>
            <div className='progress'>
              <p className='progressText' >
                {qaLength}
                /
                <span className={`questionId`}>
                  {currentQuestion.id}
                </span>
              </p>
              <progress className={`progressBar`} value={currentQuestion.id} max={qaLength}></progress>
            </div>
          </div>
          <div className='questionAndAnswer'>
            <div className='question'>{currentQuestion.question}</div>
            {currentQuestion.answer && <div className='answer'>{currentQuestion.answer}</div>}
            {currentQuestion.ayaAnswer && <div className='ayaAnswer'>{currentQuestion.ayaAnswer}</div>}
          </div>

          <div className='contentImgBtnContainer fadeInUp-3'>
            {currentQuestion?.ayaImgAnswer?.length > 0 && <ContentImgBtn currentQuestion={currentQuestion} content={`aya`} />}
            <ContentImgBtn currentQuestion={currentQuestion} content={`qa`} />
          </div>
          <div className={`indexSelector fadeInUp-3`}>
            <button aria-label="Previous Question" onClick={prevQuestion}>
              <FaChevronRight />
            </button>

            <IndexButton
              input={input}
              setInput={setInput}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              setErrorMessage={setErrorMessage}
              qaLength={qaLength}
            />

            <button aria-label="Next Question" onClick={nextQuestion}>
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

export default page;
