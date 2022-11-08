import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const AllServices = ({ service }) => {

    const { title, _id, price, img, description } = service;
    return (
        <Col>
            <Card className='rounded-0'>
                <PhotoProvider>
                    <PhotoView src={img}>


                        <Card.Img variant="top" src={img} style={{ height: '300px' }} />
                    </PhotoView>
                </PhotoProvider>

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
                    <Button variant='outline-success' as={Link} to={`/services/${_id}`}>View Details</Button>
                </Card.Body>
            </Card>
        </Col >
    );

};

export default AllServices;