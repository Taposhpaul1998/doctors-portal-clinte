import React from 'react';
import { format } from 'date-fns';

const BookingModel = ({ treatment, date, setTreatments }) => {
    const { name, slots } = treatment;

    const handelSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatments(null)

    }

    return (
        <div>
            <input type="checkbox" id="booking-model" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-model" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className='text-2xl w-80 font-semibold pb-4 text-accent'>{name}</h2>
                    <form onSubmit={handelSubmit} className='text-center'>
                        <input type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs bg-slate-300" readOnly />
                        <select name='slot' class="select select-bordered w-full mt-4 max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Full Name" class="input input-bordered w-full max-w-xs mt-4" />
                        <input type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs mt-4" />
                        <input type="text" placeholder="Email" class="input input-bordered w-full max-w-xs mt-4" />
                        <input type="submit" placeholder="submit" class="btn btn-secondary bg-gradient-to-r to-primary w-full max-w-xs mt-4" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModel;