import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';


const MyWork = () => {
    return (
        <Container className='text-center text-light py-4 px-4'>
            <h1 className='mb-4'>Some Of My design_</h1>

            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    }
                }}

            >
                <SwiperSlide>
                    <Card className='p-0 overflow-hidden h-100 shadow bg-dark'>
                        <div className='overflow-hidden rounded p-0'>
                            <Card.Img variant='top' className='img-fluid' src={image1} stye={{ height: '200px' }}></Card.Img>
                        </div>
                        <Card.Body className='text-center'>
                            <Card.Title>Spanish Hair Cut</Card.Title>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='p-0 overflow-hidden h-100 shadow bg-dark'>
                        <div className='overflow-hidden rounded p-0'>
                            <Card.Img variant='top' src={image2} stye={{ height: '200px' }}></Card.Img>
                        </div>
                        <Card.Body className='text-center'>
                            <Card.Title>French Feru Cut</Card.Title>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='p-0 overflow-hidden h-100 shadow bg-dark'>
                        <div className='overflow-hidden rounded p-0'>
                            <Card.Img variant='top' stye={{ height: '200px' }} src={image3}></Card.Img>
                        </div>
                        <Card.Body className='text-center'>
                            <Card.Title>Light Groom Makeup</Card.Title>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='p-0 overflow-hidden h-100 shadow bg-dark'>
                        <div className='overflow-hidden rounded p-0'>
                            <Card.Img variant='top' src={image4}
                                stye={{ height: '200px' }}></Card.Img>
                        </div>
                        <Card.Body className='text-center'>
                            <Card.Title>Spanish Hair Cut</Card.Title>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='p-0 overflow-hidden h-100 shadow bg-dark'>
                        <div className='overflow-hidden rounded p-0'>
                            <Card.Img variant='top' stye={{ height: '200px' }} src={image5}></Card.Img>
                        </div>
                        <Card.Body className='text-center'>
                            <Card.Title>Spanish Hair Cut</Card.Title>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='p-0 overflow-hidden h-100 shadow bg-dark'>
                        <div className='overflow-hidden rounded p-0'>
                            <Card.Img variant='top' stye={{ height: '200px' }} src={image6}></Card.Img>
                        </div>
                        <Card.Body className='text-center'>
                            <Card.Title>Spanish Hair Cut</Card.Title>
                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card className='p-0 overflow-hidden h-100 shadow bg-dark'>
                        <div className='overflow-hidden rounded p-0'>
                            <Card.Img variant='top' stye={{ height: '200px' }} src={image7}></Card.Img>
                        </div>
                        <Card.Body className='text-center'>
                            <Card.Title>Naiguru Cutting</Card.Title>
                        </Card.Body>
                    </Card>
                </SwiperSlide>


            </Swiper>
        </Container>
    );
};

export default MyWork;