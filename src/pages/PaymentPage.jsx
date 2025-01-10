import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import BreadCrumb from "../components/common/BreadCrumb";
import Banner from "../components/common/Banner";
import paymentbanner from "../assets/bg/payment.jpg";
import Consultation from "../components/Consultation";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import { Helmet } from "react-helmet-async";
function PaymentPage() {
  return (
    <>
      <Helmet>
        <title>Payment - Harleen Realtors™</title>
      </Helmet>
      <ScrollToTop />
      <Topbar />
      <Header />
      <Banner imageUrl={paymentbanner} title="Make a Payment" />
      <BreadCrumb currentPage={"Payment"} />
      <Consultation />
      <Footer />
    </>
  );
}

export default PaymentPage;
