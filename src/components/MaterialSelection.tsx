import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { StepDetails } from "@/interfaces/step-details";
import { createQuote, IncomingQuote } from "@/apiFunctions/create-quote";
import { Material } from "@/interfaces/material";
import { fetchMaterials } from "@/apiFunctions/fetchMaterials";
import SelectionSection from "./SelectionSection";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function MaterialSelection(props: StepDetails) {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
    null
  );
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedHeight, setSelectedHeight] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    const data = fetchMaterials();
    data.then((materials) => {
      setMaterials(materials);
    });
  }, []);

  const isActive = props.isActive;

  const handleMaterialSelect = (material: Material) => {
    setSelectedMaterial(material);
    setSelectedStyle(null);
    setSelectedColor(null);
    setSelectedHeight(null);
  };

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId);
    setSelectedColor(null);
    setSelectedHeight(null);
  };

  const handleColorSelect = (colorId: string) => {
    setSelectedColor(colorId);
    setSelectedHeight(null);
  };

  const handleHeightSelect = (heightId: string) => {
    setSelectedHeight(heightId);
  };

  const handleNextStep = async () => {
    setIsLoading(true);
    if (selectedMaterial && selectedStyle && selectedColor && selectedHeight) {
      const [userInfo, addressInfo, details] = props.quote;
      const tenantId = "aa815619-4db7-4b79-a33f-9b51426db757";
      const quote: IncomingQuote = [userInfo, addressInfo, details];
      const createdQuote = await createQuote(
        quote,
        selectedMaterial.id,
        selectedStyle,
        selectedColor,
        selectedHeight,
        tenantId
      );
      props.onQuote(createdQuote);
      props.onClickNext("QuoteSummary");
      setIsLoading(false);
    } else {
      toast({
        title: "Incomplete Selection",
        description: "Please select all the options before proceeding",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  if (!isActive) {
    return null;
  }

  return (
    <section className="w-full">
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
          <SelectionSection
            title="Choose the material"
            items={materials.map((material) => ({
              id: material.id,
              name: material.name,
              imageUrl: material.imageUrl,
            }))}
            selectedItem={selectedMaterial?.id || null}
            onSelect={(id) =>
              handleMaterialSelect(
                materials.find((material) => material.id === id)!
              )
            }
          />
          {selectedMaterial && (
            <SelectionSection
              title="Choose the style"
              items={selectedMaterial.styles.map((style) => ({
                id: style.id,
                name: style.name,
                imageUrl: style.imageUrl,
              }))}
              selectedItem={selectedStyle}
              onSelect={handleStyleSelect}
            />
          )}
          {selectedMaterial && selectedStyle && (
            <SelectionSection
              title="Choose the color"
              items={
                selectedMaterial.styles
                  .find((style) => style.id === selectedStyle)
                  ?.colors.map((color) => ({
                    id: color.id,
                    name: color.name,
                    imageUrl: color.imageUrl,
                  })) || []
              }
              selectedItem={selectedColor}
              onSelect={handleColorSelect}
            />
          )}
          {selectedMaterial && selectedStyle && selectedColor && (
            <SelectionSection
              title="Choose the height"
              items={
                selectedMaterial.styles
                  .find((style) => style.id === selectedStyle)
                  ?.colors.find((color) => color.id === selectedColor)
                  ?.heights.map((height) => ({
                    id: height.id,
                    name: `${height.feet} ft`,
                    imageUrl: height.imageUrl,
                  })) || []
              }
              selectedItem={selectedHeight}
              onSelect={handleHeightSelect}
            />
          )}
          <div className="flex justify-between">
            <Button className="w-full sm:w-auto" variant="outline">
              Previous Step
            </Button>
            <Button
              className="w-full bg-blue-500 sm:w-auto"
              onClick={handleNextStep}
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 animate-spin" size={16} />}
              {isLoading ? "Generating..." : "Get your quote"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
