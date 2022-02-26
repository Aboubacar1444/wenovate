import {Fragment} from 'react';
import {useParams } from 'react-router-dom';
import { getInnovationItem } from '../../InnovationsList';
import { getServiceItem } from '../../ServicesList';
import MainService from '../Layout/MainService';
import Footer from './../Layout/Footer';
import Navbar from './../Layout/Navbar';
const Service = () => {
    const service = useParams();
    const serviceItem = getServiceItem(service.serviceId);
    const InnovationItem = getInnovationItem(service.serviceId);
    // const location = useLocation();
    // console.log(location.pathname);
    return (
        <Fragment>
            <Navbar/>
            <MainService item = {serviceItem} innovationItem = {InnovationItem} />
            <Footer/>
        </Fragment>
    );
};

export default Service;