import { useState } from 'react';
import { Link } from 'react-router-dom'
import style from '../styles/fif.module.css'
import Navbar from '../components/Navbar'

import mainImg from "../assets/pages-images/google-fif/card-fif.png"

import icon1 from "../assets/pages-images/google-fif/icon-user.png"
import icon2 from "../assets/pages-images/google-fif/icon-briefcase.png"
import icon3 from "../assets/pages-images/google-fif/icon-pen-tool.png"

export default function Google() {
    return (
        <>
            <Navbar />

            <div className={style.main1}>
                <Link to="/Google" className={style.h1}>Google</Link>
            </div>

            <div className={style.main2}>
                <div className={style.kolom}>
                    <div className={style.card}>
                        <img className={style.img} src={icon1} alt="" />

                        <div className={style.text}>
                            <h1 className={style.h1}>Client :</h1>
                            <h2 className={style.h2}>Google</h2>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img className={style.img} src={icon2} alt="" />

                        <div className={style.text}>
                            <h1 className={style.h1}>Service :</h1>
                            <h2 className={style.h2}>Web Development</h2>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img className={style.img} src={icon3} alt="" />

                        <div className={style.text}>
                            <h1 className={style.h1}>Project :</h1>
                            <Link to="/study-case" className={`${style.h2} ${style.link}`}>IT & Web Service</Link>
                        </div>
                    </div>
                </div>

                <p>Hai Aku di disini</p>
            </div>

            <div className={style.main3}>
                <img className={style.img} src={mainImg} alt="" />
            </div>

            <div className={style.endContent}>
                <div className={style.content}>
                    <h1>Butuh bantuan untuk memulai?</h1>
                    <p>Kami akan membantu anda menemukan solusi <br/>sempurna untuk bisnis Anda.</p>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </>
        
    )
}