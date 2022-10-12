import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

const Topic = ({topicType}) => {
    const { logo, name, id, total } = topicType;
    const navigate = useNavigate();
    const handleQuizEvent = () => {
      navigate(`/quiz/${id}`);
    };
    return (
        <div className='bg-indigo-300 h-full w-80 mt-11'>
            <div className='bg-black text-white h-96 w-72 lg:mt-11  md:mr-40 '>
            <h3 className='text-3xl'><b>{name}</b></h3>
            <img className='h-52 w-80' src={logo}/>
            <p className='2xl mb-2'><b>Total Questions: {total}</b></p>
            <Button onClick={handleQuizEvent} className="bg-blue-700  py-4 px-4 mt-5 text-2xl font-medium text-white">Start Quiz</Button>
          </div>
          </div>
    );
};
export default Topic;