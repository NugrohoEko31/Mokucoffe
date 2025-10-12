import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import MenuSection from '../components/MenuSection'; // perbaiki import ini
import LocationSection from '../components/LocationSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// Tambahkan destructure menuItems dari props:
const Home = ({ menuItems }) => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <MenuSection menuItems={menuItems} />
            <LocationSection />
            <Footer/>
        </div>
    );
};

export default Home;
