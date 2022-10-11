import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
//import './Topics.css'

const Topics = () => {
    
    const topics = useLoaderData();
    console.log(topics);

    return (
        <div className='bg-gray-500 lg:m-11 lg:p-11 lg:px-72 lg:py-44 lg:w-auto  grid lg:grid-cols-2 gap-44 md:grid-cols-1 ml-11 pl-11 md:w-screen'>
            
            {
                topics.data.map(topic => <Topic
                key={topic.id}
                topic={topic}
                ></Topic>)
            }  
        </div>
    );
    
};

export default Topics;