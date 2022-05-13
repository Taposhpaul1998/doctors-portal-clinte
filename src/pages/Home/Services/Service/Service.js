import React from 'react';

const Service = ({ name, img }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nostrum.</p>
            </div>
        </div>
    );
};

export default Service;