import React from 'react';
import NavbarLuxe from '../components/AjioLuxe/NavbarLuxe';
import FooterLuxe from '../components/AjioLuxe/FooterLuxe';
import BodyLuxe from '../components/AjioLuxe/BodyLuxe';
import HeroBannerLuxe from '../components/AjioLuxe/HeroBannerLuxe';

const HomeLuxe = () => {
  return (
    <div>
      <NavbarLuxe/>
      <HeroBannerLuxe></HeroBannerLuxe>
      <BodyLuxe></BodyLuxe>
      
      <FooterLuxe></FooterLuxe>
    </div>
  );
};

export default HomeLuxe;
