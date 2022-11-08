import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-5 py-5 bg-secondary opacity-50'>
            <div className='text-light'>
                <h2>I'm also in social networks</h2>
                <h5>Follow me on social networks to get the latest news, blog, updates and much more.</h5>
                <FaFacebook className='me-2' style={{ width: '30px', height: '30px' }}></FaFacebook>
                <FaLinkedin className='me-2' style={{ width: '30px', height: '30px' }}></FaLinkedin>
                <FaTwitterSquare className='me-2' style={{ width: '30px', height: '30px' }}></FaTwitterSquare>
            </div>
        </div>
    );
};

export default Footer;