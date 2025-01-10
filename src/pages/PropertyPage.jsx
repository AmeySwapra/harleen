import React from "react";
import Topbar from "../components/common/Topbar";
import Header from "../components/common/Header";
import PropertyList from "../components/common/PropertyList";
import Footer from "../components/common/Footer";
import SearchBox from "../components/common/SearchBox";
import BreadCrumb from "../components/common/BreadCrumb";
import PropertyType from "../components/common/PropertyType";
import PropertyStatus from "../components/common/PropertyStatus";
import { Box, Flex } from "@chakra-ui/react";
import PropertyCards from "../components/common/PropertyCards";
import Note from "../components/common/Note";
import ScrollToTop from "../components/common/ScrollToTop";
import { Helmet } from "react-helmet-async";

function PropertyPage() {
  return (
    <>
      <Helmet>
        <title>Properties - Harleen Realtors™</title>
      </Helmet>
      <ScrollToTop />
      <Topbar />
      <Header />
      <SearchBox />
      <BreadCrumb currentPage={"Properties"} />
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        p={4}
      >
        <Box w={{ base: "100%", md: "20%" }} p={4}>
          <Note />
          <PropertyType />
          <PropertyStatus />
          <PropertyCards />
        </Box>

        <Box w={{ base: "100%", md: "75%" }} p={4}>
          <PropertyList viewType="other" />
        </Box>
      </Flex>
      <Footer />
    </>
  );
}

export default PropertyPage;
