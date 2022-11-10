import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');
    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const description = form.description.value;
        const service = {
            title,
            img,
            price,
            description
        }

        fetch(`http://localhost:5000/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    e.target.reset();
                    toast.success('Service Added Successfully');

                }

            })
            .catch(er => console.error(er))

    }
    return (
        <div className='text-light'>
            <h1 className='text-center text-warning mt-4'>Add New Service</h1>
            <Container>
                <div className='w-50 mx-auto mt-5'>
                    <Form onSubmit={handleAddService}>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label className=''>Service Name</Form.Label>
                            <Form.Control className='bg-dark border border-warning text-light' name="title" type="text" placeholder="Enter Name"
                            />

                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label className=''>Photo URL</Form.Label>
                            <Form.Control className='bg-dark border border-warning text-light' name="img" type="text" placeholder="Photo"
                            />

                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label className=''>Price </Form.Label>
                            <Form.Control className='bg-dark border border-warning text-light' name="price" type="text" placeholder="Enter price" />

                        </Form.Group>


                        <Form.Group className='mx-auto' controlId="floatingTextarea2" label="">
                            <Form.Control className='bg-dark text-light mx-auto mb-3'
                                name='description'
                                type='text'
                                as="textarea"
                                placeholder="Description"

                                style={{ height: '100px' }}
                            />

                        </Form.Group>

                        <div className='text-center'>
                            <Button variant="outline-warning" type="submit">
                                Add
                            </Button>
                        </div>


                    </Form>
                </div>
            </Container>

        </div>
    );
};

export default AddService;