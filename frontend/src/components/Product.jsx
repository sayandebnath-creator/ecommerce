import { React, useState } from 'react'
import Layout from './common/Layout'
import { Rating } from 'react-simple-star-rating'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import ProductImgOne from "../assets/images/Mens/five.jpg"
import ProductImgTwo from "../assets/images/Mens/six.jpg"
import ProductImgThree from "../assets/images/Mens/seven.jpg"

const Product = () => {
    
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [rating, setRating] = useState(4);


  return (
    <Layout>
        <div className="container product-detail">
            <div className="row">
                <div className="col-md-12">
                <nav aria-label="breadcrumb" className='py-4'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li class="breadcrumb-item" aria-current="page"><Link to="/shop">Shop</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Dummy Product Title</li>
                    </ol>
                    </nav>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-5">
                    <div className="row">
                        <div className="col-2">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#000',
                                '--swiper-pagination-color': '#000',
                                }}
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                direction={`vertical`}
                                spaceBetween={10}
                                slidesPerView={6}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper mt-2"
                            >
                                    
                            <SwiperSlide>
                                <div className='content'>
                                    <img 
                                        src={ProductImgOne} 
                                        alt="" 
                                        height={100}
                                        className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='content'>
                                    <img 
                                        src={ProductImgTwo} 
                                        alt="" 
                                        height={100}
                                        className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='content'>
                                    <img 
                                        src={ProductImgThree} 
                                        alt="" 
                                        height={100}
                                        className='w-100' />
                                </div>                                                                      
                            </SwiperSlide>
                        </Swiper>
                        </div>
                        <div className="col-10">
                        <Swiper
                            style={{
                            '--swiper-navigation-color': '#000',
                            '--swiper-pagination-color': '#000',
                            }}
                            loop={true}
                            spaceBetween={0}
                            navigation={true}
                            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            
                            <SwiperSlide >
                                <div className='content'>
                                <img 
                                    src={ProductImgOne} 
                                    alt="" 
                                    className='w-100' />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className='content'>
                                <img 
                                    src={ProductImgTwo} 
                                    alt="" 
                                    className='w-100' />
                                </div>
                            </SwiperSlide>     
                            <SwiperSlide >
                                <div className='content'>
                                <img 
                                    src={ProductImgThree} 
                                    alt="" 
                                    className='w-100' />
                                </div>
                            </SwiperSlide>                
                        </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    
                    <h2>Dummy Product Title</h2>
                    <div className='d-flex'>
                    <Rating size={20} readonly initialValue={rating} />
                    <span className='pt-1 ps-2'>10 Reviews</span>
                    </div>

                    <div className='price h3 py-3'>
                        $20 <span className='text-decoration-line-through'>$18</span>
                    </div>

                    <div>
                        100% Original Products <br /> 
                        Pay on delivery might be available <br /> 
                        Easy 15 days returns and exchanges
                    </div>

                    <div className='pt-3'>
                    <strong>Select Size</strong>
                    <div className='sizes pt-2'>
                        <button className='btn btn-size ms-1'>S</button>
                        <button className='btn btn-size ms-1'>M</button>
                        <button className='btn btn-size ms-1'>L</button>
                        <button className='btn btn-size ms-1'>XL</button>
                    </div>
                    </div>

                    <div className="add-to-cart my-4">
                        <button className="btn btn-primary text-uppercase">
                            Add To Cart
                        </button>
                    </div>

                    <hr />

                    <div>
                        <strong>SKU: </strong>
                        DDXX2234
                    </div>
                </div>
            </div>

            <div className='row pb-5'>
                <div className='col-md-12'>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    >
                    <Tab eventKey="home" title="Description">
                        Tab content for Description
                    </Tab>
                    <Tab eventKey="profile" title="Reviews (10)">
                        Reviews Area
                    </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Product
