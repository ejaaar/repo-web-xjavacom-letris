import { Link } from 'react-router-dom'
import style from './contact.module.css'
import Navbar from '../components/Navbar.jsx'


import service from '../icons/contact-service-icon.svg'
import kantor from '../icons/contact-kantor-icon.svg'
import mainImage from '../assets/contact-img.png'

export default function Contact(){
    return (
        <main>
            <Navbar />
            
            <div className={style.main1}>
                <div className={style.text}>
                    <h1>Tetap Terhubung dengan Para Tim Profesional Kami</h1>
                    <h2>X-Javacom merupakan perusahaan yang bergerak di bidang konsultasi media dan IT. Ditunjang SDM yang ahli dan berpengalaman, X-Javacom telah dipercaya banyak klien. Mulai dari perusahaan swasta, NGO, hingga kementerian/lembaga Puluhan project telah kami realisasikan. Press release media, media monitoring, digital listening, digital ads, web&apps development, POSM, dan banyak lainnya.</h2>

                    <div className={style.card}>
                        <img src={service} alt="" />
                        <div className={style.textCard}>
                            <h3>Service Tersedia :</h3> 
                            <p>Senin - Jumat: 10am - 5pm</p>
                            <p>Sabtu: 10am - 4pm</p>
                        </div>
                    </div>

                    <div className={style.card}>
                        <img src={kantor} alt="" />
                        <div className={style.textCard}>
                            <h3>Kantor Kami :</h3> 
                            <p>Graha Madani Center,<br /> Sawangan Kota Depok,<br /> Jawa Barat</p>
                        </div>
                    </div>
                </div>

                <div className={style.image}>
                    <img src={mainImage} alt="" />
                </div>
            </div>

            <div className={style.main2}>
                <h1>Kami Akan Senang dapat Terhubung dengan Anda</h1>
                <h2>Nama Lengkap</h2>
                <input type="text" placeholder="Name"/>

                <h2>Email</h2>
                <input type="text" placeholder="example@gmail.com"/>

                <h2>No. Handphone</h2>
                <input type="text" placeholder="+62..."/>

                <h2>Pesan</h2>
                <input type="text" placeholder="Tuliskan pesan anda" className={style.pesan}/>
            </div>
        </main>
    )
}