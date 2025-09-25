import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import MenuSection from '../components/MenuSection';
import LocationSection from '../components/LocationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

    const Home = () => {
        return (
            <div>
                <Navbar />
                <HeroSection />
                <ServicesSection />
                <MenuSection />
                <LocationSection />
                <Footer/>
            </div>
        );
    };

export default Home;