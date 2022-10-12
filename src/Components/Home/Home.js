import React from 'react';
import banner from '../../images/12.jpg'


const Home = () => {

    return (
        <div>
        <div className='banner'>
            <div className='banner-img w-auto m-11 rounded  relative'>
            <h1 className='absolute lg:text-5xl -mr-5 top-1/2 right-1/2  -translate-y-1/2 pb-5 md:text-xl'><b>Unlocking knowledge at the speed of thought.</b></h1>
            <img className='banner-img w-screen h-96 rounded-xl' src={banner} alt=""/>
  
        </div>

        </div>

        </div>

    );
};

export default Home;