import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="container hero-container">

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="hero-tag">
                        DIGITAL TRANSFORMATION
                    </span>

                    <h1>
                        Innovative IT Solutions
                        <br />
                        For Modern Businesses
                    </h1>

                    <p>
                        We help organizations accelerate growth through
                        secure, scalable, and reliable technology
                        solutions including software development,
                        cloud services, and cybersecurity.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/contact" className="btn-primary">
                            Get Started
                        </Link>

                        <Link to="/services" className="btn-secondary">
                            Our Services
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
                        alt="Technology"
                    />
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;