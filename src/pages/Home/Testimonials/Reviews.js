import React from 'react';

const Reviews = ({ review }) => {
    const { name, reviews, img, location } = review
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ratione dolor dolorum amet blanditiis minus. Sapiente libero aut numquam facere!</p>
            </div>
            <div>
                <div class="avatar">
                    <div class="w-14 h-14 m-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                    <div className='mt-4'>
                        <h2>{name}</h2>
                        <h3>{location}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;