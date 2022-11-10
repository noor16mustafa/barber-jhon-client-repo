import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const EditReview = () => {
    const router = useParams();
    const [update, SetUpdate] = useState({});
    const navigate = useNavigate();
    useTitle('ServiceEdit');

    const { id } = router;

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json()
                .then(data => {

                    SetUpdate(data);

                }))
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();
        const reviewUpdate = {
            name: e.target.name.value,
            review: e.target.review.value
        }


        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewUpdate)
        })
            .then(res => res.json()
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        toast.success('Data Updated Successfully');
                        navigate('/myreviews');

                    }
                }))
    }
    return (
        <div className='text-secondary'>
            <h1 className='text-center text-warning mt-4'>Update here..</h1>
            <Container>
                <div className='w-25 mx-auto mt-5'>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label className=''>User Name</Form.Label>
                            <Form.Control className='bg-dark border border-warning text-light' name="name" type="text" placeholder="Enter Name"
                                defaultValue={update.name} />

                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label className=''>Service Name</Form.Label>
                            <Form.Control className='bg-dark border border-warning text-secondary' name="service" type="text" placeholder="Photo"
                                defaultValue={update.serviceName} />

                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label className=''>Email </Form.Label>
                            <Form.Control className='bg-dark border border-warning text-secondary' name="email" type="email" placeholder="Enter email" defaultValue={update.email} />

                        </Form.Group>


                        <Form.Group className='mx-auto' controlId="floatingTextarea2" label="">
                            <Form.Control className='bg-dark text-light mx-auto mb-3'
                                name='review'
                                type='text'
                                as="textarea"
                                placeholder="Leave your updated review"

                                style={{ height: '100px', width: '400px' }}
                            />

                        </Form.Group>

                        <div className='text-center'>
                            <Button variant="outline-warning" type="submit">
                                Update
                            </Button>
                        </div>


                    </Form>
                </div>
            </Container>

        </div>
    );
};

export default EditReview;