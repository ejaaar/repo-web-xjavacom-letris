import "../styles/stats.css";

function Stats() {
    const stats = [
        { number: "250+", label: "Projects Completed" },
        { number: "120+", label: "Happy Clients" },
        { number: "30+", label: "IT Professionals" },
        { number: "10+", label: "Years Experience" }
    ];

    return (
        <section className="stats">
            <div className="container">

                <div className="stats-grid">
                    {stats.map((item, index) => (
                        <div className="stat-card" key={index}>
                            <h2>{item.number}</h2>
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Stats;