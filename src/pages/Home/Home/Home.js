import React from 'react';
import Appoinment from '../Appointment/Appoinment';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Contactform from '../ContactForm/Contactform';
import Infocard from '../InfoCard/Infocard';
import Services from '../Services/Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Infocard></Infocard>
            <Services></Services>
            <Care></Care>
            <Appoinment></Appoinment>
            <Testimonials></Testimonials>
            <Contactform></Contactform>
        </>
    );
};

export default Home;