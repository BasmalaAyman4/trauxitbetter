import React, { useState } from 'react'
import styles from '../../Styles/home.module.css'
import logo from '../../assets/images/Logo. 1.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../../assets/images/APP.png'
import img2 from '../../assets/images/CASH (2).png'
import img3 from '../../assets/images/1 copy.png'
import img4 from '../../assets/images/es.png'
import Apppage from './Apppage';
import Cashpage from './Cashpage';
import Shoppage from './Shoppage';
import Esports from './Esports';
import { Col, Container, Row } from 'react-bootstrap';
import mobile from '../../assets/images/موكب 3.png'
import future from '../../assets/images/APP 1.png'
import apple from '../../assets/images/Group.svg'
import play from '../../assets/images/Group (1).svg'
import Footer from '../Layout/Footer';
const Home = () => {
    const [content, setContent] = useState('App')
    return (
        <>
            <section className={`${styles.home}`}>
                <div className={`${styles.home__body}`}>
                    <img alt='' src={logo} className={`${styles.img}`} />
                    <h1 className={`${styles.home__title}`}>trauxit</h1>
                    <p className={`${styles.home__para}`}>better</p>
                </div>
                <div>
                    <p className={`${styles.content__para}`}>welcome to the <span> trauxit</span> universe where evertyhing meets <span>better</span></p>
                </div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Navigation]}
                    className={`${styles.swip} mySwiper`}
                >
                    <SwiperSlide className={`${styles.swiperHeader}`} >
                        <img src={img1} className={styles.blur} alt="" onClick={() => { setContent("App") }} />
                        <p className={`${styles.swip__para}`}>App</p>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.swiperHeader}`}>
                        <img src={img2} className={styles.blur} alt="" onClick={() => { setContent("Cash") }} />
                        <p className={`${styles.swip__para}`}>Cash</p>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.swiperHeader}`}>
                        <img src={img3} className={styles.blur} alt="" onClick={() => { setContent("Shop") }} />
                        <p className={`${styles.swip__para}`}>Shop</p>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.swiperHeader}`}>
                        <img src={img4} className={styles.blur} alt="" onClick={() => { setContent("Esports") }} />
                        <p className={`${styles.swip__para}`}>Esports</p>
                    </SwiperSlide>
                </Swiper>
                {
                    content === 'App' ?
                        <Apppage /> : ""
                }
                {
                    content === 'Cash' ?
                        <Cashpage /> : ""
                }
                {
                    content === 'Shop' ?
                        <Shoppage /> : ""
                }
                {
                    content === 'Esports' ?
                        <Esports /> : ""
                }
                <div className={`${styles.future}`}>
                    <h1 className={`${styles.future__title}`}>The Future Of <span>Freight</span> is here</h1>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div className='mt-5'>
                                <div>
                                    <h1 className={`${styles.tech__title}`}>Best In Class Technology :</h1>
                                    <p className={`${styles.tech__para}`}>Shippers reduce cost by 7.5% carriers increase revenue by 7.5%</p>
                                </div>
                                <div>
                                    <h1 className={`${styles.cost__title}`}>Reduce Shipping Cost </h1>
                                    <p className={`${styles.cost__para}`}>shipper dashboard including paperless bol&pod paperless bol&pod instant load status updates instant load status updates shipment statistics load history</p>
                                </div>
                                <div>
                                    <h1 className={`${styles.reduce__title}`}>Reduce Empty Miles</h1>
                                    <p className={`${styles.reduce__para}`}>Instant real-time access gps and route builder includes find loads near you map your route</p>
                                </div>
                            </div>

                        </Col>
                        <Col className='mr-5'>
                            <div className={`${styles.future__img}`}>
                                <img alt='' src={mobile} className={`${styles.mobileimg}`} />
                            </div>
                        </Col>
                        <Col className=''>
                            <div className='mt-5 '>
                                <div>
                                    <h1 className={`${styles.paid__title}`}>Get Paid 2Day!</h1>
                                    <p className={`${styles.paid__para}`}>Get Paid Faster Instant Real-time access upload podcollect rewards all paperless process</p>
                                </div>
                                <div>
                                    <h1 className={`${styles.cost__title}`}>Trauxit With Confidence </h1>
                                    <p className={`${styles.confidence__para}`}>24/7 access Dedicated customer service team call or chat</p>
                                </div>
                                <div>
                                    <h1 className={`${styles.reduce__title}`}>Ship smarter</h1>
                                    <p className={`${styles.ship__para}`}>Manage everything in one place instant load booking Notification</p>
                                </div>
                            </div>
                        </Col>
                        <div className={`${styles.btns}`}>
                            <button className={`${styles.btn}`}><span><img alt='' src={apple} className={`${styles.apple}`} /></span>
                                <div>
                                    Download on the
                                    <p>App Store</p>
                                </div>
                            </button>
                            <button className={`${styles.btn} ${styles.play}`}><span><img alt='' src={play} className={`${styles.apple}`} /></span>
                                <div>
                                    Get in on
                                    <p>Google play</p>
                                </div>
                            </button>
                        </div>
                    </Row>

                </Container>
                <Footer />
            </section>


        </>
    )
}

export default Home
