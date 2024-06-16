"use client";

import QuoteProgress from "@/components/QuoteProgress";
import Header from "@/components/Header";
import React, { useState } from "react";
import ProjectDetails from "@/components/ProjectDetails";
import MaterialSelection from "@/components/OptionSelection";
import SearchAddress from "@/components/SearchAddress";
import GoogleMaps from "@/components/GoogleMaps";
import QuoteSummary from "@/components/QuoteSummary";

export default function Component() {
  const [activeComponent, setActiveComponent] = useState("ProjectDetails");

  const handleNext = (nextStep: string) => {
    setActiveComponent(nextStep);
  };

  const [quote, setQuote] = useState([] || {});

  const handleQuote = (quote: any) => {
    setQuote(quote);
    console.log("I'm here", JSON.stringify(quote));
  };

  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row my-10 m-6 gap-10">
          <QuoteProgress />
          <ProjectDetails
            isActive={activeComponent === "ProjectDetails"}
            onClickNext={handleNext}
            quote={quote}
            onQuote={handleQuote}
          />
          <SearchAddress
            isActive={activeComponent === "SearchAddress"}
            onClickNext={handleNext}
            quote={quote}
            onQuote={handleQuote}
          />
          <GoogleMaps
            isActive={activeComponent === "GoogleMaps"}
            onClickNext={handleNext}
            quote={quote}
            onQuote={handleQuote}
          />
          <MaterialSelection
            isActive={activeComponent === "MaterialSelection"}
            onClickNext={handleNext}
            quote={quote}
            onQuote={handleQuote}
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
