import React from 'react';
import Banner from './banner/Banner';
import DoctorSay from './doctorsay/DoctorSay';
import Lifestyle from './lifestyle/Lifestyle';
import NewsLetter from './newsletter/NewsLetter';
import Footer from './footer/Footer';
import HomeService from './homeService/HomeService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Lifestyle></Lifestyle>
            <DoctorSay></DoctorSay>
            <HomeService></HomeService>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;