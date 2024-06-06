import React, { useEffect, useState } from "react";
import {
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { StepDetails } from "@/interfaces/step-details";

interface Material {
  id: string;
  name: string;
  styles: {
    id: string;
    name: string;
    colors: {
      id: string;
      name: string;
    }[];
  }[];
}

export default function OptionSelection(props: StepDetails) {
  const [materials, setMaterials] = useState<Material[]>([]);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await fetch(
          "https://fencier-api.onrender.com/material"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch materials");
        }
        const data = await response.json();
        setMaterials(data);
        console.log("Materials:", data);
      } catch (error) {
        console.error("Error fetching materials:", error);
      }
    };

    fetchMaterials();
  }, []);

  const handlePrevious = () => {
    // Placeholder function for navigating to the previous item
    console.log("Navigating to previous item");
  };

  const handleNext = () => {
    // Placeholder function for navigating to the next item
    console.log("Navigating to next item");
  };

  const isActive = props.isActive;

  if (!isActive) {
    return null;
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Select Your Perfect Product
            </h1>
            <p className="text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
              Choose from our wide selection of products to find the one that
              suits your needs.
            </p>
          </div>
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
            {materials.map((material) => (
              <div key={material.id}>
                {/* Carousel and content for each material */}
                <h2 className="text-xl font-semibold tracking-tight md:text-2xl lg:text-3xl">
                  {material.name}
                </h2>
                <Carousel className="w-full">
                  <CarouselContent>
                    {/* Content for each style */}
                    {material.styles.map((style) => (
                      <div key={style.id}>
                        <h3 className="text-lg font-semibold">{style.name}</h3>
                        <Carousel className="w-full">
                          <CarouselContent>
                            {/* Content for each color */}
                            {style.colors.map((color) => (
                              <div key={color.id}>
                                <p>{color.name}</p>
                              </div>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                            onClick={handlePrevious}
                          >
                            {/* Left arrow icon */}
                          </CarouselPrevious>
                          <CarouselNext
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                            onClick={handleNext}
                          >
                            {/* Right arrow icon */}
                          </CarouselNext>
                        </Carousel>
                      </div>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                    onClick={handlePrevious}
                  >
                    {/* Left arrow icon */}
                  </CarouselPrevious>
                  <CarouselNext
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
                    onClick={handleNext}
                  >
                    {/* Right arrow icon */}
                  </CarouselNext>
                </Carousel>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <Button className="w-full sm:w-auto" variant="outline">
              Previous Step
            </Button>
            <Button className="w-full sm:w-auto" onClick={handleNext}>
              Next Step
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowLeftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
