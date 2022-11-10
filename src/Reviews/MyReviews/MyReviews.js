import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Reviews');

    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`https://barber-service-review-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    toast.error('Unauthorized access');

                }
                return res.json()
            })
            .then(data => {

                setMyReviews(data);

            })

    }, [user?.email]);

    //------------ delete operation--------

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete this review?');
        if (proceed) {
            fetch(`https://barber-service-review-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        const remaining = myReviews.filter(rvw => rvw._id !== id);

                        setMyReviews(remaining)
                        toast.success('Successfully Deleted Review')
                    }
                })
        }
    }

    //handle update 

    const handleEdit = (id) => {
        navigate(`/update/${id}`)
    }

    return (
        <div className='mx-auto my-5 pt-5 text-light '>
            <Container>
                {
                    myReviews.length === 0 ? <h1 className='text-center text-danger'>No Reviews Were added</h1>
                        :
                        <>
                            <h2 className='text-center mb-4'>All Reviews_</h2>

                            {
                                myReviews.map(myReview =>
                                    <div
                                        key={myReview._id}
                                        className='d-flex flex-row bg-secondary shadow  w-50 my-3 py-2 mx-auto'>
                                        <div className='ms-3'>
                                            <img src={myReview.photo} alt="" className='rounded-circle' style={{ width: '80px', height: '80px' }} />
                                        </div>
                                        <div className='ps-4 '>
                                            <h4>{myReview.name}</h4>
                                            <h6>Service: {myReview.serviceName}</h6>

                                            <p className='text-dark'>: {myReview.review}</p>
                                            <Button onClick={() => handleDelete(myReview._id)} variant='danger' className='me-3'>Delete</Button>

                                            <Button onClick={() => handleEdit(myReview._id)} variant='outline-warning'>Edit</Button>
                                        </div>



                                    </div>)
                            }
                        </>
                }


            </Container>
        </div>
    );
};

export default MyReviews;