import { useState } from 'react';
import { Link } from 'react-router-dom'
import style from './about.module.css'
import Navbar from '../components/Navbar.jsx'

import logoWarna from '../assets/logo-warna.svg'
import mainImage from '../assets/about-main1.png' 
import icon1 from '../icons/about-icon1.png'
import icon2 from '../icons/about-icon2.png'
import icon3 from '../icons/about-icon3.png'

import profil1 from "../profile-img/profile1.png"
import profil2 from "../profile-img/profile2.png"
import profil3 from "../profile-img/profile3.png"
import profil4 from "../profile-img/profile4.png"
import profil5 from "../profile-img/profile5.png"
import profil6 from "../profile-img/profile6.png"
import profil7 from "../profile-img/profile7.png"
import profil8 from "../profile-img/profile8.png"
import profil9 from "../profile-img/profile9.png"
import profil10 from "../profile-img/profile10.png"
import profil11 from "../profile-img/profile11.png"
import profil12 from "../profile-img/profile12.png"


export default function About(){
    return(
        <main>

            <Navbar />

            <div className={style.main1}>
                <h1>About Us</h1>
            </div>

            <div className={style.main2}>
                <img src={mainImage} alt="" />
                <div className={style.text}>
                    <img src={logoWarna} alt="" />
                    <p>X-Javacom merupakan perusahaan yang bergerak di bidang konsultasi media dan IT. Ditunjang SDM yang ahli dan berpengalaman, X-Javacom telah dipercaya banyak klien. Mulai dari perusahaan swasta, NGO, hingga kementerian/lembaga Puluhan project telah kami realisasikan. Press release media, media monitoring, digital listening, digital ads, web&apps development, POSM, dan banyak lainnya.</p>
                </div>
            </div>

            <div className={style.main3}>
                <h1>Layanan Kami</h1>
                <h2>Melangkah Maju Bersama Tim Digital Terdepan</h2>
            </div>

            <div className={style.main4}>
                <div className={style.card}>
                    <img src={icon1} alt="" />
                    <h1>Tim Profesional</h1>
                    <p>Tim kami memiliki pengalaman bertahun-tahun di berbagai bidang dan memahami kebutuhan Anda.</p>
                </div>

                <div className={style.card}>
                    <img src={icon2} alt="" />
                    <h1>Kredibel</h1>
                    <p>XJavaCom memiliki reputasi yang baik sebagai perusahaan yang terpercaya dan dapat diandalkan.</p>
                </div>

                <div className={style.card}>
                    <img src={icon3} alt="" />
                    <h1>Visioner</h1>
                    <p>Kami memiliki visi yang jelas untuk masa depan dan selalu berusaha untuk mewujudkannya.</p>
                </div>
            </div>

            <div className={style.main5}>
                <h1>Tim Kami</h1>
                <h2>Para Tim Ahli Kami yang Telah Memiliki Banyak Pengalaman</h2>
            </div>



            <div className={style.main6}>
                <div className={style.kolom}>
                    <div className={style.card}>
                        <img src={profil1} alt="" />
                        <h1>Imam Solehudin</h1>
                        <p>MEDIA EXPERT <br />FOUNDER X-JAVACOM</p>
                    </div>
                    
                    <div className={style.card}>
                        <img src={profil2} alt="" />
                        <h1>Aris Wahyudi</h1>
                        <p>SUBJECT MATTER EXPERT</p>
                    </div>

                    <div className={style.card}>
                        <img src={profil3} alt="" />
                        <h1>E.H. Ismail</h1>
                        <p>LEAD MEDIA EXPERT</p>
                    </div>

                    <div className={style.card}>
                        <img src={profil4} alt="" />
                        <h1>Febry Nugroho</h1>
                        <p>SITE RELIABILITY ENGINEER</p>
                    </div>
                </div>
                
                <div className={style.kolom}>
                    <div className={style.card}>
                        <img src={profil5} alt="" />
                        <h1>M. Ridwan</h1>
                        <p>PENETRATION TEST ENGINEER</p>
                    </div>
                    
                    <div className={style.card}>
                        <img src={profil6} alt="" />
                        <h1>Yusuf Asyari</h1>
                        <p>MEDIA EXPERT</p>
                    </div>

                    <div className={style.card}>
                        <img src={profil7} alt="" />
                        <h1>Sahdan</h1>
                        <p>LEAD IOT ENGINEER</p>
                    </div>

                    <div className={style.card}>
                        <img src={profil8} alt="" />
                        <h1>Ferry Angga</h1>
                        <p>HR & FINANCE MANAGER</p>
                    </div>
                </div>

                <div className={style.kolom}>
                    <div className={style.card}>
                        <img src={profil9} alt="" />
                        <h1>Nurlaela</h1>
                        <p>ACCOUNT EXECUTIVE</p>
                    </div>
                    
                    <div className={style.card}>
                        <img src={profil10} alt="" />
                        <h1>Harun Maulana</h1>
                        <p>ACCOUNT EXECUTIVE</p>
                    </div>

                    <div className={style.card}>
                        <img src={profil11} alt="" />
                        <h1>Surya Ari Arfandi</h1>
                        <p>FRONTEND ENGINEER</p>
                    </div>

                    <div className={style.card}>
                        <img src={profil12} alt="" />
                        <h1>Dimas R.</h1>
                        <p>IT SUPPORT</p>
                    </div>
                </div>
            </div>


            <div className={style.endContent}>
                <div className={style.content}>
                    <h1>Butuh bantuan untuk memulai?</h1>
                    <p>Kami akan membantu anda menemukan solusi <br/>sempurna untuk bisnis Anda.</p>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </main>
    )
} 