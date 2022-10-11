import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicDetails = () => {
    const topic = useLoaderData();
    console.log(topic);
    return (
        <div>
        <h1>Know About: {topic.name}</h1>
        {/* <p>Call him/her: {topic.phone}</p> */}
        <h2>Everything that you need to know about this person</h2>
    </div>
    );
};

export default TopicDetails;