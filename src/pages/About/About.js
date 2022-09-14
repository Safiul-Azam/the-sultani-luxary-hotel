import React from 'react';
import slider1 from '../../images/banner/1.jpg'
import EnjoyLuxury from '../Home/EnjoyLuxury';
import ExtraServices from '../Home/ExtraServices';
import OurFacilities from '../Home/OurFacilities';
import Navbar from '../Shared/Navbar';
import MeetTeam from './MeetTeam';

const About = () => {
    return (
        <div>
            <div className=' pt-8 mix-blend-normal bg-black-400' style={
                {
                    background: `linear-gradient(rgb(0,0,0,0.3),rgb(0,0,0,0.3)),url(${slider1})`,
                    backgroundPosition: 'top',
                    backgroundSize: 'cover'
                }
            }>
                <Navbar></Navbar>


                <div className='text-left text-white container py-32 mx-auto'>
                    <p style={{ letterSpacing: '5px' }} className='text-lg uppercase mb-6'>LUXURY HOTEL</p>
                    <h2 style={{lineHeight:'30px'}} className='text-6xl'>About Us</h2>
                </div>

            </div>
            <EnjoyLuxury></EnjoyLuxury>
            <ExtraServices></ExtraServices>
            <OurFacilities></OurFacilities>
            <MeetTeam></MeetTeam>
        </div>
    );
};

export default About;