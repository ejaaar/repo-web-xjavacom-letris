import { useState } from 'react';
import { Link } from 'react-router-dom'
import style from '../styles/posm.module.css'
import Navbar from '../components/Navbar'

import heroImg from '../assets/pages-images/POSM/card-posm.png'
import icon1 from '../assets/pages-images/POSM/icon-vidio-promosi.png'
import icon2 from '../assets/pages-images/POSM/icon-booth.png'
import icon3 from '../assets/pages-images/POSM/icon-stande.png'
import icon4 from '../assets/pages-images/POSM/icon-desain.png'


export default function ItWeb() {
    return(
        <>
        <main>
            <Navbar/>

            <div className={style.main1}>
                <div className={style.text}>
                    <h1 className={style.h1}>POSM</h1>
                    <h2 className={style.h2}>Tingkatkan Brand Awareness dengan Solusi POSM yang Menarik</h2>
                    <p className={style.p}>Point of Sale Material (POSM) adalah alat yang ampuh untuk menarik perhatian pelanggan di tempat penjualan dan meningkatkan brand awareness. XJavaCom menawarkan berbagai layanan POSM untuk membantu Anda mencapai tujuan bisnis Anda.</p>
                </div>

                <div>
                    <img className={style.img} src={heroImg} alt="" />
                </div>
            </div>

            <div className={style.main2}>
                <h1 className={style.h1}>POSM</h1>
                <h2 className={style.h2}>Berikut Adalah Berbagai Layanan POSM yang Kami Sediakan</h2>
            </div>

            <div className={style.main3}>
                <div className={style.kolom}>
                    <div className={style.card}>
                        <img className={style.img} src={icon1} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Video Promosi & Compro</h1>
                            <p className={style.p}>Buat video promosi yang menarik dan informatif untuk meningkatkan brand awareness dan mendorong penjualan. Gunakan Compro untuk menampilkan konten promosi yang dinamis di layar digital di toko Anda.</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img className={style.img} src={icon2} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Booth, Poster, Kalender, Logo</h1>
                            <p className={style.p}>Dapatkan booth yang dirancang dengan menarik untuk acara pameran, dan ciptakan poster, kalender, dan logo yang profesional untuk meningkatkan brand awareness.</p>
                        </div>
                    </div>
                </div>

                <div className={style.kolom}>
                    <div className={style.card}>
                        <img className={style.img} src={icon3} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Standee, Danglers, dll</h1>
                            <p className={style.p}>Gunakan standee dan danglers yang menarik untuk menarik perhatian pelanggan di toko Anda.</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img className={style.img} src={icon4} alt="" />
                        <div className={style.text}>
                            <h1 className={style.h1}>Desain 2D/3D</h1>
                            <p className={style.p}>Tim desainer kami yang berpengalaman dapat membantu Anda membuat desain 2D/3D yang kreatif dan menarik untuk semua kebutuhan POSM Anda.</p>
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