import { Link } from 'react-router-dom';
import style from '../styles/about.module.css';
import Navbar from '../components/Navbar';

import logoWarna from '../assets/logo-warna.svg';
import mainImage from '../assets/pages-images/about/hero-img.png';

import icon1 from '../assets/pages-images/about/about-icon1.png';
import icon2 from '../assets/pages-images/about/about-icon2.png';
import icon3 from '../assets/pages-images/about/about-icon3.png';

import profil1 from "../assets/profile-img/profile1.png"; 
import profil2 from "../assets/profile-img/profile2.png";
import profil3 from "../assets/profile-img/profile3.png";
import profil4 from "../assets/profile-img/profile4.png";
import profil5 from "../assets/profile-img/profile5.png";
import profil6 from "../assets/profile-img/profile6.png";
import profil7 from "../assets/profile-img/profile7.png";
import profil8 from "../assets/profile-img/profile8.png";
import profil9 from "../assets/profile-img/profile9.png";
import profil10 from "../assets/profile-img/profile10.png";
import profil11 from "../assets/profile-img/profile11.png";
import profil12 from "../assets/profile-img/profile12.png";

const teamMembers = [
    { id: 1, name: "Imam Solehudin", role: "MEDIA EXPERT / FOUNDER X-JAVACOM", img: profil1 },
    { id: 2, name: "Aris Wahyudi", role: "SUBJECT MATTER EXPERT", img: profil2 },
    { id: 3, name: "E.H. Ismail", role: "LEAD MEDIA EXPERT", img: profil3 },
    { id: 4, name: "Febry Nugroho", role: "SITE RELIABILITY ENGINEER", img: profil4 },
    { id: 5, name: "M. Ridwan", role: "PENETRATION TEST ENGINEER", img: profil5 },
    { id: 6, name: "Yusuf Asyari", role: "MEDIA EXPERT", img: profil6 },
    { id: 7, name: "Sahdan", role: "LEAD IOT ENGINEER", img: profil7 },
    { id: 8, name: "Ferry Angga", role: "HR & FINANCE MANAGER", img: profil8 },
    { id: 9, name: "Nurlaela", role: "ACCOUNT EXECUTIVE", img: profil9 },
    { id: 10, name: "Harun Maulana", role: "ACCOUNT EXECUTIVE", img: profil10 },
    { id: 11, name: "Surya Ari Arfandi", role: "FRONTEND ENGINEER", img: profil11 },
    { id: 12, name: "Dimas R.", role: "IT SUPPORT", img: profil12 },
];

export default function About() {
    return (
        <main className={style.container}>
            <Navbar />

            <div className={style.main1}>
                <h1>About Us</h1>
            </div>

            <div className={style.main2}>
                <div className={style.heroImgWrapper}>
                    <img src={mainImage} alt="" />
                </div>
                <div className={style.text}>
                    <img src={logoWarna} alt="" />
                    <p>
                        X-Javacom merupakan perusahaan yang bergerak di bidang konsultasi media dan IT. Ditunjang SDM yang ahli dan berpengalaman, X-Javacom telah dipercaya banyak klien. Mulai dari perusahaan swasta, NGO, hingga kementerian/lembaga. Puluhan project telah kami realisasikan: Press release media, media monitoring, digital listening, digital ads, web & apps development, POSM, dan banyak lainnya.
                    </p>
                </div>
            </div>

            <div className={style.main3}>
                <h2>Layanan Kami</h2>
                <h3>Melangkah Maju Bersama Tim Digital Terdepan</h3>
            </div>

            <div className={style.main4}>
                <div className={style.card}>
                    <img src={icon1} alt="" />
                    <h3>Tim Profesional</h3>
                    <p>Tim kami memiliki pengalaman bertahun-tahun di berbagai bidang dan memahami kebutuhan Anda.</p>
                </div>

                <div className={style.card}>
                    <img src={icon2} alt="" />
                    <h3>Kredibel</h3>
                    <p>XJavaCom memiliki reputasi yang baik sebagai perusahaan yang terpercaya dan dapat diandalkan.</p>
                </div>

                <div className={style.card}>
                    <img src={icon3} alt="" />
                    <h3>Visioner</h3>
                    <p>Kami memiliki visi yang jelas untuk masa depan dan selalu berusaha untuk mewujudkannya.</p>
                </div>
            </div>

            <div className={style.main5}>
                <h2>Tim Kami</h2>
                <h3>Para Tim Ahli Kami yang Telah Memiliki Banyak Pengalaman</h3>
            </div>

            <div className={style.teamGrid}>
                {teamMembers.map((member) => (
                    <div key={member.id} className={style.teamCard}>
                        <img src={member.img} alt="" />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>

            <div className={style.endContent}>
                <div className={style.content}>
                    <h1>Butuh bantuan untuk memulai?</h1>
                    <p>Kami akan membantu anda menemukan solusi <br/>sempurna untuk bisnis Anda.</p>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </main>
    );
}