import React from 'react'
import styles from '../../Styles/home.module.css'
import img4 from '../../assets/images/es.png'
const Esports = () => {
    return (
        <>
            <div className={`mt-5`}>
                <img alt='' src={img4} className={`${styles.freight__img} mb-3`} />
                <div className={`${styles.esports__body}`}>
                    <div className={`${styles.esports}`}>
                        <h1 className={`${styles.esports__title}`}>Esports</h1>
                        <p className={`${styles.esports__para}`}>COMING SOON</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Esports
