import React from "react";
import Contact from "../Contact/Contact";
import DisplayReview from "./DisplayReview/DisplayReview";
import MidSection from "./MidSection/MidSection";
import Services from "./Services/Services";
import TopBanner from "./TopBanner/TopBanner";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <MidSection />
      <Services />
      <DisplayReview />
      <Contact />
    </div>
  );
}
