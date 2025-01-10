import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import EventsSection from "../components/EventSection";
import Footer from "../components/common/Footer";
import BreadCrumb from "../components/common/BreadCrumb";
import Banner from "../components/common/Banner";
import eventsBanner from "../assets/bg/events-banner.jpeg";
import SearchBox from "../components/common/SearchBox";
import ScrollToTop from "../components/common/ScrollToTop";
import { Helmet } from "react-helmet-async";
function EventPage() {
  return (
    <>
      <Helmet>
        <title>Events - Harleen Realtors™</title>
      </Helmet>
      <ScrollToTop />
      <Topbar />
      <Header />
      <SearchBox />
      <Banner imageUrl={eventsBanner} title={"Events"} />
      <BreadCrumb currentPage={"Events"} />
      <EventsSection />
      <Footer />
    </>
  );
}

export default EventPage;
