import React, { useEffect } from 'react';
import UserLayout from "@/Layouts/UserLayout";
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import MenuSection from '../components/MenuSection';
import LocationSection from '../components/LocationSection';

const Home = ({ menuItems }) => {
    useEffect(() => {
        const handleHashScroll = () => {
        setTimeout(() => {
            const hash = window.location.hash;
            if (hash) {
            const id = hash.replace('#', '');
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 200);
        };
        handleHashScroll();
        window.addEventListener('hashchange', handleHashScroll);
        return () => window.removeEventListener('hashchange', handleHashScroll);
    }, []);

    return (
        <UserLayout>
        <section id="hero">
            <HeroSection />
        </section>
        <section id="aboutus">
            <AboutUs />
        </section>
        <section id="menu">
            <MenuSection menuItems={menuItems} />
        </section>
        <section id="location">
            <LocationSection />
        </section>
        </UserLayout>
    );
};

export default Home;
