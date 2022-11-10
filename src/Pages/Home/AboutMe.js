import React from 'react';
import { Container } from 'react-bootstrap';
import barber from '../../assets/jhon.jpg';

const AboutMe = () => {
    return (
        <Container>
            <h1 className='text-center text-light mt-5'>About Me_</h1>
            <div className='text-light mx-auto my-5 pt-4  d-lg-flex'>
                <div className='w-50' style={{ height: '400px' }}>
                    <img className='img-fluid' src={barber} alt="" />
                </div>
                <div className='me-4 py-5'>
                    <h4>Name:</h4>
                    <h5 className='text-warning'>Jhon Frenchisco</h5>
                    <h4 className='mt-5'>Email:</h4>
                    <h5 className='text-warning'>jhon.french@Email.com</h5>
                    <h4 className='mt-5'>Contact:</h4>
                    <h5 className='text-warning'>96609653212</h5>
                </div>
                <div className='me-5 py-5 px-4'>
                    <h4>Present Address:</h4>

                    <h5 className='text-warning'>1/2 block,road 4,Sydney,Australia</h5>
                    <h4 className='mt-5'>Facebook:</h4>
                    <h5 className='text-warning'>Jhon The Barber</h5>
                    <h4 className='mt-5'>Twiter:</h4>
                    <h5 className='text-warning'>Jhon The Barber</h5>
                </div>
            </div>
        </Container>
    );
};

export default AboutMe;