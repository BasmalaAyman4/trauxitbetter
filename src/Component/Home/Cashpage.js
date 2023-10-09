import React from 'react'
import img2 from '../../assets/images/CASH (2).png'
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../Styles/home.module.css';
import mobile from '../../assets/images/موكب 3.png'
const Cashpage = () => {
    return (
        <>
            <div className={`${styles.center}`}>
                <Container>
                    <Row className={``}>
                        <Col className={``}>
                            <div className={`${styles.freight}`}>
                                <img alt='' src={img2} className={`${styles.freight__img}`} />
                                <h1 className={`${styles.freight__title}`}>Cash</h1>
                            </div>
                            <p className={`${styles.trauxit__desc}`}><span>TRAUXIT CASH</span> is a cutting-edge online payment platform designed by trauxit llc</p>
                            <div>
                                <div className={`${styles.trauxit__body}`}>
                                    <h1 className={`${styles.cash__title}`}>Secure</h1>
                                    <p className={`${styles.cash__para}`}>it offers secure and speedy financial transections</p>
                                </div>
                                <div className={`${styles.trauxit__body}`}>
                                    <h1 className={`${styles.cash__title} ${styles.easy}`}>Easy to use</h1>
                                    <p className={`${styles.cash__para}`}>Trauxit cash boasts an exceptional level of user-friendliness in it’s design and functionality it’s intuitive interface ensures effortless navigation for users of all levels of tech-savviness</p>
                                </div>
                                <div className={`${styles.trauxit__body}`}>
                                    <h1 className={`${styles.cash__title} ${styles.connect}`}>Connected To Everything</h1>
                                    <p className={`${styles.cash__para} `}>Integrated into the trauxit ecosystem , this platform enhances efficiency , cash flow management , ND trust among stakeholders</p>
                                </div>
                            </div>
                            <button className="cta cashbtn">
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

export default Cashpage
