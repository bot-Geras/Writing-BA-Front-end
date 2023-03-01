// import for animation
import Aos from "aos";
import 'aos/dist/aos.css';

// import components
import { Hero } from "../../components"
import { AboutSection } from "../../components"
import { Services } from "../../components"
import { Testimonial } from "../../components"
import { Subscribe } from "../../components"
import { Footer } from "../../components"

export const Home = () => {
    Aos.init({
        duration: 1800,
        offset: 0,
    })

    return (
        <main className="">
            <Hero />
            <AboutSection />
            <Services />
            <Testimonial />
            <Subscribe />
            <Footer />
        </main>
    )
}