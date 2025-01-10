import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import Banner from "../components/common/Banner";
import BreadCrumb from "../components/common/BreadCrumb";
import Team from "../components/Team";
import Footer from "../components/common/Footer";
import teambanner from "../assets/bg/team.jpeg";
import ScrollToTop from "../components/common/ScrollToTop";
import { Helmet } from "react-helmet-async";
function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Our Team - Harleen Realtors™</title>
      </Helmet>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner imageUrl={teambanner} title={"Our Team"} />
      <BreadCrumb currentPage={"Team"} />
      <Team />
      <Footer />
    </>
  );
}

export default TeamPage;
