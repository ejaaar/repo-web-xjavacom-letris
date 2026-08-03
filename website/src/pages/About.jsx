import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/about.css";

import {
    FaBullseye,
    FaEye,
    FaUsers,
    FaAward
} from "react-icons/fa";

function About() {
    return (
        <>
            <Navbar />

            <section className="about-hero">
                <div className="container">

                    <h1>About TechVision</h1>

                    <p>
                        We help organizations transform their business
                        through innovative software, cloud solutions,
                        cybersecurity, and IT consulting.
                    </p>

                </div>
            </section>

            <section className="company-story">
                <div className="container story-grid">

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
                            alt="Our Team"
                        />
                    </div>

                    <div>

                        <h2>Who We Are</h2>

                        <p>
                            TechVision is a technology consulting company
                            delivering reliable digital solutions for
                            businesses of every size.
                        </p>

                        <p>
                            Our experienced engineers design secure,
                            scalable, and modern systems that help clients
                            achieve long-term growth.
                        </p>

                    </div>

                </div>
            </section>

            <section className="mission-section">

                <div className="container mission-grid">

                    <div className="mission-card">
                        <FaBullseye />

                        <h3>Mission</h3>

                        <p>
                            Deliver practical technology solutions that
                            improve efficiency and business performance.
                        </p>
                    </div>

                    <div className="mission-card">
                        <FaEye />

                        <h3>Vision</h3>

                        <p>
                            Become a trusted technology partner for
                            organizations embracing digital transformation.
                        </p>
                    </div>

                    <div className="mission-card">
                        <FaUsers />

                        <h3>Teamwork</h3>

                        <p>
                            Collaboration, transparency, and continuous
                            learning guide every project we undertake.
                        </p>
                    </div>

                    <div className="mission-card">
                        <FaAward />

                        <h3>Quality</h3>

                        <p>
                            We focus on quality, reliability, and customer
                            satisfaction from planning through delivery.
                        </p>
                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
}

export default About;