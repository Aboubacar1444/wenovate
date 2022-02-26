import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getInnovations } from '../../InnovationsList';

const Innovations = () => {
    const Innovations = getInnovations();
    return (
        <div className="container text-center my-3">
            <div className="row mx-auto my-auto justify-content-center" style={{ backgroundColor: "rgb(230, 230, 231)" }}>
                <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner mx-auto" role="listbox">
                        {Innovations.map(innovation => (
                            <div key={innovation.name} className={`carousel-item ${innovation.isActive && "active"}`}>
                                <div className="col-md-3 mx-auto">
                                    <NavLink to={`/${innovation.name}`}>
                                        <div className="shadow p-2">
                                            <div className="card-img h-100"> <img src={innovation.mainImg} className="img-fluid h-50" /> </div>
                                            <div className="fs-4 fw-bold mx-auto my-auto text-center" style={{color:"#480CA8"}}>{innovation.name}</div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        ))}
                        <Outlet/>
                    </div>  
                    <a className="carousel-control-prev bg-primary w-auto" href="#recipeCarousel" role="button" data-bs-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> </a>
                    <a className="carousel-control-next bg-primary w-auto" href="#recipeCarousel" role="button" data-bs-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> </a>
                </div>
            </div>
        </div>
    );
};

export default Innovations;