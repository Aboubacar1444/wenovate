import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { getServices } from './../../ServicesList';


const Navbar = (props) => {
    const onToggle = () => {
        document.getElementById('navbar').classList.toggle('navbar-mobile');
        document.getElementById('mobile-nav-toggle').classList.toggle('bi-list');
        document.getElementById('mobile-nav-toggle').classList.toggle('bi-x');
    }
    const onToggleDropService = (e) => {
        if (document.getElementById('navbar').classList.contains('navbar-mobile')) {
            e.preventDefault();
            document.getElementById('dropservice').nextElementSibling.classList.toggle('dropdown-active')
        }
    }
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    const headerScrolled = () => {
        if (window.scrollY > 100) {
            document.getElementById('header').classList.add('header-scrolled')
        } else {
            document.getElementById('header').classList.remove('header-scrolled')
        }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled);

    const services = getServices();
    return (
        <>
            <header id="header" className="fixed-top font-weight-bold" >
                <div className="container d-flex align-items-center">
                    <h1 className="logo me-auto"><Link to="/">W E N O V A T E </Link></h1>
                    {/* Uncomment below if you prefer to use an image logo  */}
                    {/* <a href="index.html" className="logo me-auto"><img src="assets/img/hero-img.png" alt="" className="img-fluid" /></a> */}

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"} >Accueil</NavLink></li>
                            <li><NavLink to="/about-us" className={({ isActive }) => isActive ? "nav-link scrollto active" : "nav-link scrollto"} >A propos</NavLink></li>
                            <li className="dropdown"><a href="#" id="dropservice" onClick={onToggleDropService}><span>Nos services</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                {services.map(service => (
                                    <li key={service.name}>
                                        <NavLink style={{ display: "block", margin: "1rem 0" }} to={`/${service.name}`}>
                                            {service.name}
                                        </NavLink>
                                    </li>
                                    ))}
                                </ul>
                            </li>
                            <li className=""><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link scrollto active mx-auto" : "nav-link scrollto"} >Contact</NavLink></li>
                            <li><a></a></li>
                        </ul>
                        <i id="mobile-nav-toggle" className="bi bi-list mobile-nav-toggle" onClick={onToggle}></i>
                    </nav>
                    <Outlet/>
                </div>
            </header>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-lg-6 mx-auto my-auto d-flex flex-column justify-content-center pt-3 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <h1>L'innovation autrement!</h1>
                            <h2>Nous sommes une équipe talentueuse spécialisée dans le développement d'applications web et mobile sur mesure.</h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                {/* <a href="#about" className="glightbox btn-get-started scrollto"></a> */}
                                <NavLink to="/contact" className="glightbox btn-get-started scrollto">Devis gratuit</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="assets/img/T2.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;