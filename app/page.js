'use client';
import Image from 'next/image';
import { qa } from '@/api/questions_and_answers.js';
import { useState, useEffect } from 'react';

const Page = () => {
  const qaIndex = 0;
  const qadata = qa[qaIndex];
  // const [qaIndex, setqaIndex] = useState(0); // Initialize state to track current question index
  // const [qaData, setQaData] = useState(null); // State to store fetched question and answer

  // // Set an interval to change the question index every 3 seconds
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setqaIndex((prevIndex) => (prevIndex + 1) % 100); // Increment the index and loop back to 0 after 100
  //   }, 3000); // 3000 milliseconds = 3 seconds

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []); // Empty dependency array ensures this effect runs only once

  // // Fetch new question data when qaIndex changes
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await getQa(qaIndex); // Fetch the data for the current index
  //     if (result !== null) {
  //       setQaData(result); // Set the fetched question and answer to state
  //     }
  //   };

  //   fetchData(); // Call the fetch function
  // }, [qaIndex]); // Re-run effect if qaIndex changes

  return (
    <div>
      <h1>100/<span className={`questionId`}>{qadata.id}</span></h1>
      <div className='questionAndAnswer'>
        <div className='question'>س/ {qadata.question} ؟</div>
        <div className='answer'>{qadata.textAnswer}</div>
        <div className='ayaAnswer'>{qadata.ayaAnswer}</div>
        <Image
          className='imgAnswer'
          src={qadata.ayaImgAnswer}
          alt={`Image ${qadata.id} Answer`}
          width={100}
          height={100}
          style={{ width: 'auto', height: 'auto' }}
        />

      </div>
      {/* <h1>Hello</h1>
      <div>{qaData?.id}</div> */}
    </div>
  );
};

export default Page;
