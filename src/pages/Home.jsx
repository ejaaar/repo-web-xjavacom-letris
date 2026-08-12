import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './home.module.css';
import Navbar2 from '../components/Navbar2.jsx';

import heroPic from '../assets/images/home/banner-home.png';
import cardPic from '../assets/images/home/home-card.png';
import icon1 from '../assets/images/home/icons/icon-media.png';
import icon2 from '../assets/images/home/icons/icon-it-web.png';
import icon3 from '../assets/images/home/icons/icon-digital-marketing.png';
import icon4 from '../assets/images/home/icons/icon-posm.png';
import iconCheck from '../assets/images/home/icons/icon-check.png'

import media from "../assets/images/home/card-media.jpg"
import web from "../assets/images/home/card-it-web-service.jpg"

import sponsor1 from '../assets/images/home/sponsor/fifgroup.png'
import sponsor2 from '../assets/images/home/sponsor/pertamina.png'
import sponsor3 from '../assets/images/home/sponsor/alva.png'
import sponsor4 from '../assets/images/home/sponsor/yellow.png'
import sponsor5 from '../assets/images/home/sponsor/tutwuri.png'
import sponsor6 from '../assets/images/home/sponsor/bawaslu.png'
import sponsor7 from '../assets/images/home/sponsor/kominfo.png'
import sponsor8 from '../assets/images/home/sponsor/blibli.png'
import sponsor9 from '../assets/images/home/sponsor/huawei.png'
import sponsor10 from '../assets/images/home/sponsor/cmsmart.png'
import sponsor11 from '../assets/images/home/sponsor/kelautan.png'
import sponsor12 from '../assets/images/home/sponsor/teroris.png'
import sponsor13 from '../assets/images/home/sponsor/bpom.png'
import sponsor14 from '../assets/images/home/sponsor/satya.png'
import sponsor15 from '../assets/images/home/sponsor/bmhs.png'
import sponsor16 from '../assets/images/home/sponsor/sentul-city.png'
import sponsor17 from '../assets/images/home/sponsor/eurom.png'


export default function Home() {
    return (
        <>
            <Navbar2 />

            <main className={style.mainContainer}>
                <div className={style.main1}>
                    <h1>Kami menyediakan layanan Terkait media, media sosial dan IT</h1>
                    <p>Tim kami merupakan orang-orang profesional di bidangnya, dengan latar belakang sebagai jurnalis/editor senior, programmer, serta digital marketer.</p>

                    <div className={style.button}>
                        <button className={`${style.btn} ${style.btn1}`}>
                            Service
                        </button>

                        <button className={`${style.btn} ${style.btn2}`}>
                            Contact
                        </button>
                    </div>
                </div>

                <div className={style.main2}>
                    <h1 className={style.h1}>Layanan Kami</h1>
                    <h2 className={style.h2}>Solusi Digital Terlengkap untuk Kebutuhan Bisnis Anda di Era Digital</h2>
                </div>
                
                <div className={style.main3}>
                    <div className={style.card}>
                        <img src={icon1} alt="" className={style.img}/>
                        <h1 className={style.h1}>Media</h1>
                        <p className={style.p}>Perkuat strategi komunikasi Anda dengan solusi media yang dirancang untuk membantu Anda mencapai target audiens dan memaksimalkan dampak pesan Anda.</p>
                        <Link to="/Media" className={style.link}>Selengkapnya</Link>
                    </div>

                    <div className={style.card}>
                        <img src={icon2} alt="" className={style.img}/>
                        <h1 className={style.h1}>IT & Web Service</h1>
                        <p className={style.p}>XJavaCom adalah perusahaan konsultan IT terkemuka yang menawarkan berbagai solusi IT & Web Service untuk membantu Anda mencapai tujuan bisnis Anda.</p>
                        <Link to="/ItWeb" className={style.link}>Selengkapnya</Link>
                    </div>

                    <div className={style.card}>
                        <img src={icon3} alt="" className={style.img}/>
                        <h1 className={style.h1}>Digital Marketing</h1>
                        <p className={style.p}>Raih Pelanggan Potensial Anda Solusi Digital Marketing Terdepan. Di era digital ini, strategi digital marketing yang efektif.</p>
                        <Link to="/DigitalMarketing" className={style.link}>Selengkapnya</Link>
                    </div>

                    <div className={style.card}>
                        <img src={icon4} alt="" className={style.img}/>
                        <h1 className={style.h1}>POSM</h1>
                        <p className={style.p}>Perkuat strategi komunikasi Anda dengan solusi media yang dirancang untuk membantu Anda mencapai target audiens dan memaksimalkan dampak pesan Anda.</p>
                        <Link to="/Posm"     className={style.link}>Selengkapnya</Link>
                    </div>
                </div>

                <div className={style.main4}>
                    <img src={cardPic} alt="" className={style.img}/>

                    <div className={style.text}>
                        <h1>Layanan Kami</h1>
                        <h2>Melangkah Maju Bersama Tim Digital Terdepan</h2>
                        <ul>
                            <li>
                                <img src={iconCheck} alt="" />
                                <p>Tim Profesional</p>
                            </li>
                            <li>
                                <img src={iconCheck} alt="" />
                                <p>Kredibel</p>
                            </li>
                            <li>
                                <img src={iconCheck} alt="" />
                                <p>Visioner</p>
                            </li>
                        </ul>
                        
                        <Link className={style.link} to='about'>About Us</Link>
                    </div>
                </div>

                <div className={style.main5}>
                    <h1>Artikel</h1>
                    <h2>Artikel Terbaru dari kami</h2>
                </div>

                <div className={style.main6}>
                    <div className={style.card}>
                        <div className={style.cardPic}>
                            <img src={media} alt="" />
                            <ul>
                                <li><p><span>Ferry Angga</span></p></li>
                                <li><p>23 Jan 2025</p></li>
                                <li><Link className={style.link}>Media</Link></li>
                            </ul>
                        </div>
                        <div className={style.cardText}>
                            <h1>Untuk Apa Media? Ini Jenis dan Keuntungannya</h1>
                            <p>Media merupakan sarana atau alat yang digunakan untuk menyampaikan pesan atau informasi dalam kata lain bisa disebut sebagai sarana untuk</p>
                            <Link className={style.cardLink}>Selengkapnya</Link>
                        </div>
                    </div>

                    <div className={style.card}>
                        <div className={style.cardPic}>
                            <img src={web} alt="" />
                            <ul>
                                <li><p><span>Ferry Angga</span></p></li>
                                <li><p>23 Jan 2025</p></li>
                                <li><Link className={style.link}>IT & Web Service</Link></li>
                            </ul>
                        </div>
                        <div className={style.cardText}>
                            <h1>Jenis dan Keuntungan Penerapan Web Service dalam Bisnis Anda</h1>
                            <p>Web service adalah sebuah sistem yang memungkinkan komunikasi dan pertukaran data antar aplikasi yang berjalan di server yang berbeda melalui</p>
                            <Link className={style.cardLink}>Selengkapnya</Link>
                        </div>
                    </div>
                </div>

                <div className={style.main7}>
                    <div className={style.kolom}>
                        <img src={sponsor1} alt="" className={style.img11}/>
                        <img src={sponsor2} alt="" className={style.img12}/>
                        <img src={sponsor3} alt="" className={style.img13}/>
                        <img src={sponsor4} alt="" className={style.img14}/>
                        <img src={sponsor5} alt="" className={style.img15}/>
                        <img src={sponsor6} alt="" className={style.img16}/>
                    </div>

                    <div className={style.kolom}>
                        <img src={sponsor7} alt="" className={style.img21}/>
                        <img src={sponsor8} alt="" className={style.img22}/>
                        <img src={sponsor9} alt="" className={style.img23}/>
                        <img src={sponsor10} alt="" className={style.img24}/>
                        <img src={sponsor11} alt="" className={style.img25}/>
                        <img src={sponsor12} alt="" className={style.img26}/>
                    </div>

                    <div className={style.kolom}>
                        <img src={sponsor13} alt="" className={style.img31}/>
                        <img src={sponsor14} alt="" className={style.img32}/>
                        <img src={sponsor15} alt="" className={style.img33}/>
                        <img src={sponsor16} alt="" className={style.img34}/>
                        <img src={sponsor17} alt="" className={style.img35}/>
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
    );
}