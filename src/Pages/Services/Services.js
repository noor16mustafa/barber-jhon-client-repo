import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import AllServices from './AllServices';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            });
    }, [])
    return (
        <div className='text-light '>
            <Container>
                <h1 className='pt-5 mb-5'> My All Services_</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {

                        services.map(service => <AllServices
                            key={service._id} service={service}></AllServices>)

                    }
                </Row>
            </Container>

        </div>
    );
};

export default Services;