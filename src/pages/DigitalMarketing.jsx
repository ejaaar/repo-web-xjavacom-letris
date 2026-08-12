import { useState } from 'react';
import { Link } from 'react-router-dom'
import style from '../styles/digitalMarketing.module.css'
import Navbar from '../components/Navbar'

import heroImg from "../assets/images/digital-marketing/card-digital-marketing.png"
import icon1 from "../assets/images/digital-marketing/icon-digital-ads.png"
import icon2 from "../assets/images/digital-marketing/icon-sosmed-management.png"
import icon3 from "../assets/images/digital-marketing/icon-sosmed-monitoring.png"
import icon4 from "../assets/images/digital-marketing/icon-trending.png"


export default function ItWeb() {
    return(
        <>
        <main>
            <Navbar/>

            <div className={style.main1}>
                <div className={style.text}>
                    <h1 className={style.h1}>Digital Marketing</h1>
                    <h2 className={style.h2}>Raih Pelanggan Potensial <br />Anda Solusi Digital Marketing Terdepan</h2>
                    <p className={style.p}>Di era digital ini, strategi digital marketing yang efektif adalah kunci untuk mencapai target audiens Anda, meningkatkan brand awareness, dan mendorong pertumbuhan bisnis Anda.</p>
                </div>

                <div>
                    <img className={style.img} src={heroImg} alt="" />
                </div>
            </div>

            <div className={style.main2}>
                <h1 className={style.h1}>Digital Marketing</h1>
                <h2 className={style.h2}>Berikut Adalah Berbagai Layanan Digital Marketing yang Kami Sediakan</h2>
            </div>

            <div className={style.main3}>
                <div className={style.kolom}>
                    <div className={style.card}>
                        <img className={style.img} src={icon1} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Digital Ads</h1>
                            <p className={style.p}>Jalankan kampanye iklan digital yang efektif di berbagai platform seperti Google Ads, Facebook Ads, Instagram Ads, dan YouTube Ads untuk menjangkau target audiens Anda dan meningkatkan konversi.</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img className={style.img} src={icon2} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Social Media Management</h1>
                            <p className={style.p}>Kelola akun media sosial Anda secara profesional dan efektif untuk meningkatkan engagement, membangun brand awareness, dan mendorong traffic ke website Anda.</p>
                        </div>
                    </div>
                </div>

                <div className={style.kolom}>
                    <div className={style.card}>
                        <img className={style.img} src={icon3} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>ERP/Internal Tools Dev</h1>
                            <p className={style.p}>Optimalkan alur kerja dan tingkatkan efisiensi bisnis Anda dengan solusi ERP dan internal tools yang dipersonalisasi.</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img className={style.img} src={icon4} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Trending Topic/Influencer/Buzzer/KOL</h1>
                            <p className={style.p}>Manfaatkan trending topic, jalin kerjasama dengan influencer yang tepat, dan libatkan buzzer/KOL untuk meningkatkan jangkauan dan engagement brand Anda.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.endContent}>
                <div className={style.content}>
                    <h1>Butuh bantuan untuk memulai?</h1>
                    <p>Kami akan membantu anda menemukan solusi sempurna untuk bisnis Anda.</p>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </main>
        </>
    )
}