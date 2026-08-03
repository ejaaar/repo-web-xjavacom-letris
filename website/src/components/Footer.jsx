import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div>
                    <h2>TechVision</h2>
                    <p>
                        Delivering innovative IT solutions that help businesses
                        grow securely and efficiently.
                    </p>
                </div>

                <div>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <p>Jakarta, Indonesia</p>
                    <p>info@techvision.com</p>
                    <p>+62 21 1234 5678</p>
                </div>
            </div>

            <div className="copyright">
                © 2026 TechVision. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;