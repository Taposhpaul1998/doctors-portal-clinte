import React from 'react';

const Service = ({ name, img }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, nostrum.</p>
            </div>
        </div>
    );
};

export default Service;