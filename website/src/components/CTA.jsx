import { Link } from "react-router-dom";
import "../styles/cta.css";

function CTA() {
    return (
        <section className="cta">
            <div className="container cta-content">

                <div>
                    <h2>
                        Ready to Start Your Next Project?
                    </h2>

                    <p>
                        Let's discuss how technology can support your business goals.
                    </p>
                </div>

                <Link
                    to="/contact"
                    className="btn-primary"
                >
                    Contact Us
                </Link>

            </div>
        </section>
    );
}

export default CTA;