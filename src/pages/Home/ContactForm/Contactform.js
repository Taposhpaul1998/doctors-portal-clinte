import React from 'react';
import Mainbtn from '../Shared/MainButton/Mainbtn';

const Contactform = () => {
    return (
        <section className='text-center bg-appointment py-14'>
            <div>
                <h4 className='text-primary text-lg font-semibold'>Contact Us</h4>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <div className='py-10'>
                <form>
                    <input type="text" placeholder="Email Address" class="input input-bordered input-sm w-full max-w-xs mb-4" />
                    <br />
                    <input type="text" placeholder="Subjet" class="input input-bordered input-sm w-full max-w-xs mb-4" />
                    <br />
                    <textarea class="textarea textarea-bordered w-full max-w-xs mb-4 " placeholder="Bio"></textarea>
                    <br />
                    <Mainbtn> Submit</Mainbtn>
                </form>
            </div>
        </section>
    );
};

export default Contactform;