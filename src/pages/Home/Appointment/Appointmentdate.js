import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const Appointmentdate = () => {
    const { date, setDate } = useState(new Date());
    return (
        <div className="hero min-h-screen bg-hero-pattern">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-md rounded-lg shadow-2xl" alt='Dental chair' />
                <div className='border rounded mr-6 bg-white'>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default Appointmentdate;