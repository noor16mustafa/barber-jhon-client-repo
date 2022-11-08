import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import image from '../../assets/barbar1.jpg'

const Home = () => {
    return (
        <div>
            <Card className="bg-dark text-white rounded-0 position-relative" style={{ zIndex: '000' }}>
                <Card.Img src={image} alt="" style={{ height: '700px' }} />
                <Card.ImgOverlay>
                    <Card.Title className='mt-5 pt-5 fs-1 fw-semibold'>Hello I'm</Card.Title>
                    <Card.Title className='pt-2 fw-bold' style={{ fontSize: '5rem' }}>John Smith</Card.Title>
                    <Card.Text className='py-5 fs-1 fw-semibold w-50 mx-auto'>
                        <Marquee> My occupation is mainly to cut, dress, groom style and shave men's and boys' hair or beards. </Marquee>

                    </Card.Text>
                    <Card.Text><Button variant='outline-warning' className='py-2 fw-bold fs-3'>Booked Now</Button></Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Home;