import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUserProfile, setLoading, loading } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                toast.success('Account Created Successfully');
                console.log(user);
                handleUpdateProfile(name, photoURL);

            })
            .catch(e => {
                setError(e.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div className='text-light'>
            <h1 className='text-center text-warning mt-4'>Sign Up !!!</h1>
            <Container>
                <div className='w-25 mx-auto mt-5'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label className=''>Your Name</Form.Label>
                            <Form.Control className='bg-dark border border-warning text-white' name="name" type="text" placeholder="Enter Name" required />

                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label className=''>Photo URL</Form.Label>
                            <Form.Control className='bg-dark border border-warning text-white' name="photoURL" type="text" placeholder="Photo" />

                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label className=''>Email address</Form.Label>
                            <Form.Control className='bg-dark border border-warning text-white' name="email" type="email" placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className='bg-dark border border-warning text-white' name='password' type="password" placeholder="Password" required />
                        </Form.Group>
                        <div className='text-center'>
                            <Button variant="outline-warning" type="submit">
                                Sign Up
                            </Button>
                        </div>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>

                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Register;