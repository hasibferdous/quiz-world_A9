import React from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../../images/12.jpg'
import Topics from '../Topics/Topics';
import './Home.css'
const Home = () => {

    // const topics =useLoaderData();


    return (
        <div>
        <div className='banner'>
            <div className='banner-img w-auto m-5 rounded  relative'>
            <h1 className='absolute text-5xl -mr-5 top-1/2 right-1/2  -translate-y-1/2 pb-5'><b>Unlocking knowledge at the speed of thought.</b></h1>
            <img className='banner-img w-screen h-96 rounded-xl' src={banner} alt=""/>
        </div>
        </div>
        {/* <div className='home-container'>
            <div className='t-shirt-container'>
            {
                topics.map(topic => <Topics   
                 key={topic.id}
                 topic={topic}
                 ></Topics>   
                    )
            }
            </div>

        </div> */}
        </div>

    );
};

export default Home;