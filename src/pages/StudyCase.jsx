import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './studyCase.module.css'
import Navbar from '../components/Navbar.jsx'

import webDev from './../assets/webDev-card.png'
import media from './../assets/media-card.png'

export default function StudyCase() {
    const [selectedCategory, setSelectedCategory] = useState('semua');

    return (
        <div>
            <Navbar />

            <div className={style.studyCase1}>
                <h1>Study Case</h1>
            </div>

            <div className={style.studyCase2}>
                <h2>Portfolio Kami</h2>
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

            <div className={style.studyCase3}>
                <div className={style.Card}>
                    <img src={webDev} alt="Web Development" />
                    <ul>
                        <li><p className={style.cardText1}>Web Development</p></li>
                        <li><a className={style.cardText2} href="#">Google</a></li>
                        <li><a className={style.cardText3} href="#">Baca Selengkapnya...</a></li>
                    </ul>
                </div>

                <div className={style.Card}>
                    <img src={media} alt="Media Placement" />
                    <ul>
                        <li><p className={style.cardText1}>Media Placement TV</p></li>
                        <li><a className={style.cardText2} href="#">FIF GROUP</a></li>
                        <li><a className={style.cardText3} href="#">Baca Selengkapnya...</a></li>
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
        </div>
    )
}