import React, { Component } from 'react';
import NavbarTwo from '../components/Layout/NavbarTwo';
import Banner from '../components/HomeNine/Banner';
import Projects from '../components/HomeNine/Projects';
import PricingStyleFive from '../components/Pricing/PricingStyleFive';
import OurTeamTwo from '../components/Common/OurTeamTwo';
import Clients from '../components/HomeSeven/Clients';
import Footer from '../components/Layout/Footer';
import ContactInfo from '../components/Contact/ContactInfo';
import WhyChooseUs from '../components/Services/WhyChooseUs';

class Index extends Component {
    render() {
        return (
            <>
                <NavbarTwo />
                <Banner />
                <ContactInfo />
                <Projects />
                <PricingStyleFive />
                <OurTeamTwo />
                <WhyChooseUs />
                <Clients />
                <Footer/> 
            </>
        );
    }
}

export default Index;
