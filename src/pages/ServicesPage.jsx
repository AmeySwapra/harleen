import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import Banner from "../components/common/Banner";
import BreadCrumb from "../components/common/BreadCrumb";
import ServicesSection from "../components/common/ServicesSection";
import Footer from "../components/common/Footer";
import serviceBanner from "../assets/bg/service-banner.jpeg";
import ScrollToTop from "../components/common/ScrollToTop";
import { Helmet } from "react-helmet-async";
function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services - Harleen Realtors™</title>
      </Helmet>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner imageUrl={serviceBanner} title={"Services"} />
      <BreadCrumb currentPage={"Services"} />
      <ServicesSection isHomepage={false} />
      <Footer />
    </>
  );
}

export default ServicesPage;
