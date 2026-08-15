import { useState } from 'react';
import { Link } from 'react-router-dom'
import style from '../styles/article.module.css'
import Navbar from '../components/Navbar.jsx'


import media from '../assets/pages-images/artikel-media-and-web/hero-media.jpg'
import web from '../assets/pages-images/artikel-media-and-web/hero-web.jpg'

export default function Article() {
    const [selectedCategory, setSelectedCategory] = useState('semua');

    return (
        <main>

            <Navbar />

            <div className={style.article1}>            
                <h1>Artikel</h1>
            </div>

            <div className={style.article2}>
                <h2>Artikel Terbaru</h2>
                <select 
                    className={style.dropDown}
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}>
                        <option value="semua">Semua Portfolio</option>
                        <option value="media">Media</option>
                        <option value="it-web">IT & Web Service</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="posm">POSM</option>
                </select>
            </div>

            <div className={style.article3}>
                <div className={style.card}>
                    <img src={media} alt="" />
                    <ul>
                        <li><p><span>Ferry Angga</span></p></li>
                        <li><p>23 Jan 2025</p></li>
                        <li><Link to="/Article" className={style.link}>Media</Link></li>
                    </ul>

                    <div className={style.text}>
                        <h1>Untuk Apa Media? Ini Jenis dan Keuntungannya</h1>
                        <p>Media merupakan sarana atau alat yang digunakan untuk menyampaikan pesan atau informasi dalam kata lain bisa disebut sebagai sarana untuk</p>
                        <p><Link to="/ArticleMedia" className={style.card2Link}>Selengkapnya</Link></p>
                    </div>
                </div>

                <div className={style.card}>
                    <img src={web} alt="" />
                    <ul>
                        <li><p><span>Ferry Angga</span></p></li>
                        <li><p>23 Jan 2025</p></li>
                        <li><Link to="/Article" className={style.link}>IT & Web Service</Link></li>
                    </ul>

                    <div className={style.text}>
                        <h1>Jenis dan Keuntungan Penerapan Web Service dalam Bisnis Anda</h1>
                        <p>Web service adalah sebuah sistem yang memungkinkan komunikasi dan pertukaran data antar aplikasi yang berjalan di server yang berbeda melalui.</p>
                        <p><Link to="/ArticleWeb" className={style.card2Link}>Selengkapnya</Link></p>
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