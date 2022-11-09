import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const serviceDetail = useLoaderData();
    const { title, img, price, description, _id } = serviceDetail;
    return (
        <div className='text-light'>
            <Container>
                <h1 className='pt-5 mb-5'> {title}</h1>
                <Card className='my-5 mx-5 bg-dark'>
                    <Card.Img variant="top" src={img} style={{ height: '400px' }} />
                    <Card.Body>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>

                    <Card.Text className='text-warning fs-4'>Price Range: ${price}</Card.Text>


                </Card>

                {/*...... service review...... */}


            </Container>

        </div>
    );
};

export default ServiceDetails;