import React from 'react';
import { NavLink } from 'react-router-dom';
import { getServices } from '../../ServicesList';
import Innovations from "./Innovations";
const Footer = () => {
    const Year = new Date().getFullYear();
    const services = getServices();
    return (
        // <!-- ======= Footer ======= -->
        <footer id="footer">
            <div className="footer-newsletter mx-auto">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <h1>Nos innovations</h1>
                        </div>
                    </div>
                </div>
                <Innovations />
            </div>
            <div className="footer-top">
                <div className="container">
                    <div className="row mx-auto">
                        <div className="col-lg-3 col-md-4 footer-contact">
                            <h4>Wenovate</h4>
                            <p>
                                A108 Adam Street <br />
                                New York, NY 535022<br />
                                United States <br /><br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> contact@wenovate.com<br />
                            </p>
                        </div>
                        <div className="col-lg-3 col-md-4 footer-links">
                            <h4>Liens utils</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="#"> Conditions d’utilisation</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="#"> Politique de confidentialité</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-4 footer-links">
                            <h4>Nos Services</h4>
                            <ul>
                                <li style={{color:'white'}}><i className="bx bx-chevron-right"></i> Infographie</li>
                                <li style={{color:'white'}}><i className="bx bx-chevron-right"></i> Formations</li>
                                <li style={{color:'white'}}><i className="bx bx-chevron-right"></i> Assistance technique</li>
                                {services.map(service => (
                                    <li key={service.name}><i className="bx bx-chevron-right"></i> <NavLink to={`/${service.name}`}>{service.name}</NavLink></li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <div className="social-links mt-3">
                                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container footer-bottom clearfix">
                <div className="copyright">
                    &copy; {Year} Copyright  <strong><span>Wenovate</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
        //* <!-- End Footer --> */

    );
}
export default Footer;