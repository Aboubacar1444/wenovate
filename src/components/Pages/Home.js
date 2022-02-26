import { Fragment } from 'react';
import MainHome from '../Layout/MainHome';
import Footer from './../Layout/Footer';
import Navbar from './../Layout/Navbar';
const Home = () => {
    return (
        <Fragment>
            <Navbar/>
            <MainHome/>
            <Footer/>
        </Fragment>
    );
};

export default Home;