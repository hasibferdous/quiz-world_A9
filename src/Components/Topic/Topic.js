import React from 'react';


const Topic = ({topic}) => {
    const {logo, name, total} = topic;
    return (
        <div className='bg-indigo-300 h-full w-80 mt-11'>
            <div className='bg-black text-white h-96 w-72 mt-11'>
            <h3 className='text-3xl'><b>Topic Name: {name}</b></h3>
            <img className='h-52 w-80' src={logo}/>
            <p className='2xl'><small><b>Total Questions: {total}</b></small></p>
            <button className='bg-indigo-500 p-5 h-18 rounded-xl hover:bg-blue w-44'>Start Quiz</button>
            </div>
        </div>
    );
};

export default Topic;