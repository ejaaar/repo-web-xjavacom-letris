import style from '../styles/contact.module.css';
import Navbar from '../components/Navbar.jsx';

import service from '../assets/pages-images/contact/contact-service-icon.svg';
import kantor from '../assets/pages-images/contact/contact-kantor-icon.svg';
import mainImage from '../assets/pages-images/contact/contact-img.png';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main className={style.container}>
            <Navbar />
            
            <div className={style.main1}>
                <div className={style.text}>
                    <h1>Tetap Terhubung dengan Para Tim Profesional Kami</h1>
                    <p className={style.subtext}>
                        X-Javacom merupakan perusahaan yang bergerak di bidang konsultasi media dan IT. Ditunjang SDM yang ahli dan berpengalaman, X-Javacom telah dipercaya banyak klien. Mulai dari perusahaan swasta, NGO, hingga kementerian/lembaga. Puluhan project telah kami realisasikan. Press release media, media monitoring, digital listening, digital ads, web&apps development, POSM, dan banyak lainnya.
                    </p>

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
                <form onSubmit={handleSubmit} className={style.form}>
                    <label htmlFor="nama" className={style.label}>Nama Lengkap</label>
                    <input id="nama" type="text" placeholder="Name" required />

                    <label htmlFor="email" className={style.label}>Email</label>
                    <input id="email" type="email" placeholder="example@gmail.com" required />

                    <label htmlFor="phone" className={style.label}>No. Handphone</label>
                    <input id="phone" type="tel" placeholder="+62..." required />

                    <label htmlFor="pesan" className={style.label}>Pesan</label>
                    <textarea id="pesan" placeholder="Tuliskan pesan anda" className={style.pesan} required />

                    <button type="submit" className={style.btn}>Kirim Pesan</button>
                </form>
            </div>
        </main>
    );
}