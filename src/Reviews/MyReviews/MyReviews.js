import React, { useContext, useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reload, setReload] = useState(false);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json()
                .then(data => {

                    setMyReviews(data);

                }))
    }, [user?.email])

    //------------ delete operation--------

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = myReviews.filter(rvw => rvw._id !== id);

                        setMyReviews(remaining)
                    }
                })
        }
    }

    return (
        <div className='mx-auto my-5 pt-5 text-light '>
            <Container>
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
                                <Button variant='outline-warning'>Edit</Button>
                            </div>



                        </div>)
                }

            </Container>
        </div>
    );
};

export default MyReviews;