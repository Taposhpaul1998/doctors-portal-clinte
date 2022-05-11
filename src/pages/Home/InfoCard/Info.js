import React from 'react';

const Info = ({ img, name, detels, bgclass }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgclass} p-5`}>
            <figure><img src={img} alt="Album" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title text-white">{name}</h2>
                <p>{detels}</p>
            </div>
        </div>
    );
};

export default Info;