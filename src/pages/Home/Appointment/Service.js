import React from 'react';

const Service = ({ service, setTreatments }) => {
    const { name, slots } = service
    return (
        <div className="card text-center bg-base-100 shadow-xl py-5">
            <div classNames="card-body">
                <h2 className="text-xl text-secondary mb-4">{name}</h2>
                <p className='mb-4'>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'> NO Slot Available</span>
                }</p>
                <p className='mb-4'>{slots.length}{slots.length > 1 ? 'spaces' : "space"} available</p>
                <div>
                    <label for="booking-model" onClick={() => setTreatments(service)} disabled={slots.length === 0} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default Service;