import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import PaymentPage from "./pages/PaymentPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import EventPage from "./pages/EventPage";
import TestimonialPage from "./pages/TestimonialPage";
import ServicesPage from "./pages/ServicesPage";
import AboutUsPage from "./pages/AboutUsPage";
import TeamPage from "./pages/TeamPage";
import PropertyPage from "./pages/PropertyPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about/us" element={<AboutUsPage />} />
          <Route path="/about/team" element={<TeamPage />} />
          <Route path="/properties" element={<PropertyPage />} />
          <Route path="/property-details" element={<PropertyDetailPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/service" element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
