import React from 'react';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Service from './Service/Service';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Feedback from './Feedback/Feedback';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const Home = () => {
    return (
        <>
            <NavBar/>
            <Header/>
            <Service/>
            <About/>
            <Portfolio/>
            <Feedback/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;