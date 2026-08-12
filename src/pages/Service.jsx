import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './service.module.css'
import Navbar from '../components/Navbar.jsx'

import serviceImg from '../assets/service-main.png'
import icon1 from '../icons/service-icon1.png'
import icon2 from '../icons/service-icon2.png'
import icon3 from '../icons/service-icon3.png'
import icon4 from '../icons/service-icon4.png'

export default function Service(){
    return(
        <main>
            <Navbar />

            <div className={style.main1}>
                <h1>Service</h1>
            </div>

            <div className={style.main2}>
                <img src={serviceImg} alt="" />
                
                <div className={style.textMain2}>
                    <h2>Layanan Kami</h2>
                    <h1>Melangkah Maju Bersama Tim Digital Terdepan</h1>
                    <p>X-Javacom merupakan perusahaan yang bergerak di bidang konsultasi media dan IT. Ditunjang SDM yang ahli dan berpengalaman, X-Javacom telah dipercaya banyak klien. Mulai dari perusahaan swasta, NGO, hingga kementerian/lembaga Puluhan project telah kami realisasikan. Press release media, media monitoring, digital listening, digital ads, web&apps development, POSM, dan banyak lainnya.</p>
                </div>
            </div>

            <div className={style.main3}>
                <div className={style.textMain3}>
                    <h1>Layanan Kami</h1>
                    <h2>Solusi Digital Terlengkap untuk Kebutuhan Bisnis Anda di Era Digital</h2>
                </div>
            </div>

            <div className={style.main4}>
                <div className={style.card1}>
                    <img src={icon1} alt="" />
                    <ul>
                        <li><h1>Media</h1></li>
                        <li><p>Perkuat strategi komunikasi Anda dengan solusi media yang dirancang untuk membantu Anda mencapai target audiens dan memaksimalkan dampak pesan Anda. XJavaCom adalah perusahaan konsultan media terkemuka yang menawarkan berbagai layanan media untuk membantu Anda mencapai tujuan bisnis Anda.</p></li>
                        <li><Link to="/Media" className={style.link}>Pelajari Lebih Lanjut</Link></li>
                    </ul>
                </div>

                <div className={style.card1}>
                    <img src={icon2} alt="" />
                    <ul>
                        <li><h1>IT & Web Service</h1></li>
                        <li><p>XJavaCom adalah perusahaan konsultan IT terkemuka yang menawarkan berbagai solusi IT & Web Service untuk membantu Anda mencapai tujuan bisnis Anda.</p></li>
                        <li><Link to="/ItWeb" className={style.link}>Pelajari Lebih Lanjut</Link></li>
                    </ul>
                </div>
            </div>

            <div className={style.main4}>
                <div className={style.card1}>
                    <img src={icon3} alt="" />
                    <ul>
                        <li><h1>Digital Marketing</h1></li>
                        <li><p>Raih Pelanggan Potensial Anda Solusi Digital Marketing Terdepan. Di era digital ini, strategi digital marketing yang efektif adalah kunci untuk mencapai target audiens Anda, meningkatkan brand awareness, dan mendorong pertumbuhan bisnis Anda.</p></li>
                        <li><Link to="/DigitalMarketing" className={style.link}>Pelajari Lebih Lanjut</Link></li>
                    </ul>
                </div>

                <div className={style.card1}>
                    <img src={icon4} alt="" />
                    <ul>
                        <li><h1>POSM</h1></li>
                        <li><p>Point of Sale Material (POSM) adalah alat yang ampuh untuk menarik perhatian pelanggan di tempat penjualan dan meningkatkan brand awareness. XJavaCom menawarkan berbagai layanan POSM untuk membantu Anda mencapai tujuan bisnis Anda.</p></li>
                        <li><Link to="/Posm" className={style.link}>Pelajari Lebih Lanjut</Link></li>
                    </ul>
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