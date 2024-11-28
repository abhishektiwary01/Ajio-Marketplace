import React from "react";
import NavbarAjio from "../components/NavbarAjio";
import FooterAjio from "../components/FooterAjio";
import HeroBannerAjio from "../components/HeroBannerAjio";
import BodyAjio from "../components/BodyAjio";

const Home = () => {
  return (
    <div>
      <NavbarAjio />
      <HeroBannerAjio></HeroBannerAjio>
      <BodyAjio></BodyAjio>
      <FooterAjio/>
    </div>
   
  );
};

export default Home;
