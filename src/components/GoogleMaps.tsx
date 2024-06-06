import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface StepDetails {
  isActive: boolean;
  onClickNext: (nextStep: string) => void;
}

function GoogleMaps(props: StepDetails) {
  const handleNext = () => {
    props.onClickNext("MaterialSelection");
  };
  const isActive = props.isActive;

  if (!isActive) {
    return null;
  }

  return (
    <div className="col-span-2 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <h2 className="text-2xl font-bold">Placeholder for Google Maps</h2>
      <p className="mt-2 text-gray-500 dark:text-gray-400">
        In production, the user will be able to draw the fence on their land,
        using Google Maps API
      </p>
      <form className="mt-6 space-y-4">
        <div>
          <Label htmlFor="fake-length">
            Provide the length of your fence - in ft
          </Label>
          <Input id="fake-length" placeholder="" />
          <div className="flex justify-between m-4">
            <Button className="w-full sm:w-auto" variant="outline">
              Previous Step
            </Button>
            <Button className="ml-auto" onClick={handleNext}>
              Next Step
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GoogleMaps;
