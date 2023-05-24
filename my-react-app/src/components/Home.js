import { useEffect } from "react"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Faq from "./components/Faq"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"
import BannerSection from "./components/BennerSection"
import WhyUs from "./components/WhyUs"
import NavBar from "./components/NavBar"

export default function Home() {
    useEffect(() => {
        document.title = "BCR - Binar Car Rental"
    })

    return (
        <>
            <NavBar type="home" />
            <Hero />
            <Services />
            <WhyUs />
            <Testimonial />
            <BannerSection />
            <Faq />


            <Footer type="home" />
        </>
    )
}
