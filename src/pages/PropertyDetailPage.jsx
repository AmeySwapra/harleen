import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import SearchBox from "../components/common/SearchBox";
import PropertyStatus from "../components/common/PropertyStatus";
import PropertyType from "../components/common/PropertyType";
import OfficeAddress from "../components/common/OfficeAddress";
import Detail from "../components/common/Detail";
import Features from "../components/common/Features";
import PropertyAddress from "../components/common/PropertyAdress";
import PropertyDescription from "../components/common/PropertyDescription";
import PropertyImage from "../components/common/PropertyImage";
import PropertyCards from "../components/common/PropertyCards";
import FloorPlans from "../components/common/FloorPlans";
import Topbar from "../components/common/Topbar";
import ScrollToTop from "../components/common/ScrollToTop";
import { Helmet } from "react-helmet-async";

function PropertyDetailPage() {
  return (
    <>
      <Helmet>
        <title>Propeties Details - Harleen Realtors™</title>
      </Helmet>
      <ScrollToTop />
      <Topbar />
      <Header />
      <SearchBox />
      <PropertyImage />

      <Grid
        templateColumns={{ base: "1fr", md: "3fr 1fr" }}
        gap={6}
        px={6}
        py={12}
      >
        <Box>
          <PropertyDescription />
          <PropertyAddress />
          <Detail />
          <Features />
          <FloorPlans />
        </Box>

        <Box>
          <OfficeAddress />
          <PropertyType />
          <PropertyStatus />
          <PropertyCards />
        </Box>
      </Grid>

      <Footer />
    </>
  );
}

export default PropertyDetailPage;
