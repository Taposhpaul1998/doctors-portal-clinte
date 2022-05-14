import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModel from './BookingModel';
import Service from './Service';

const AvilableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatments] = useState(null);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className='mx-28'>
            <h2 className='text-center text-xl text-secondary mt-4'>Avilable Appointment on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatments={setTreatments}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModel date={date} setTreatments={setTreatments} treatment={treatment}></BookingModel>}
        </div>

    );
};

export default AvilableAppointment;