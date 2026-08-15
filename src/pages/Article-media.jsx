import { useState } from 'react';
import { Link } from 'react-router-dom'
import style from '../styles/article-media.module.css'
import Navbar from '../components/Navbar'

import heroImg from '../assets/pages-images/artikel-media-and-web/hero-media.jpg'

export default function ArticleMedia() {
    return (
        <main>
            <Navbar/>

            <div className={style.fixed}>
                <h1 className={style.h1}>Recent Post</h1>

                <ul className={style.ul}>
                    <li to="/ArticleMedia" className={style.list}><Link to="/ArticleMedia" className={style.link}>Untuk Apa Media? Ini Jenis dan Keuntungannya</Link></li>

                    <li to="/ArticleWeb" className={style.list}><Link to="/ArticleWeb" className={style.link}>Jenis dan Keuntungan Penerapan Web Service dalam Bisnis Anda</Link></li>
                </ul>
            </div>

            <div className={style.main1}>
                <img className={style.img} src={heroImg} alt="" />

                <div className={style.text1}>
                    <p className={style.p}><span className={style.name}>Ferry Angga</span></p>
                    <p className={style.p}><span className={style.date}>23 Jan 2025</span></p>
                    <Link to="/Article" className={style.link}>Media</Link>
                </div>

                <div className={style.text2}>
                    <h1 className={style.h1}>Untuk Apa Media? Ini Jenis dan Keuntungannya</h1>
                </div>
            </div>

            <div className={style.table}>
                <div className={style.thead}>
                    <h1 className={style.h1}>Table of Contents</h1>
                </div>

                <div className={style.tableList}>
                    <ul className={style.ul}>
                        <li className={`${style.headLi} ${style.firstLi} ${style.li}`}>
                            <a href="#jenis-jenis-media" className={style.a}>Jenis-Jenis Media</a>
                        </li>

                        <li className={style.li}>
                            <a href="#jenis-jenis-media1" className={style.a}>1. Media Visual</a>
                        </li>

                        <li className={style.li}>
                            <a href="#jenis-jenis-media2" className={style.a}>2. Media Audio</a>
                        </li>

                        <li className={style.li}>
                            <a href="#jenis-jenis-media3" className={style.a}>3. Media Visual Audio</a>
                        </li>
                    </ul>
                    
                    <ul className={style.ul}>
                        <li className={`${style.headLi} ${style.firstLi} ${style.li}`}>
                            <a href="#Manfaat-Media" className={style.a}>Manfaat Media</a>
                        </li>

                        <li className={style.li}>
                            <a href="#Manfaat-Media1" className={style.a}>1. Akses Informasi Lebih Cepat</a>
                        </li>

                        <li className={style.li}>
                            <a href="#Manfaat-Media2" className={style.a}>2. Kemudahan dalam Memberikan Informasi</a>
                        </li>

                        <li className={style.li}>
                            <a href="#Manfaat-Media3" className={style.a}>3. Maksimalisasi Penyampaian Pesan</a>
                        </li>

                        <li className={style.li}>
                            <a href="#Manfaat-Media4" className={style.a}>4. Efektivitas dan Efisiensi</a>
                        </li>
                    </ul>
                    
                    <ul className={style.ul}>
                        <li className={`${style.headLi} ${style.firstLi} ${style.li}`}>
                            <a href="#Layanan-Media-yang-Kami-Sediakan" className={style.a}>Layanan Media yang Kami Sediakan</a>
                        </li>

                        <li className={style.li}>
                            <a href="#Layanan-Media-yang-Kami-Sediakan1" className={style.a}>Media Placement</a>
                        </li>

                        <li className={style.li}>
                            <a href="#Layanan-Media-yang-Kami-Sediakan2" className={style.a}>Press Conference</a>
                        </li>

                        <li className={style.li}>
                            <a href="#Layanan-Media-yang-Kami-Sediakan3" className={style.a}>Training & Workshop Media</a>
                        </li>

                        <li className={style.li}>
                            <a href="#Layanan-Media-yang-Kami-Sediakan4" className={style.a}>Media Monitoring & Analisis</a>
                        </li>

                        <li className={style.li}>
                            <a href="#Layanan-Media-yang-Kami-Sediakan5" className={style.a}>Komunikasi Krisis & Counter Opinion Advertising</a>
                        </li>

                        <li className={style.li}>
                            <a href="#Layanan-Media-yang-Kami-Sediakan6" className={style.a}>Advertising (TV, Online, Cetak)</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={style.article}>
                <div className={style.articleText}>
                    <p className={style.articleP}>
                        Media merupakan sarana atau alat yang digunakan untuk menyampaikan pesan atau informasi dalam kata lain bisa disebut sebagai sarana untuk menyalurkan ide dan gagasan, sebagai sarana pendidikan, sebagai sarana hiburan, sebagai sarana pengawas sekaligus pengontrol kegiatan sosial.
                    </p>

                    <p className={style.articleP}>
                        Media kini sudah menjadi bagian tak terpisahkan dari kehidupan sehari-hari, terlebih dalam mendukung aktivitas komunikasi antar individu. Dengan adanya media, setiap orang dapat menjalani kegiatan mereka dengan lebih efisien dan mudah. Oleh karena itu, pengertian media itu sendiri sangatlah luas. Sebagai seorang guru, misalnya, kamu pasti akan memilih media pembelajaran yang tepat untuk membantu para siswa dalam proses belajar mereka.
                    </p>

                    <p className={style.articleP}>
                        Tak hanya itu, media juga menjadi sarana utama bagi banyak pihak, mulai dari pekerja hingga pejabat politik yang tengah mempersiapkan pencalonannya. Terlebih lagi, saat pesta demokrasi berlangsung di Indonesia, media sering menjadi wahana komunikasi politik yang sangat intens. Jadi, jangan heran jika selama periode pemilu, berbagai isu dan fakta politik akan memenuhi media, mengiringi setiap langkah pesta demokrasi kita.
                    </p>
                </div>

                <div className={style.articleText}>
                    <h1 className={style.articleH1} id='jenis-jenis-media'>
                        Jenis-Jenis Media
                    </h1>

                    <p className={style.articleP}>
                        Setelah kita membahas berbagai fungsi media, kini saatnya mengupas tuntas tentang jenis-jenis media yang ada. Media bisa dibagi menjadi tiga kategori utama: media visual, media audio, dan media visual audio. Masing-masing memiliki ciri khas dan cara penyampaian informasi yang berbeda.
                    </p>
                </div>

                <div className={style.articleText}>
                    <h1 className={style.articleH1} id='jenis-jenis-media1'>
                        1. Media Visual
                    </h1>

                    <p className={style.articleP}>
                        Media visual adalah jenis media yang lebih mengutamakan indera penglihatan, dengan penyampaian informasi dalam bentuk gambar, video, atau tampilan visual lainnya. Media ini banyak digunakan dalam berbagai bidang, seperti pendidikan, presentasi, atau bahkan hiburan. Salah satu media visual yang paling sering digunakan adalah proyektor, yang menyampaikan informasi secara langsung melalui gambar atau slide visual.
                    </p>

                    <p className={style.articleP}>
                        Media visual dibagi menjadi dua jenis utama:
                    </p>

                    <p className={style.articleP}>
                        – Media Visual Diam: Seperti gambar atau ilustrasi statis.
                    </p>

                    <p className={style.articleP}>
                        – Media Visual Gerak: Seperti video atau animasi.
                    </p>

                    <p className={style.articleP}>
                        Kedua jenis ini, baik secara terpisah maupun digabungkan, sangat efektif untuk menarik perhatian audiens. Dengan adanya elemen visual, informasi menjadi lebih mudah dipahami dan lebih menarik karena disertai contoh yang nyata.
                    </p>
                </div>

                <div className={style.articleText}>
                    <h1 className={style.articleH1} id='jenis-jenis-media2'>
                        2. Media Audio
                    </h1>

                    <p className={style.articleP}>
                        Media audio adalah media yang menyampaikan informasi atau pesan melalui suara. Dalam hal ini, indera pendengaran memainkan peran utama dalam menerima pesan. Salah satu contoh paling populer dari media audio adalah siaran radio. Namun, dengan perkembangan teknologi, media audio kini juga berkembang menjadi podcast, yang memungkinkan penyampaian informasi dalam bentuk percakapan atau monolog yang bisa didengarkan kapan saja.
                    </p>
                    
                    <p className={style.articleP}>
                        Media audio menyampaikan dua jenis informasi:
                    </p>

                    <p className={style.articleP}>
                        – Informasi Verbal: Pesan yang disampaikan melalui kata-kata atau bahasa lisan.
                    </p>
                    
                    <p className={style.articleP}>
                        – Informasi Non-Verbal: Seperti vokalisasi, musik, atau efek suara yang menambah kedalaman pesan yang disampaikan.
                    </p>
                </div>

                <div className={style.articleText}>
                    <h1 className={style.articleH1} id='jenis-jenis-media3'>
                        3. Media Visual Audio
                    </h1>

                    <p className={style.articleP}>
                        Media visual audio menggabungkan elemen visual dengan audio, menciptakan pengalaman yang lebih imersif bagi audiens. Dengan adanya gambar atau video yang disertai suara, media ini mengaktifkan dua indera sekaligus—penglihatan dan pendengaran. Ini membuat media visual audio sangat menarik dan efektif dalam menyampaikan informasi.
                    </p>

                    <p className={style.articleP}>
                        Media visual audio juga terbagi menjadi dua jenis:
                    </p>

                    <p className={style.articleP}>
                        – Media Visual Audio Gerak: Contohnya adalah film, animasi, atau video yang bergerak dengan suara.
                    </p>

                    <p className={style.articleP}>
                        – Media Visual Audio Diam: Seperti buku bersuara atau halaman web dengan elemen suara yang melengkapi teks dan gambar.
                    </p>
                </div>

                <div className={style.articleText}>
                    <h1 className={style.articleH1} id="Manfaat-Media" >
                        Manfaat Media
                    </h1>

                    <p className={style.articleP}>
                        Media tidak hanya berfungsi sebagai alat untuk menyampaikan informasi, tetapi juga memberikan manfaat yang besar dalam berbagai aspek kehidupan. Beberapa manfaat utama dari media antara lain:
                    </p>
                </div>

                <div className={style.articleText}>
                    <h1 className={style.articleH1} id="Manfaat-Media1">
                        1. Akses Informasi Lebih Cepat
                    </h1>

                    <p className={style.articleP}>
                        Media memungkinkan masyarakat untuk mendapatkan informasi secara real-time. Berkat perkembangan teknologi dan internet, informasi bisa tersebar dengan sangat cepat, memastikan kita tidak ketinggalan berita penting.
                    </p>
                </div>

                <div className={style.articleText}>
                    <h1 className={style.articleH1} id="Manfaat-Media2">
                        2. Kemudahan dalam Memberikan Informasi
                    </h1>

                    <p className={style.articleP}>
                        Dengan adanya media, informasi kini bisa dengan mudah disebarkan melalui berbagai platform, seperti telepon pintar atau aplikasi pesan. Hal ini mempermudah komunikasi antar individu maupun kelompok.
                    </p>
                </div>

                <div className={style.articleText}>
                    <h1 className={style.articleH1} id="Manfaat-Medi3">
                        3. Maksimalisasi Penyampaian Pesan
                    </h1>

                    <p className={style.articleP}>
                        Media memungkinkan informasi disampaikan dengan cara yang lebih jelas dan tepat, sehingga mengurangi kemungkinan terjadinya kesalahpahaman antara pemberi pesan dan penerima pesan.
                    </p>
                </div>

                <div className={style.articleText}>
                    <h1 className={style.articleH1} id="Manfaat-Media4">
                        4. Efektivitas dan Efisiensi
                    </h1>

                    <p className={style.articleP}>
                        Salah satu manfaat besar media adalah kemampuannya untuk menyampaikan pesan secara cepat dan efisien. Ini membuat komunikasi menjadi lebih efektif, menghemat waktu, dan memastikan pesan sampai kepada audiens dengan segera.
                    </p>

                    <p className={style.articleP}>
                        Dengan segala keuntungan dan keberagaman jenisnya, media terus berperan besar dalam dunia komunikasi dan menyentuh hampir setiap aspek kehidupan manusia.
                    </p>
                </div>

                <div className={style.articleText}> 
                    <h2 className={style.articleH2} id="Layanan-Media-yang-Kami-Sediakan">
                        Layanan Media yang Kami Sediakan
                    </h2>

                    <h1 className={style.articleH1} id="Layanan-Media-yang-Kami-Sediakan1">
                        Media Placement
                    </h1>

                    <p className={style.articleP}>
                        Media placement adalah strategi pemasaran yang menempatkan iklan atau konten promosi di platform media yang tepat, baik itu media cetak, digital, atau media luar ruang. Dengan pendekatan yang tepat, media placement dapat menjadi kunci untuk memperkuat kesadaran merek, membangun reputasi yang solid, dan meningkatkan peringkat SEO.
                    </p>

                    <p className={style.articleP}>
                        Manfaat utama dari media placement meliputi:
                    </p>

                    <ul className={style.ul}>
                        <li className={style.li}>
                            Meningkatkan brand awareness, memperkenalkan merek Anda kepada audiens yang lebih luas.
                        </li>

                        <li className={style.li}>
                            Membangun reputasi, menciptakan citra positif yang dapat meningkatkan kepercayaan konsumen.
                        </li>

                        <li className={style.li}>
                            Meningkatkan SEO, menjadikan merek Anda lebih mudah ditemukan di dunia digital.
                        </li>

                        <li className={style.li}>
                            Menjangkau audiens yang lebih luas, membuka peluang untuk menarik perhatian konsumen baru.
                        </li>

                        <li className={style.li}>
                            Membangun koneksi kuat dengan konsumen, mempererat hubungan yang lebih personal dan berkelanjutan.
                        </li>
                    </ul>

                    <p className={style.articleP}>
                        Dengan memanfaatkan strategi ini, Anda dapat mencapai tujuan pemasaran yang lebih efektif dan memberikan dampak jangka panjang bagi perkembangan bisnis anda.
                    </p>

                    <p className={style.articleP}>
                        Dapatkan publisitas maksimal untuk peluncuran produk, pengumuman penting, dan acara lainnya melalui penempatan media yang strategis di media ternama seperti TV, radio, surat kabar, majalah, dan media online.
                    </p>
                </div>

                <div className={style.articleText}>
                    <h1 className={style.articleH1} id="Layanan-Media-yang-Kami-Sediakan2">
                        Press Conference
                    </h1>

                    <p className={style.articleP}>
                        Press Conference atau Konferensi pers merupakan acara khusus yang dibuat sebagai sarana untuk mengumumkan, menjelaskan, mempertahankan atau mempromosikan dengan maksud untuk mengukuhkan pengertian dan penerimaan publik pada pihak pemrakarsa acara
                    </p>

                    <p className={style.articleP}>
                        Anda dapat menggelar konferensi pers yang efektif untuk menarik perhatian media dan menyebarkan pesan Anda kepada audiens yang lebih luas.
                    </p>
                </div>
                
                <div className={style.articleText}>
                    <h1 className={style.articleH1} id="Layanan-Media-yang-Kami-Sediakan3">
                        Training & Workshop Media
                    </h1>

                    <p className={style.articleP}>
                        Tingkatkan keterampilan tim Anda dalam menjalin hubungan dengan media, memanfaatkan media sosial, dan menangani situasi krisis melalui pelatihan dan workshop yang interaktif.
                    </p>
                </div>

                <div className={style.articleText}>
                    <h1 className={style.articleH1} id="Layanan-Media-yang-Kami-Sediakan4">
                        Media Monitoring & Analisis
                    </h1>

                    <p className={style.articleP}>
                        Pantau liputan media Anda secara real-time, dapatkan analisis mendalam tentang sentiment dan jangkauan, serta lacak performa media sosial Anda untuk memahami lanskap media dan membuat keputusan yang lebih baik.
                    </p>
                </div>

                <div className={style.articleText}>
                    <h1 className={style.articleH1} id="Layanan-Media-yang-Kami-Sediaka5">
                        Komunikasi Krisis & Counter Opinion Advertising
                    </h1>

                    <p className={style.articleP}>
                        Tanggapi situasi krisis dengan cepat dan efektif untuk meminimalkan kerusakan reputasi, dan tanggapi opini negatif dengan iklan yang ditargetkan dan pesan yang kuat.
                    </p>
                </div>

                <div className={style.articleText}>
                    <h1 className={style.articleH1} id="Layanan-Media-yang-Kami-Sediakan6">
                        Advertising (TV, Online, Cetak)
                    </h1>

                    <p className={style.articleP}>
                        Jalankan kampanye iklan yang efektif di berbagai platform media seperti TV, online, dan cetak untuk menjangkau target audiens Anda dan meningkatkan brand awareness.
                    </p>

                    <p className={style.articleP}>
                        Tunggu apalagi? Segera <Link to="/contact" className={style.link}>hubungi kami</Link> untuk mengembangkan bisnis Anda!
                    </p>

                    <h1 className={`${style.articleH1} ${style.articleEnd}`}>Similar Post</h1>
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