import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import SearchBox from "../components/common/SearchBox";
import { Helmet } from "react-helmet-async";
import Topbar from "../components/common/Topbar";
import ServicesSection from "../components/common/ServicesSection";
import HomeCard from "../components/HomeCard";
import ImageCarousel from "../components/ImageCarousel";
import PropertyList from "../components/common/PropertyList";
import ScrollToTop from "../components/common/ScrollToTop";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>
          Trescorealty – Property Consultant Pune l Real Estate Property Agents
          in Pune l Tresco Realty l Residential Apartment for Sale in Pune l
          Commercial Space for sale in Pune l Distress sale in Pune
        </title>
      </Helmet>
      <ScrollToTop />
      <Topbar />
      <Header />
      <HomeCard />
      <SearchBox />
      <ServicesSection isHomepage={true} />
      <PropertyList viewType="homepage" />
      <ImageCarousel />
      <Footer />
    </>
  );
}

export default HomePage;
