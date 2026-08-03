import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import Portfolio from "../components/Portfolio";
import Clients from "../components/Clients";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Navbar />

            <Hero />

            <Services />

            <WhyChooseUs />

            <Stats />

            <Portfolio />

            <Clients />

            <CTA />

            <Footer />
        </>
    );
}

export default Home;