import React from 'react';
import ContactForm from './ContactForm';

const MainContact = () => {
    const sendFeedback = (templateId, variables) => {
        window.emailjs
            .send("service_ono6aow", templateId, variables)
            .then((res) => {
                (function(thisForm){
                    setTimeout(() => {
                        thisForm.querySelector('.loading').classList.remove('d-block');
                    }, 200)
                    thisForm.querySelector('.sent-message').classList.add('d-block');
                    setTimeout(() => {
                        thisForm.querySelector('.sent-message').classList.remove('d-block');
                    }, 6000)
            
                })(document)
            })
            .catch(
                (err) => console.log(err))
        ;
    };
    return (
        <main id="main">
            {/* <!-- ======= Contact Section ======= --> */}
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>N'hésitez pas à nous contacter pour en savoir plus sur nos types d'offres, pour vous renseigner à propos de nos innovations et pour devis gratuit.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 d-flex align-items-stretch">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>
                                <div className="social social-links">
                                    <a href=""><i className="ri-twitter-fill"></i></a>
                                    <a href=""><i className="ri-facebook-fill"></i></a>
                                    <a href=""><i className="ri-instagram-fill"></i></a>
                                    <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                </div>
                                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{border:0, width:'100%', height:'290px'}} allowFullScreen></iframe> */}
                            </div>
                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                            <ContactForm onSent={sendFeedback} />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Contact Section --> */}
        </main>
    );
};

export default MainContact;