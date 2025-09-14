import React from 'react';
import Hero from "../component/Hero"
import wave from"../assets/wave.svg"
const Home = () => {
    return (
        <div className='flex flex-col min-h-[calc{100vh-116px}]'>
       <Hero/>

       <img src={wave} alt="" />
        </div>
    );
};

export default Home;