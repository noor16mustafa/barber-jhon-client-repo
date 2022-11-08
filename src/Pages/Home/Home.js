import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import image from '../../assets/barbar1.jpg'
import AllServices from '../Services/AllServices';


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/servicesHome')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            });
    }, [])

    return (
        <div>
            <Card className="bg-dark text-white rounded-0" style={{ zIndex: '000' }}>
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

            {/* .......services section......  */}

            <div className='text-light my-5 py-5'>
                <h1 className='mb-5'>Services_</h1>
                <Container>

                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            services.map(service => <AllServices
                                key={service._id} service={service}></AllServices>)
                        }
                    </Row>



                    <Button variant='outline-warning' className='fs-4 fw-semibold px-5 py-1 mt-5' as={Link} to='/services'>See All</Button>
                </Container>

            </div>
        </div>
    );
};

export default Home;