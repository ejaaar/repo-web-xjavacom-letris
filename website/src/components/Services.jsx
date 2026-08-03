import {
    FaCode,
    FaCloud,
    FaShieldAlt,
    FaServer,
    FaMobileAlt,
    FaDatabase,
} from "react-icons/fa";

import "../styles/services.css";

const services = [
    {
        icon: <FaCode />,
        title: "Software Development",
        desc: "Custom web and enterprise applications tailored to your business."
    },
    {
        icon: <FaCloud />,
        title: "Cloud Solutions",
        desc: "Cloud migration, deployment, and infrastructure management."
    },
    {
        icon: <FaShieldAlt />,
        title: "Cyber Security",
        desc: "Security assessment and protection for your digital assets."
    },
    {
        icon: <FaServer />,
        title: "IT Infrastructure",
        desc: "Reliable servers, networking, and system administration."
    },
    {
        icon: <FaMobileAlt />,
        title: "Mobile Apps",
        desc: "Cross-platform Android and iOS application development."
    },
    {
        icon: <FaDatabase />,
        title: "Database Systems",
        desc: "Database design, optimization, and maintenance services."
    }
];

function Services() {
    return (
        <section className="services">
            <div className="container">

                <div className="section-title">
                    <p>OUR SERVICES</p>

                    <h2>
                        Complete IT Solutions
                    </h2>

                    <span>
                        Helping businesses grow with innovative technology.
                    </span>
                </div>

                <div className="services-grid">

                    {services.map((item, index) => (
                        <div className="service-card" key={index}>

                            <div className="service-icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.desc}</p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Services;