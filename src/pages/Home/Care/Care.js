import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import Mainbtn from '../Shared/MainButton/Mainbtn';

const Care = () => {
    return (
        <section style={{ width: "80%" }} className='grid grid-cols-1 lg:grid-cols-2 mx-auto mt-24 pb-28'>
            <div style={{ width: "398px", height: "450px" }}>
                <img className='rounded' style={{ width: "100%" }} src={treatment} alt="" />
            </div>
            <div className='flex items-center'>
                <div>
                    <h2 className='font-bold text-5xl text-accent mb-6 mt-16'>Exceptional Dental Care, on Your Terms</h2>
                    <p className='text-accent mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, molestias. Cumque fugit omnis dolore tempora aliquid debitis officiis necessitatibus magnam?</p>
                    <Mainbtn></Mainbtn>
                </div>
            </div>
        </section>
    );
};

export default Care;