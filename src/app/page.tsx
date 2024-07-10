"use client";

import QuoteProgress from "@/components/QuoteProgress";
import Header from "@/components/Header";
import React, { useState } from "react";
import PersonalDetails from "@/components/PersonalDetails";
import MaterialSelection from "@/components/MaterialSelection";
import GoogleMaps from "@/components/GoogleMaps";
import QuoteSummary from "@/components/QuoteSummary";

export default function Component() {
  const [activeComponent, setActiveComponent] =
    useState<string>("PersonalDetails");

  const handleNext = (nextStep: string) => {
    setActiveComponent(nextStep);
  };

  const [quote, setQuote] = useState([] || {});

  const handleQuote = (quote: any) => {
    setQuote(quote);
    console.log("Going forward:", JSON.stringify(quote));
  };

  const handleBack = (previousStep: string) => {
    setActiveComponent(previousStep);
    console.log("Step Back", JSON.stringify(quote));
  };

  return (
    <>
      <Header />
      <div className="flex flex-col ">
        <div className="flex flex-col md:flex-row my-10 m-6 gap-10 justify-evenly">
          <QuoteProgress step={activeComponent} />
          <PersonalDetails
            isActive={activeComponent === "PersonalDetails"}
            onClickNext={handleNext}
            quote={quote}
            onQuote={handleQuote}
          />
          <GoogleMaps
            isActive={activeComponent === "GoogleMaps"}
            onClickNext={handleNext}
            quote={quote}
            onQuote={handleQuote}
            onBack={handleBack}
          />
          <MaterialSelection
            isActive={activeComponent === "MaterialSelection"}
            onClickNext={handleNext}
            quote={quote}
            onQuote={handleQuote}
            onBack={handleBack}
          />
          <QuoteSummary
            isActive={activeComponent === "QuoteSummary"}
            quote={quote}
          />
        </div>
      </div>
    </>
  );
}
