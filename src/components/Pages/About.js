import {Fragment} from 'react';
import MainAbout from '../Layout/MainAbout';
import Footer from './../Layout/Footer';
import Navbar from './../Layout/Navbar';
const About = () => {
    return (
        <Fragment>
            <Navbar/>
            <MainAbout/>
            <Footer/>
        </Fragment>
    );
};

export default About;