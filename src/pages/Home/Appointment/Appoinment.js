import React from 'react';
import Mainbtn from '../Shared/MainButton/Mainbtn';
import doctor from '../../../assets/images/doctor-small.png'

const Appoinment = () => {
    return (
        <section className=' bg-appointment mt-32'>
            <div style={{ width: '80%' }} className=' mx-auto flex justify-center items-center'>
                <div className='flex-1 hidden lg:block'>
                    <img className='mt-[-100px]' style={{ maxWidth: '525px' }} src={doctor} alt="" />
                </div>
                <div className='flex-1 p-2 py-3'>
                    <h5 className='text-xl text-primary mb-2'>Appointment</h5>
                    <h3 className='text-3xl font-bold text-white mb-2'>Make an appointment Today</h3>
                    <p className='text-white mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, fuga. Ad in iure rerum eos vel voluptas numquam ipsam nesciunt nobis provident ex omnis et animi consequatur similique odio deserunt, nihil incidunt? Sapiente animi itaque quae suscipit dolorem nisi nemo similique maxime. Quibusdam pariatur corrupti ullam odit itaque tempora voluptate.</p>
                    <Mainbtn>Get Started</Mainbtn>
                </div>
            </div>
        </section>
    );
};

export default Appoinment;