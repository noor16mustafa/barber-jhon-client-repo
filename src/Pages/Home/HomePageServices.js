import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';


const HomePageServices = ({ service }) => {
    const { title, _id, price, img, description } = service;
    return (
        <Col>
            <Card className='rounded-0'>
                <Card.Img variant="top" src={img} style={{ height: '300px' }} />
                <Card.Body className='bg-dark'>
                    <Card.Title className='fs-3'>{title}</Card.Title>
                    <Card.Text className='text-secondary'>
                        {
                            description.length > 100 ? description.slice(0, 100) + '...' : description
                        }
                    </Card.Text>
                    <Card.Text className='fs-5'>
                        Price Range : ${price}
                    </Card.Text>
                    <Button variant='outline-success'>View Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomePageServices;