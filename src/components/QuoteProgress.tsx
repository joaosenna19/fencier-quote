import React from "react";
import QuoteStep from "./QuoteStep";

interface QuoteProgressProps {
  step: string;
}
function QuoteProgress({ step }: QuoteProgressProps) {
  const steps = [
    { name: "Contact Information", component: "ProjectDetails" },
    { name: "Find your House on the Map", component: "SearchAddress" },
    { name: "Draw your Fence", component: "GoogleMaps" },
    { name: "Choose your Materials", component: "MaterialSelection" },
    { name: "Summary", component: "QuoteSummary" },
  ];

  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <h2 className="text-2xl font-bold">Quote Progress</h2>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        Track your quote generation progress.
      </p>
      <div className="mt-6 space-y-4">
        {steps.map((stepItem, index) => {
          const isActive = step === stepItem.component;
          const isCompleted =
            steps.findIndex((s) => s.component === step) > index;

          return (
            <QuoteStep
              key={stepItem.component}
              stepName={stepItem.name}
              isActive={isActive}
              isCompleted={isCompleted}
            />
          );
        })}
      </div>
    </div>
  );
}

export default QuoteProgress;
