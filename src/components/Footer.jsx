import style from './footer.module.css'
import world from '../icons/world-icon.png'
import mail from '../icons/email-icon.png'
import call from '../icons/call-icon.png'
import map from '../icons/map-icon.png'
import facebook from '../icons/facebook-icon.png'
import instagram from '../icons/instagram-icon.png'
import twitter from '../icons/twitter-icon.png'


export default function Navbar(){
    return (
        <footer>
            <div className={style.footer1}>
                <ul>
                    <li><span>Service:</span></li>
                    <li><a href="#">Media</a></li>
                    <li><a href="#">IT & Web Service</a></li>
                    <li><a href="#">Digital Marketing</a></li>
                    <li><a href="#">POSM</a></li>
                </ul>

                <ul>
                    <li><span>Contact:</span></li>
                    <li className={style.foot}>
                        <img src={world} alt="" />
                        <p>www.xjavacom.co.id</p>
                    </li>
                    <li className={style.foot}>
                        <img src={mail} alt="" />
                        <p>info@xjavacom.co.id</p>
                    </li>
                    <li className={style.foot}>
                        <img src={call} alt="" />
                        <p>021-77975691 <br />0877-8515-4071</p>
                    </li>
                </ul>

                <ul>
                    <li><span>Address:</span></li>
                    <li>
                        <img src={map} alt="" />
                        <p>Graha Madani Center,<br /> Sawangan Kota Depok, <br /> Jawa Barat</p>
                    </li>
                </ul>

                <ul>
                    <li><span>Follow Us:</span></li>
                    <ul className={style.sosial}>
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={twitter} alt="" />
                    </ul>
                </ul>
            </div>

            <div className={style.footer2}>
                <p>© All rights reserved www.xjavacom.co.id</p>
            </div>

        </footer>
    )
}