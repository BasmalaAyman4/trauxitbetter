import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../Styles/home.module.css'
import img1 from '../../assets/images/APP.png'
import mobile from '../../assets/images/موكب 3.png'
const Apppage = () => {
    return (
        <>
            <div className={`${styles.center}`}>
                <Container>
                    <Row className={`${styles.r}`}>
                        <Col className={`${styles.j}`}>
                            <div className={`${styles.freight}`}>
                                <img alt='' src={img1} className={`${styles.freight__img}`} />
                                <h1 className={`${styles.freight__title}`}>App</h1>
                            </div>
                            <p className={`${styles.freight__para}`}>W E’RE <span>CHANGING</span> THE WAY THE <span>WORLD</span> THINKS ABOUT <span>FREIGHT</span></p>
                            <div>
                                <div className={`${styles.trauxit__body}`}>
                                    <h1 className={`${styles.trauxit__title}`}>logistics solution :</h1>
                                    <p className={`${styles.trauxit__para}`}>aimed at transforming the shipping landscape</p>
                                </div>
                                <div className={`${styles.trauxit__body}`}>
                                    <h1 className={`${styles.trauxit__title} ${styles.right} `}>trauxit for more :</h1>
                                    <p className={`${styles.trauxit__para}`}>shipping reduce cost by 75%</p>
                                </div>
                                <div className={`${styles.trauxit__body}`}>
                                    <h1 className={`${styles.trauxit__title} ${styles.rightt}`}>trauxit for less :</h1>
                                    <p className={`${styles.trauxit__para}`}>carriers increase revenue by 75%</p>
                                </div>
                            </div>
                            <button class="cta">
                                <span>Learn More</span>
                                <svg viewBox="0 0 13 10" height="10px" width="15px">
                                    <path d="M1,5 L11,5"></path>
                                    <polyline points="8 1 12 5 8 9"></polyline>
                                </svg>
                            </button>
                        </Col>
                        <Col className={`${styles.j}`}>
                            <img alt='' src={mobile} className={`${styles.mobile}`} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Apppage
