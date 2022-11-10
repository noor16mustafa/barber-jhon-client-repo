import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Container, FloatingLabel, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import AllReview from '../../../Reviews/AllReview/AllReview';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const serviceDetail = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const { title, img, price, description, _id } = serviceDetail;
    const [reload, setReload] = useState(false);
    useTitle({ title });



    const handleAddReview = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        const photo = user?.photoURL || '';
        const email = user?.email || 'unregistered';
        const name = user?.displayName || '';
        const reviewDetails = {
            service: _id,
            serviceName: title,
            review,
            photo,
            email,
            name
        }

        fetch(`https://barber-service-review-server.vercel.app/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewDetails)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    e.target.reset();
                    toast.success('Review Added Successfully');

                }

            })
            .catch(er => console.error(er))

    }

    // ------------get review from database--------

    useEffect(() => {
        fetch(`https://barber-service-review-server.vercel.app/reviews?service=${_id}`)
            .then(res => res.json()
                .then(data => {

                    setReviews(data);
                    setReload(!reload);
                }))
    }, [_id, reload])

    return (
        <div className='text-light'>
            <Container className='text-center'>
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




            </Container>

            {/*------- add review field-------- */}

            <div className='mx-auto my-5 pt-5'>
                <Container>
                    <div className="px-auto py-5 mx-auto text-center border-top border-bottom border-warning">
                        {
                            user?.uid ?
                                <>
                                    <form onSubmit={handleAddReview}>
                                        <FloatingLabel className='mx-auto' controlId="floatingTextarea2" label="">
                                            <Form.Control className='bg-dark text-light mx-auto mb-3'
                                                name='review'
                                                type='text'
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{ height: '100px', width: '400px' }}
                                            />

                                        </FloatingLabel>
                                        <Button variant='outline-warning' type="submit">Add Review</Button>
                                    </form>
                                </>
                                :
                                <Button variant='outline-warning' as={Link} to='/login'>Please Login to Add Review</Button>
                        }

                    </div>
                </Container>

            </div>
            {/*...... service review...... */}
            <div className='mx-auto my-5 pt-5 '>
                <Container>
                    <h2 className='text-center mb-4'>All Reviews_</h2>

                    {
                        reviews.map(allReview => <AllReview
                            key={allReview._id}
                            allReview={allReview}
                        ></AllReview>)
                    }

                </Container>
            </div>

        </div>
    );
};

export default ServiceDetails;