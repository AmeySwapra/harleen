import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import Banner from "../components/common/Banner";
import BreadCrumb from "../components/common/BreadCrumb";
import Testimonial from "../components/Testimonial";
import Footer from "../components/common/Footer";
import testimonialBanner from "../assets/bg/testimonials.jpeg";
import PriceCard from "../components/common/PriceCard";
import ScrollToTop from "../components/common/ScrollToTop";
import { Helmet } from "react-helmet-async";
function TestimonialPage() {
  return (
    <>
      <Helmet>
        <title>Testimonials - Harleen Realtors™</title>
      </Helmet>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner imageUrl={testimonialBanner} title={"Testimonials"} />
      <BreadCrumb currentPage={"Testimonial"} />
      <Testimonial />
      <PriceCard />
      <Footer />
    </>
  );
}

export default TestimonialPage;
