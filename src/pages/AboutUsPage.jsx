import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import Banner from "../components/common/Banner";
import BreadCrumb from "../components/common/BreadCrumb";
import GeneralAbout from "../components/GeneralAbout";
import Footer from "../components/common/Footer";
import aboutBanner from "../assets/bg/Rental.jpeg";
import ScrollToTop from "../components/common/ScrollToTop";
import { Helmet } from "react-helmet-async";
function AboutUsPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Harleen Realtors™</title>
      </Helmet>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner imageUrl={aboutBanner} title={"About Us"} />
      <BreadCrumb currentPage={"About us"} />
      <GeneralAbout />
      <Footer />
    </>
  );
}

export default AboutUsPage;
