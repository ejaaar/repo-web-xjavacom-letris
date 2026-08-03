import "../styles/portfolio.css";

const projects = [
    {
        title: "Enterprise Dashboard",
        category: "Web Application",
        image:
            "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900"
    },
    {
        title: "Cloud Infrastructure",
        category: "Cloud Solutions",
        image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900"
    },
    {
        title: "Security Monitoring",
        category: "Cyber Security",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
    }
];

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="container">

                <div className="section-title">
                    <p>OUR WORK</p>
                    <h2>Featured Projects</h2>
                </div>

                <div className="portfolio-grid">

                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>

                            <img
                                src={project.image}
                                alt={project.title}
                            />

                            <div className="project-content">
                                <span>{project.category}</span>
                                <h3>{project.title}</h3>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Portfolio;