import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/studyCase.module.css'
import Navbar from '../components/Navbar.jsx'

import webDev from '../assets/pages-images/studyCase/google-img.png'
import media from '../assets/pages-images/studyCase/fif-group-img.png'

const portfolioData = [
    {
        id: 1,
        category: 'it-web',
        tag: 'Web Development',
        title: 'Google',
        link: '/Google',
        image: webDev
    },
    {
        id: 2,
        category: 'media',
        tag: 'Media Placement TV',
        title: 'FIF GROUP',
        link: '/Fif',
        image: media
    }
];

export default function StudyCase() {
    const [selectedCategory, setSelectedCategory] = useState('semua');

    const filteredPortfolios = selectedCategory === 'semua' ? portfolioData : portfolioData.filter(item => item.category === selectedCategory);

    return (
        <main className={style.container}>
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
                {filteredPortfolios.map((item) => (
                    <div key={item.id} className={style.Card}>
                        <img src={item.image} alt="" />
                        <ul>
                            <li><p className={style.cardText1}>{item.tag}</p></li>
                            <li><Link to={item.link} className={style.cardText2}>{item.title}</Link></li>
                            <li><Link to={item.link} className={style.cardText3}>Baca Selengkapnya...</Link></li>
                        </ul>
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
    )
}