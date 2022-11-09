import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Userlogin = () => {
    const { signIn, provider, setLoading, loading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;

                setError('');
                form.reset();
                toast.success('Logged in Successful');
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(e => {
                setError(e.message)
            })
            .finally(() => {
                setLoading(false)
            })

    }

    const handleGoogleSignIn = () => {
        provider(googleProvider)
            .then(result => {
                const user = result.user;
                setError('');

            })
            .catch(e => {
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <div className='text-light text-center'>
            {
                loading === true ? <Spinner animation="border" variant="warning" /> :
                    <>
                        <Container>
                            <h2 className='text-center text-warning mt-4'>Please Login For Visit</h2>
                            <div className='w-25 mx-auto mt-5'>
                                <Form onSubmit={handleSubmit}>
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
                                            Login
                                        </Button>
                                    </div>


                                </Form>
                                <div className='text-center my-3'>
                                    <Button onClick={handleGoogleSignIn} variant="outline-warning" type="submit" className='px-2'>
                                        Google Sign In
                                    </Button>
                                </div>
                                <p>New to this side? please <Link to='/register'>Sign Up</Link></p>
                            </div>
                        </Container>
                    </>
            }



        </div>
    );
};

export default Userlogin;