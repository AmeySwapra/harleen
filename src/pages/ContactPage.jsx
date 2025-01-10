import React from "react";
import Footer from "../components/common/Footer";
import Contact from "../components/Contact";
import Header from "../components/common/Header";
import { Helmet } from "react-helmet-async";
import Banner from "../components/common/Banner";
import contactBanner from "../assets/bg/contact-banner.jpeg";
import Topbar from "../components/common/Topbar";
import BreadCrumb from "../components/common/BreadCrumb";
import ScrollToTop from "../components/common/ScrollToTop";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact - Harleen Realtors™</title>
      </Helmet>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner imageUrl={contactBanner} title="Contact Us" />
      <BreadCrumb currentPage={"Contact"} />
      <Contact />
      <Footer />
    </>
  );
}

export default ContactPage;
