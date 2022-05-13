import React from 'react';
import Mainbtn from '../Shared/MainButton/Mainbtn';

const Service = ({ service }) => {
    const { name, slots } = service
    return (
        <div className="card text-center bg-base-100 shadow-xl py-5">
            <div classNames="card-body">
                <h2 className="text-xl text-secondary mb-4">{name}</h2>
                <p className='mb-4'>{slots.length} spaces avilable</p>
                <div>
                    <Mainbtn>BOOK APPOINTMENT</Mainbtn>
                </div>
            </div>
        </div>
    );
};

export default Service;