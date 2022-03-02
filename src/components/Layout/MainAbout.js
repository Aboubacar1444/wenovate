import React from 'react';
const MainAbout = () => {
    return (
        <main id="main">
            {/* <!-- ======= About Us Section ======= --> */}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Notre mission</h2>
                    </div>
                    <div className="row content">
                        <div className="col-lg-6 order-1 order-lg-1 text-center mx-auto my-auto hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
                        </div>
                        <div className="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                            <div className="row mx-auto">
                                <div className="col-md-6 mx-auto">
                                    <p className='h6'>
                                        En tant que société de développement de logiciels personnalisés orientée client, Wenovate s’engage à fournir des produits et services logiciels de haute qualité. <br />
                                        <br /> Notre mission est de ravir nos clients dans la qualité de notre service de développement de logiciels et de fournir un environnement d’opportunité d’emploi attrayant pour nos équipes.
                                    </p>
                                </div>
                                <div className="col-md-6 mx-auto">
                                    <p className='shadow card p-3 fw-bold'>
                                        Nous créons la confiance en faisant de notre mieux pour livrer ce qui a été convenu et un peu plus que prévu.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- End About Us Section --> */}
            {/* <!-- ======= Why Us Section ======= --> */}
            <section id="why-us" className="why-us section-bg">
                <div className="container-fluid" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
                            <div className="content">
                                <h3> <strong>Pourquoi nous choisir ?</strong></h3>
                            </div>

                            <div className="accordion-list">
                                <ul>
                                    <li>
                                        <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1" style={{ color: "#480CA8" }}><span>01</span> <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-1" className="collapse show fs-6 fw-bold" data-bs-parent=".accordion-list" style={{ color: "black" }}>
                                            <p> Un contrat pour vous permettre d’évoluer en toute sérénité</p>
                                            <hr />
                                            <p> Des intervenants qualifiés et expérimentés</p>
                                            <hr />
                                            <p> La gestion de l’ensemble de vos systèmes d’informations</p>
                                            <hr />
                                            <p> Un conseil personnalisé couvrant l’ensemble de vos projets informatiques</p>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-2" style={{ color: "#480CA8" }}><span>02</span> <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                        <div id="accordion-list-2" className="collapse show fs-6 fw-bold" data-bs-parent=".accordion-list" style={{ color: "black" }}>
                                            <p> Passion & Esprit d’Équipe</p>
                                            <hr />
                                            <p> État d’Esprit Agile</p>
                                            <hr />
                                            <p> Un support technique réactif</p>
                                            <hr />
                                            <p> Une haute disponibilité</p>
                                            <hr />
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{ backgroundImage: 'url("assets/img/why-us.png")' }} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
                    </div>
                </div>
            </section>
            {/* <!-- End Why Us Section --> */}
            {/* <!-- ======= Skills Section ======= --> */}
            <section id="skills" className="skills">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                            <img src="assets/img/skills.png" className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                            <h3>Les technologies que nous utilisons</h3>

                            <div className="skills-content container text-center" id='skills-content'>
                                <div className="row mx-auto">
                                    <div className="col-md-3 mx-auto">
                                        <img src="assets/img/nodejs.svg" alt="" className='img-fluid h-50' />
                                    </div>
                                    <div className="col-md-3 mx-auto">
                                        <img src="assets/img/php.svg" alt="" className='img-fluid h-50' />
                                    </div>
                                    <div className="col-md-3 mx-auto">
                                        <img src="assets/img/javascript.svg" alt="" className='img-fluid h-50' />
                                    </div>
                                </div>
                                <div className="row mx-auto">
                                    <div className="col-md-3 mx-auto" >
                                        <img src="assets/img/angular.svg" alt="" className='img-fluid h-50' />
                                    </div>
                                    <div className="col-md-3 mx-auto partner wow zoomIn animated" >
                                        <img src="assets/img/react.svg" alt="" className='img-fluid h-50' />
                                    </div>
                                    <div className="col-md-3 mx-auto partner wow zoomIn animated" >
                                        <img src="assets/img/symfony.png" alt="" className='img-fluid h-50' />
                                    </div>
                                </div>
                                <div className="row mx-auto">
                                    <div className="col-md-3 mx-auto partner wow zoomIn animated">
                                        <img src="assets/img/ios.svg" alt="" className='img-fluid h-50' />
                                    </div>
                                    <div className="col-md-3 mx-auto partner wow zoomIn animated">
                                        <img src="assets/img/android.svg" alt="" className='img-fluid h-50' />
                                    </div>
                                    <div className="col-md-3 mx-auto partner wow zoomIn animated" >
                                        <img src="assets/img/aws.svg" alt="" className='img-fluid h-50' />
                                    </div>
                                </div>
                                <div className="row mx-auto">
                                    <div className="col-md-3 mx-auto partner wow zoomIn animated">
                                        <img src="assets/img/mysql.svg" alt="" className='img-fluid h-50' />
                                    </div>
                                    <div className="col-md-3 mx-auto partner wow zoomIn animated">
                                        <img src="assets/img/mongodb-logo.svg" alt="" className='img-fluid h-50' />
                                    </div>
                                    <div className="col-md-3 mx-auto">
                                        <img src="assets/img/java.svg" alt="" className='img-fluid h-50' />
                                    </div>
                                </div>
                                <div className="row mx-auto">
                                    <div className="col-md-3 mx-auto partner wow zoomIn animated" >
                                        <img src="assets/img/github-logo.svg" alt="" className='img-fluid h-50' />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End Skills Section --> */}
            {/* <!-- ======= Team Section ======= --> */}
            <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Team</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 mt-4">
                            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                                <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" /></div>
                                <div className="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                    <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                    <div className="social">
                                        <a href=""><i className="ri-twitter-fill"></i></a>
                                        <a href=""><i className="ri-facebook-fill"></i></a>
                                        <a href=""><i className="ri-instagram-fill"></i></a>
                                        <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
            </section>
            {/* <!-- End Team Section --> */}
        </main>
    );
};

export default MainAbout;