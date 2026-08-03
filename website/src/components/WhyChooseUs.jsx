import {
    FaUserShield,
    FaClock,
    FaLightbulb,
    FaHandshake,
} from "react-icons/fa";

import "../styles/why.css";

const features = [
    {
        icon: <FaUserShield />,
        title: "Security First",
        text: "Security best practices are integrated into every solution we deliver."
    },
    {
        icon: <FaClock />,
        title: "Reliable Delivery",
        text: "Projects are planned carefully and delivered with clear milestones."
    },
    {
        icon: <FaLightbulb />,
        title: "Innovation",
        text: "We adopt modern technologies to solve real business challenges."
    },
    {
        icon: <FaHandshake />,
        title: "Long-Term Partnership",
        text: "We focus on building lasting relationships with our clients."
    }
];

function WhyChooseUs() {
    return (
        <section className="why">
            <div className="container">

                <div className="section-title">
                    <p>WHY CHOOSE US</p>
                    <h2>Your Trusted Technology Partner</h2>
                </div>

                <div className="why-grid">
                    {features.map((item, index) => (
                        <div className="why-card" key={index}>
                            <div className="why-icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;