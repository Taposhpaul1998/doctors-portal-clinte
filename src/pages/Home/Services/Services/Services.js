import React from 'react';
import Service from '../Service/Service';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className=' mt-20'>
            <div className='mb-10'>
                <h2 className='text-xl text-center font-bold text-primary mb-4'>OUR SERVICES</h2>
                <h2 className='text-4xl text-center text-accent'>Services We Provide</h2>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-3 m-10 mt-20'>
                <Service name="Fluoride Treatment" img={fluoride}></Service>
                <Service name="Cavity Filling" img={cavity}></Service>
                <Service name="Teeth Whitening" img={whitening}></Service>
            </div>
        </div>
    );
};

export default Services;