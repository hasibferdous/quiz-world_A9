import React from 'react';
import banner from '../../images/1.jpg'
import './Home.css'
const Home = () => {
    return (
        <div className='banner'>
            <div className='banner-img w-screen  relative'>
            <h1 className='absolute text-5xl bottom-1/2 right-1/2  -translate-y-1/2 pb-5'><b>Unlocking knowledge at the speed of thought.</b></h1>
            <img className='banner-img w-screen h-96' src={banner} alt=""/>
        </div>
            
        </div>
    );
};

export default Home;