import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState();

    useEffect(() => {
        fetch('')
    }, [])
    return (
        <div className='text-light '>
            <Container>
                <h1 className='pt-5'> My All Services_</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service => )
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Services;