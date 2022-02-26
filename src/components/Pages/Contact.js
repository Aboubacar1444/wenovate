import {Fragment} from 'react';
import MainContact from '../Layout/MainContact';
import Footer from './../Layout/Footer';
import Navbar from './../Layout/Navbar';
const Contact = () => {
    return (
        <Fragment>
            <Navbar/>
            <MainContact/>
            <Footer/>
        </Fragment>
    );
};

export default Contact;