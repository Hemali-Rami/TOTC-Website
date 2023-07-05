import React from "react";
import HomeBanner from "../Components/Home/HomeBanner";
import "../css/home.css";
import HomeOurSuccess from "../Components/Home/OurSuccess/HomeOurSuccess";
import HomeFeatures from "../Components/Home/HomeFeatures.js/HomeFeatures";
import AboutContent from "../Components/Home/HomeAbout/AboutContent";
import OurFeatureContent from "../Components/Home/OurFeatures/OurFeatureContent";
import HomeCourse from "../Components/Home/HomeCourse/HomeCourse";
import Hometestimonial from "../Components/Home/Hometestimonial/Hometestimonial";
import HomeNews from "../Components/Home/HomeNews/HomeNews";
const Home = () => {
  return (
    <>
      <div className="homepagewrapper">
        <HomeBanner />
      </div>
      <HomeOurSuccess />
      <HomeFeatures />
      <AboutContent />
      <OurFeatureContent />
      <HomeCourse />
      <Hometestimonial />
      <HomeNews />
    </>
  );
};

export default Home;
