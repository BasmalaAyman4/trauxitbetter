import React from 'react'
import styles from '../../Styles/footer.module.css'
import logo from '../../assets/images/Logo. 1.png'
import { Container } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
    return (
        <>
            <div className={`${styles.footer}`}>
                <Container>
                    <div className={`${styles.footer__logo}`}>
                        <img alt='' src={logo} className={`${styles.logo}`} />
                        <h1>TRAUXIT</h1>
                    </div>
                    <div className={`${styles.location}`}>
                        <p>HQ Address:27Suze canel road,Mansoura</p>
                        <p className={`${styles.usa}`}>USA Address:15377Staffordshire WayFishers,In 46037</p>
                        <p className={`${styles.factory}`}> Factory Address:121 Talkha road,Mansoura</p>
                    </div>
                    <div className={`${styles.connect}`}>
                        <p>Support@trauxit.com</p>
                        <p>Tel:+1 3175201206</p>
                    </div>
                    <div className={`${styles.copyright}`}>
                        <p>©2022 TRAUXIT LLC</p>
                        <div className={`${styles.links}`}>
                            <p>Cookies</p>
                            <p>Privacy</p>
                            <p>termsofuse</p>
                        </div>
                        <div>
                            <FacebookIcon />
                            <InstagramIcon />

                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Footer
