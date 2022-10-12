import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
    const loadQuestion = useLoaderData().data.questions;
    const questions = loadQuestion;
    return (
        <div>
        <div className="bg-blue-400 grid grid-cols-1 gap-5  w-9/12 h-full gap-5 mx-auto p-6 ">
          {questions.map((quiz) => (
            <Quiz key={quiz.id} quiz={quiz}></Quiz>
          ))}
        </div>
        <div>{}</div>
      </div>
    );
};

export default TopicDetails;