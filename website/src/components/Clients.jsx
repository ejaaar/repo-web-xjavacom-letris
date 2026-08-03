import "../styles/clients.css";

function Clients() {
    const companies = [
        "Microsoft",
        "AWS",
        "Google Cloud",
        "Cisco",
        "Oracle",
        "VMware"
    ];

    return (
        <section className="clients">
            <div className="container">

                <div className="section-title">
                    <p>TECHNOLOGY</p>
                    <h2>Platforms We Work With</h2>
                </div>

                <div className="client-grid">

                    {companies.map((company, index) => (
                        <div className="client-card" key={index}>
                            {company}
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Clients;