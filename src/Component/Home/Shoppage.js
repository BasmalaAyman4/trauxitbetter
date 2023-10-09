import React from 'react'
import styles from '../../Styles/home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import mobile from '../../assets/images/موكب 3.png'
import img3 from '../../assets/images/1 copy.png'
const Shoppage = () => {
    return (
        <>
            <div className={`${styles.center}`}>
                <Container>
                    <Row className={``}>
                        <Col className={``}>
                            <div className={`${styles.freight}`}>
                                <img alt='' src={img3} className={`${styles.freight__img}`} />
                                <h1 className={`${styles.freight__title}`}>Shop</h1>
                            </div>
                            <p className={`${styles.trauxit__desc}`}><span>TRAUXIT SHOP</span> is more than just a place to buy high-quality,basic black and white t-shirts. we're offering a way for <span>drivers</span> to connect with <span>our brand</span></p>
                            <div>
                                <div className={`${styles.trauxit__body}`}>
                                    <h1 className={`${styles.shop__title}`}>Better Details</h1>
                                    <p className={`${styles.shop__para} `}>designed to enhance drivers confort and convenience on the road.from apparel to accsessories</p>
                                </div>
                                <div className={`${styles.trauxit__body}`}>
                                    <h1 className={`${styles.shop__title}`}>Better Quality</h1>
                                    <p className={`${styles.shop__para} `}>our online store offers a range of high-quality items,including trauxit brand merchandise</p>
                                </div>
                                <div className={`${styles.trauxit__body}`}>
                                    <h1 className={`${styles.shop__title} ${styles.better}`}>Better Materials</h1>
                                    <p className={`${styles.shop__para} `}>each product is carefully curated to withstand the rigars of long journeys while representing the sprint of the trauxit community</p>
                                </div>
                            </div>
                            <button className="cta shopbtn">
                                <span>Learn More</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Col>
                        <Col className={`${styles.j}`}>
                            <img alt='' src={mobile} className={`${styles.mobile} ${styles.cashphone}`} />
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Shoppage
