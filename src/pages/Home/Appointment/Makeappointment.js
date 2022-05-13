import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Appointmentdate from './Appointmentdate';
import AvilableAppointment from './AvilableAppointment';

const Makeappointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <>
            <Appointmentdate date={date} setDate={setDate}></Appointmentdate>
            <AvilableAppointment date={date}></AvilableAppointment>
            <Footer></Footer>
        </>
    );
};

export default Makeappointment;