import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import Info from './Info';

const Infocard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <Info bgclass="bg-gradient-to-r from-secondary to-primary" detels="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo." name={"Opening houer"} img={clock}></Info>
            <Info bgclass="bg-accent" detels="Tejgown nakhal para , Dhaka, Bangladesh" name={"Visit our location"} img={marker}></Info>
            <Info bgclass="bg-gradient-to-r from-secondary to-primary" detels="+00012345678" name={"Contact us now"} img={phone}></Info>
        </div>
    );
};

export default Infocard;