import React from 'react';
import { NavLink } from 'react-router-dom';
import { getServices } from '../../ServicesList';

const mainHome = () => {
    const services = getServices();
    return (
        <main id="main">
            {/* <!-- ======= Clients Section ======= --> */}
            <section id="clients" className="clients section-bg">
                <div className="container">
                    <div className="row" data-aos="zoom-in">
                        <h6>Ils nous ont fait confiance!</h6>
                        <div className="col-lg-2 col-md-4 col-6 d-md-flex mx-lg-auto align-items-center justify-content-center">
                            <code className='fs-5 fw-bold font-monospace'>A T Sarl</code>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-md-flex mx-lg-auto align-items-center justify-content-center">
                            <code className='fs-5 fw-bold font-monospace'>S S D F</code>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-md-flex mx-lg-auto align-items-center justify-content-center">
                            <code className='fs-5 fw-bold font-monospace'>I F S M</code>
                        </div>
                        <div className="col-lg-2 col-md-4 col-6 d-md-flex mx-lg-auto align-items-center justify-content-center">
                            <code className='fs-5 fw-bold font-monospace'>A F C</code>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Cliens Section --> */}
            {/* <!-- ======= About Us Section ======= --> */}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>A propos</h2>
                    </div>
                    <div className="row content">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <p className='fs-6 fw-bold'>
                                <i className="ri-check-double-line text-primary fa-2x"></i> Nous créons la confiance en faisant de notre mieux pour livrer ce qui a été convenu et un peu plus que prévu.
                            </p>

                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <NavLink to={'/about-us'} className="btn-learn-more">Tout savoir</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End About Us Section --> */}
            {/* <!-- ======= Services Section ======= --> */}
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Services</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>
                    <div className="row mx-auto">
                        {services.map(service => {
                            return (
                                <div key={service.name} className="col-xl-4 col-md-4 mb-2 d-flex align-items-stretch rounded float-start" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="icon-box">
                                        <div className="icon h-75"><img className="img-fluid rounded float-start h-100" src={service.mainImg} /></div>
                                        <h4>{service.name}</h4>
                                        <NavLink to={`/${service.name}`}><i className='fas fa-arrow-circle-right fa-2x mx-auto'></i></NavLink>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                </div>
            </section>
            {/* <!-- End Services Section --> */}
        </main>
    );
};

export default mainHome;