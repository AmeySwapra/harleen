import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Banner from "../components/common/Banner";
import disclaimerbanner from "../assets/bg/disclaimer.jpeg";
import BreadCrumb from "../components/common/BreadCrumb";
import PropertyDetailSection from "../components/PropertyDetailSection";
import ScrollToTop from "../components/common/ScrollToTop";
import { Helmet } from "react-helmet-async";
function DisclaimerPage() {
  return (
    <>
      <Helmet>
        <title>Disclaimer - Harleen Realtors™</title>
      </Helmet>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner imageUrl={disclaimerbanner} title={"Disclaimer"} />
      <BreadCrumb currentPage={"Disclaimer"} />
      <PropertyDetailSection />
      <Footer />
    </>
  );
}

export default DisclaimerPage;
