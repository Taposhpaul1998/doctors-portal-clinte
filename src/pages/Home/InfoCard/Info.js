import React from 'react';

const Info = ({ img, name, detels, bgclass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgclass} p-5`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title text-white">{name}</h2>
                <p>{detels}</p>
            </div>
        </div>
    );
};

export default Info;