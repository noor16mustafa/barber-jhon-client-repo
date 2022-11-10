import React from 'react';

const AllReview = ({ allReview }) => {
    const { photo, name, review } = allReview;
    return (
        <div className='d-flex flex-row bg-secondary shadow rounded-pill w-50 my-3 py-2 mx-auto'>
            <div className='ms-3'>
                <img src={photo} alt="" style={{ width: '80px', height: '80px' }} />
            </div>
            <div className='ps-4 '>
                <h4>{name}</h4>

                <p className='text-dark'>: {review}</p>
            </div>
        </div>
    );
};

export default AllReview;