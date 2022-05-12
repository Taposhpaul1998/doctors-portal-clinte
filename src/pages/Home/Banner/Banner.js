import React from 'react';
import dentalchair from '../../../assets/images/chair.png'
import Mainbtn from '../Shared/MainButton/Mainbtn';

const Banner = () => {
    return (
        <div class="hero min-h-screen px-12 bg-hero-pattern bg-fixed">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={dentalchair} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='pr-10'>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Mainbtn>Get Started</Mainbtn>
                </div>
            </div>
        </div>
    );
};

export default Banner;