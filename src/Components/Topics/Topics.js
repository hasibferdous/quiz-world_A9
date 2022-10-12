import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topicCategory = useLoaderData();
    const topicTypes = topicCategory.data;

    return (
        <div className='bg-gray-500 lg:m-11 lg:p-11 lg:px-72 lg:py-44 lg:w-auto  grid lg:grid-cols-2 gap-44 md:grid-cols-1 ml-11 pl-11 md:w-screen'>
            {
               topicTypes.map((topicType) => <Topic
                key={topicType.id}
                topicType={topicType}
                ></Topic>)
            }  
        </div>
    );
};
export default Topics;