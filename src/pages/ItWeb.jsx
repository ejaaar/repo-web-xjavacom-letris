import { useState } from 'react';
import { Link } from 'react-router-dom'
import style from '../styles/itWeb.module.css'
import Navbar from '../components/Navbar'

import heroImg from '../assets/pages-images/it-web-service/it-web-hero-pic.png'

import icon1 from '../assets/pages-images/it-web-service/it-web-icon1.png'
import icon2 from '../assets/pages-images/it-web-service/it-web-icon2.png'
import icon3 from '../assets/pages-images/it-web-service/it-web-icon3.png'
import icon4 from '../assets/pages-images/it-web-service/it-web-icon4.png'
import icon5 from '../assets/pages-images/it-web-service/it-web-icon5.png'
import icon6 from '../assets/pages-images/it-web-service/it-web-icon6.png'

export default function ItWeb() {
    return(
        <>
        <main>
            <Navbar/>

            <div className={style.main1}>
                <div className={style.text}>
                    <h1 className={style.h1}>IT & Web Service</h1>
                    <h2 className={style.h2}>Upgrade Produktivitas Bisnis Anda dengan Solusi IT & Web Service Terdepan</h2>
                    <p className={style.p}>XJavaCom adalah perusahaan konsultan IT terkemuka yang menawarkan berbagai solusi IT & Web Service untuk membantu Anda mencapai tujuan bisnis Anda.</p>
                </div>

                <div>
                    <img className={style.img} src={heroImg} alt="" />
                </div>
            </div>

            <div className={style.main2}>
                <h1 className={style.h1}>IT & Web Service</h1>
                <h2 className={style.h2}>Berikut Adalah Berbagai Layanan IT & Web Service yang Kami Sediakan</h2>
            </div>

            <div className={style.main3}>
                <div className={style.kolom}>
                    <div className={style.card}>
                        <img className={style.img} src={icon1} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Mobile Apps</h1>
                            <p className={style.p}>Kembangkan aplikasi mobile yang inovatif dan user-friendly untuk meningkatkan engagement pelanggan, mengoptimalkan proses bisnis, dan memperluas jangkauan pasar Anda.</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img className={style.img} src={icon2} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Website</h1>
                            <p className={style.p}>Bangun website yang profesional dan menarik untuk meningkatkan brand awareness, menjangkau pelanggan baru, dan meningkatkan penjualan.</p>
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
                            <h1 className={style.h1}>Web Apps Development</h1>
                            <p className={style.p}>Kembangkan aplikasi web yang canggih dan scalable untuk meningkatkan produktivitas dan kolaborasi tim Anda.</p>
                        </div>
                    </div>
                </div>

                <div className={style.kolom}>
                    <div className={style.card}>
                        <img className={style.img} src={icon5} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Payment Gateway</h1>
                            <p className={style.p}>Tawarkan solusi pembayaran yang aman dan terpercaya untuk meningkatkan kenyamanan pelanggan dan meningkatkan konversi penjualan.</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img className={style.img} src={icon6} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Custom Software</h1>
                            <p className={style.p}>Dapatkan solusi software yang dipersonalisasi untuk memenuhi kebutuhan dan persyaratan unik bisnis Anda.</p>
                        </div>
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
        </>
    )
}