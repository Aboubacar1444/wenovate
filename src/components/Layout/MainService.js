import React from 'react';

const MainService = ({ item, innovationItem }) => {
    return (
        <main id="main">
            {item &&
                (
                    <section className='p-1'>
                        <div className='justify-content-center justify-items-center text-center' style={{ backgroundColor: '#e6e6e7' }}>
                            <img src={item.mainImg} className="img-fluid" />
                        </div>
                        {/* Firt party */}
                        <div className="container-fluid mt-md-0 mt-5">
                            <div className="row" style={{ marginTop: '-100px' }}>
                                <div className="col-md-12 px-lg-5">
                                    <div className="card pb-3 mx-md-3">
                                        <div className="card-body">
                                            <div className="container">
                                                <h1 className="text-center h1 pt-4 mb-2">
                                                    <strong>{item.name}</strong>
                                                </h1>
                                                <div className="row pt-lg-3 pt-3">
                                                    <div className="col-md-4 mt-5 text-center">
                                                        <div className="row mx-auto">
                                                            <div className="col-md-6">
                                                                <h1 className='fw-weight' style={{ color: '#B5179E', fontSize: '65px' }}>{item.YearExp}</h1>
                                                            </div>
                                                            <div className="col-md-6 my-auto mx-auto">
                                                                <h3 className="grey-text fs-6 text-center mx-auto my-auto">Années d’expertise en {item.name}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 mx-auto card shadow-lg p-3 mb-5 bg-body rounded ">
                                                        <p className='fs-6 text-monospace' style={{ textJustify: 'inter-word', color: '#464646' }}>
                                                            {item.mainText}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End First party */}
                        {/* Second party */}
                        <div className="container-fluid mt-md-0 mb-5">
                            <div className="row" style={{ marginTop: '-40px' }}>
                                <div className="col-md-12 px-lg-5">
                                    <div className="card mx-md-3">
                                        <div className="card-body">
                                            <div className="container">
                                                <h3 className="text-center pt-4 mb-2">
                                                    <strong>Qu'est-ce que ce service offre ?</strong>
                                                </h3>
                                                <p className='fst-normal text-center'>
                                                    {item.OfferText}
                                                </p>
                                                {/* why this service 1 */}
                                                <div className="row pt-lg-3 pt-3">
                                                    {/* <div className="col-12 col-lg-4 rounded mx-auto my-auto">
                                                        <img src="./assets/img/image-laptop.svg" alt="serviceImg" className='img-fluid mx-auto my-auto' />
                                                    </div> */}
                                                    <div className="col-12 col-lg-7 my-auto mx-auto order-lg-first order-last card shadow-lg p-3 mb-5 bg-body rounded">
                                                        {item.WS1 && item.WS1.map(ws1 => (
                                                            <p key={Math.random()} className='fs-6'>
                                                                <strong className='d-flex'><i className="fas fa-check fa-1x" style={{ color: '#F72585' }}></i> {ws1.text}</strong>
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* end why this service 1 */}
                                                {/* why this service 2 */}
                                                {item.WS2 &&
                                                    <div className="row pt-lg-3 pt-3 mt-lg-5 mt-md-2 mt-sm-2">
                                                        <div className="col-12 col-lg-4 rounded mx-auto my-auto order-lg-first text-center">
                                                            {item.WS2[4] && <img src={item.WS2[4]} alt="serviceImg" className={`img-fluid mx-auto my-auto ${item.WS2[4] && 'col-md-3'}`} />}
                                                            <img src={item.WS2[3]} alt="serviceImg" className={`img-fluid mx-auto my-auto ${item.WS2[4] && 'col-md-3'}`} />
                                                        </div>
                                                        <div className="col-12 col-lg-6 my-auto mx-auto order-lg-last order-last">
                                                            {item.WS2.map(ws2 => (
                                                                ws2.title && <p key={Math.random()} className='fs-6'>
                                                                    <strong className='d-flex'><i className="fas fa-check fa-1x" style={{ color: '#F72585' }}></i>{ws2.title} </strong>
                                                                    {ws2.text}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                }
                                                {/* end why this service 2 */}
                                                {/* why this service 3 */}
                                                {item.WS3 &&
                                                    <div className="row pt-lg-3 pt-3 mt-lg-5 mt-md-2 mt-sm-2">
                                                        <div className="col-12 col-lg-4 rounded mx-auto my-auto text-center">
                                                            <img src={item.WS3[3]} alt="serviceImg" className={`img-fluid mx-auto my-auto ${item.WS3[4] && 'col-md-3'}`} />
                                                            {item.WS3[4] && <img src={item.WS3[4]} alt="serviceImg" className={`img-fluid mx-auto my-auto ${item.WS2[4] && 'col-lg-2 col-md-none'}`} />}
                                                            {item.WS3[5] && <img src={item.WS3[5]} alt="serviceImg" className={`img-fluid mx-auto my-auto ${item.WS2[5] && 'col-md-3'}`} />}
                                                        </div>
                                                        <div className="col-12 col-lg-6 my-auto mx-auto order-lg-first order-last">
                                                            {item.WS3.map(ws3 => (
                                                                ws3.title && <p key={Math.random()} className='fs-6'>
                                                                    <strong className='d-flex'><i className="fas fa-check fa-1x" style={{ color: '#F72585' }}></i>{ws3.title} </strong>
                                                                    {ws3.text}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                }
                                                {/* end why this service 3 */}
                                                {/* why this service 4 */}
                                                {item.WS4 &&
                                                    <div className="row pt-lg-3 pt-3 mt-lg-5 mt-md-2 mt-sm-2">
                                                        <div className="col-12 col-lg-4 rounded mx-auto my-auto order-lg-first text-center">
                                                            <img src={item.WS4[3]} alt="serviceImg" className='img-fluid mx-auto my-auto' />
                                                        </div>
                                                        <div className="col-12 col-lg-6 my-auto mx-auto order-lg-last order-last">
                                                            {item.WS4.map(ws4 => (
                                                                ws4.title && <p key={Math.random()} className='fs-6'>
                                                                    <strong className='d-flex'><i className="fas fa-check fa-1x" style={{ color: '#F72585' }}></i>{ws4.title} </strong>
                                                                    {ws4.text}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                }
                                                {/* end why this service 4 */}
                                                {/* why this service 5 */}
                                                {item.WS5 &&
                                                    <div className="row pt-lg-3 pt-3 mt-lg-5 mt-md-2 mt-sm-2">
                                                        <div className="col-12 col-lg-4 rounded mx-auto my-auto">
                                                            <img src={item.WS5[5]} alt="serviceImg" className='img-fluid mx-auto my-auto' />
                                                        </div>
                                                        <div className="col-12 col-lg-6 my-auto mx-auto order-lg-first order-last">
                                                            {item.WS5.map(ws5 => (
                                                                ws5.title && <p key={Math.random()} className='fs-6'>
                                                                    <strong className='d-flex'><i className="fas fa-check fa-1x" style={{ color: '#F72585' }}></i>{ws5.title} </strong>
                                                                    {ws5.text}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                }
                                                {/* end why this service 5 */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Second party */}
                        {/* Third party */}
                        {item.name === "Développement Web" &&
                            <div className="container-fluid text-justify" style={{ backgroundColor: '#e6e6e7' }}>
                                <div className="row">
                                    <h1 className='text-center'>Développement Front-End</h1>
                                    <p className='fst-normal pt-1 pb-2 text-wrap' style={{ textJustify: 'initial', color: '#464646' }}>
                                        Les développeurs frontaux de Wenovate travaillent avec le côté client des applications – ils codent tout ce qu’un utilisateur voit et clique.
                                        Nos développeurs front-end utilisent divers langages de programmation,
                                        frameworks et outils de conception et créent des fonctionnalités destinées à l’utilisateur.
                                        Notre équipe de développement front-end est technophile et créative, et elle travaille avec succès avec nos concepteurs et développeurs back-end.
                                        Dans l’ensemble, nous nous concentrons sur l’expérience utilisateur, donnons vie à la conception et fournissons des applications Web robustes.
                                        L’équipe de développement front-end de Wenovate est très motivée.
                                        Nos ingénieurs logiciels ont une solide expertise en développement front-end et maintiennent toujours des normes de codage élevées.
                                        Nous sommes en mesure de fournir des performances et une évolutivité parfaites de votre application Web. <br /> <br />
                                        L’externalisation du développement front-end à notre équipe expérimentée signifie des économies de temps et d’argent significatives, des logiciels de haute qualité,
                                        un travail en avance sur le calendrier,
                                        l’accès aux meilleurs talents et se concentrer sur des tâches plus importantes tandis que notre équipe assume l’entière responsabilité du processus de développement front-end. <br /> <br />
                                        Nous sommes professionnels et dévoués. Nous utilisons toutes les dernières technologies et avons des compétences spécialisées dans la conception et le développement de logiciels.
                                    </p>
                                </div>
                            </div>
                        }
                        {/* End Third party */}
                    </section>
                )
            }
            {
                innovationItem &&
                (
                    <section id="portfolio-details" className="portfolio-details">
                        <div className="container">
                            <div className="row gy-4">
                                <div className="col-lg-8">
                                    <div id="carouselExampleSlidesOnly" className="carousel-inner carousel slide h-100" data-bs-ride="carousel">
                                        <div className="carousel-inner align-items-center h-100 mx-auto my-auto">
                                            {innovationItem.OImg.map(img => (
                                                <div key={img.img} className={`carousel-item h-100 w-100 text-center ${img.id === 1 ? 'active' : ''}`}>
                                                    <img src={img.img} alt="" className='d-block img-fluid h-80 my-auto mx-auto w-auto' />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="portfolio-info">
                                        <h3 className='fw-bold text-center' style={{ color: "#480CA8" }}>{innovationItem.name}</h3>
                                        <ul>
                                            <li><strong>Category</strong>:  {innovationItem.Category} </li>
                                            {/* <li><strong>Client</strong>: ASU Company</li> */}
                                            {/* <li><strong>Project date</strong>: 01 March, 2020</li> */}
                                            <li>
                                                {innovationItem.rate.map(rate => (
                                                    <strong key={rate}> <i className="fas fa-star fa-1x" style={{ color: "#F72585" }}></i> </strong>
                                                ))}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="portfolio-description">
                                        <h2 className='text-center'>En savoir +</h2>
                                        <p className=''>
                                            {innovationItem.Desc}
                                        </p>
                                        {innovationItem.service && innovationItem.service.map(service => (
                                            <p key={Math.random()} className='fs-6 d-flex lh-base font-monospace'>
                                                <strong><i className="fas fa-check fa-1x" style={{ color: '#F72585' }}></i></strong> {service.title}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        </main>
    );
};

export default MainService;
