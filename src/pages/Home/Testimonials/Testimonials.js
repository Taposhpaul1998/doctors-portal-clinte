import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Reviews from './Reviews';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            location: "California",
            reviews: '',
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            location: "California",
            reviews: '',
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            location: "California",
            reviews: '',
            img: people3
        }
    ]
    return (
        <section className='my-24'>
            <div className='flex justify-between px-10'>
                <div>
                    <h4 className="text-sl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl text-accent'>What our Patients Says</h2>
                </div>
                <div className='ml-4'>
                    <img src={quote} className=' w-28 lg:w-48' alt="" />
                </div>
            </div>
            <div className=' w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonials;