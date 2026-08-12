import { useState } from 'react';
import { Link } from 'react-router-dom'
import style from './media.module.css'
import Navbar from '../components/Navbar.jsx'

import mediaPic from '../assets/media-phone.png'
import icon1 from "../icons/media-icon1.png"
import icon2 from "../icons/media-icon2.png"
import icon3 from "../icons/media-icon3.png"
import icon4 from "../icons/media-icon4.png"
import icon5 from "../icons/media-icon5.png"
import icon6 from "../icons/media-icon6.png"

export default function Media() {
    return (
        <>
        <main>
            <Navbar/>

            <div className={style.main1}>
                <div className={style.text}>
                    <h1 className={style.h1}>Media</h1>
                    <h2 className={style.h2}>Tingkatkan Jangkauan dan Pengaruh Anda dengan Solusi Media Komprehensif</h2>
                    <p className={style.p}>Perkuat strategi komunikasi Anda dengan solusi media yang dirancang untuk membantu Anda mencapai target audiens dan memaksimalkan dampak pesan Anda.</p>
                    <p className={style.p}>XJavaCom adalah perusahaan konsultan media terkemuka yang menawarkan berbagai layanan media untuk membantu Anda mencapai tujuan bisnis Anda.</p>
                </div>

                <div >
                    <img className={style.img} src={mediaPic} alt="" />
                </div>
            </div>

            <div className={style.main2}>
                <h1 className={style.h1}>Media</h1>
                <h2 className={style.h2}>Berikut Adalah Berbagai Layanan Media yang Kami Sediakan</h2>
            </div>

            <div className={style.main3}>
                <div className={style.kolom}>
                    <div className={style.card}>
                        <img className={style.img} src={icon1} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Media Placement</h1>
                            <p className={style.p}>Dapatkan publisitas maksimal untuk peluncuran produk, pengumuman penting, dan acara lainnya melalui penempatan media yang strategis di media ternama seperti TV, radio, surat kabar, majalah, dan media online.</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img className={style.img} src={icon2} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Press Conference</h1>
                            <p className={style.p}>Gelar konferensi pers yang efektif untuk menarik perhatian media dan menyebarkan pesan Anda kepada audiens yang lebih luas.</p>
                        </div>
                    </div>
                </div>

                <div className={style.kolom}>
                    <div className={style.card}>
                        <img className={style.img} src={icon3} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Training & Workshop Media</h1>
                            <p className={style.p}>Tingkatkan keterampilan tim Anda dalam menjalin hubungan dengan media, memanfaatkan media sosial, dan menangani situasi krisis melalui pelatihan dan workshop yang interaktif.</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img className={style.img} src={icon4} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Media Monitoring & Analisis</h1>
                            <p className={style.p}>Pantau liputan media Anda secara real-time, dapatkan analisis mendalam tentang sentiment dan jangkauan, serta lacak performa media sosial Anda untuk memahami lanskap media dan membuat keputusan yang lebih baik.</p>
                        </div>
                    </div>
                </div>

                <div className={style.kolom}>
                    <div className={style.card}>
                        <img className={style.img} src={icon5} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Komunikasi Krisis & Counter Opinion Advertising</h1>
                            <p className={style.p}>Tanggapi situasi krisis dengan cepat dan efektif untuk meminimalkan kerusakan reputasi, dan tanggapi opini negatif dengan iklan yang ditargetkan dan pesan yang kuat.</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img className={style.img} src={icon6} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Advertising (TV, Online, Cetak)</h1>
                            <p className={style.p}>Jalankan kampanye iklan yang efektif di berbagai platform media seperti TV, online, dan cetak untuk menjangkau target audiens Anda dan meningkatkan brand awareness.</p>
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