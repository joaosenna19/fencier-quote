import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { StepDetails } from "@/interfaces/step-details";
import { Card, CardContent, CardTitle, CardHeader } from "./ui/card";
import Image from "next/image";
import { createQuote } from "@/apiFunctions/create-quote";
import { IncomingQuote } from "@/apiFunctions/create-quote";

interface Material {
  id: string;
  name: string;
  styles: {
    id: string;
    name: string;
    colors: {
      id: string;
      name: string;
      heights: {
        id: string;
        feet: string;
      }[];
    }[];
  }[];
}

export default function OptionSelection(props: StepDetails) {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(
    null
  );
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedHeight, setSelectedHeight] = useState<string | null>(null);

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

  const handleNextStep = () => {
    if (selectedMaterial && selectedStyle && selectedColor && selectedHeight) {
      const [userInfo, addressInfo, details] = props.quote;
      const tenantId = "aa815619-4db7-4b79-a33f-9b51426db757";
      const quote: IncomingQuote = [userInfo, addressInfo, details];

      createQuote(
        quote,
        selectedMaterial.id,
        selectedStyle,
        selectedColor,
        selectedHeight,
        tenantId
      );
    } else {
      console.error(
        "All selections must be made before proceeding to the next step."
      );
    }
  };

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
            <h3 className="text-gray-500 font-semibold dark:text-gray-400 md:text-lg lg:text-xl">
              Choose the material
            </h3>
            <div className="flex justify-around">
              {materials.map((material) => (
                <Card
                  className={`w-[350px] m-2 ${
                    selectedMaterial?.id === material.id
                      ? "border-2 border-blue-500"
                      : ""
                  }`}
                  key={material.id}
                  onClick={() => handleMaterialSelect(material)}
                >
                  <CardHeader>
                    <CardTitle className="text-center">
                      {material.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Image src="/images.png" alt="" width="100" height="50" />
                  </CardContent>
                </Card>
              ))}
            </div>
            {selectedMaterial && (
              <>
                <h3 className="text-gray-500 font-semibold dark:text-gray-400 md:text-lg lg:text-xl">
                  Choose the style
                </h3>
                <div className="flex justify-around">
                  {selectedMaterial.styles.map((style) => (
                    <Card
                      key={style.id}
                      className={`w-[350px] m-2 ${
                        selectedStyle === style.id
                          ? "border-2 border-blue-500"
                          : ""
                      }`}
                      onClick={() => handleStyleSelect(style.id)}
                    >
                      <CardHeader>
                        <CardTitle className="text-center">
                          {style.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex justify-center">
                        <Image
                          src="/images.png"
                          alt=""
                          width="100"
                          height="50"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
            {selectedMaterial && selectedStyle && (
              <>
                <h3 className="text-gray-500 font-semibold dark:text-gray-400 md:text-lg lg:text-xl">
                  Choose the color
                </h3>
                <div className="flex justify-around">
                  {selectedMaterial.styles
                    .find((style) => style.id === selectedStyle)
                    ?.colors.map((color) => (
                      <Card
                        key={color.id}
                        className={`w-[350px] m-2 ${
                          selectedColor === color.id
                            ? "border-2 border-blue-500"
                            : ""
                        }`}
                        onClick={() => handleColorSelect(color.id)}
                      >
                        <CardHeader>
                          <CardTitle className="text-center">
                            {color.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                          <Image
                            src="/images.png"
                            alt=""
                            width="100"
                            height="50"
                          />
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </>
            )}
            {selectedMaterial && selectedStyle && selectedColor && (
              <>
                <h3 className="text-gray-500 font-semibold dark:text-gray-400 md:text-lg lg:text-xl">
                  Choose the height
                </h3>
                <div className="flex justify-around">
                  {selectedMaterial.styles
                    .find((style) => style.id === selectedStyle)
                    ?.colors.find((color) => color.id === selectedColor)
                    ?.heights.map((height) => (
                      <Card
                        key={height.id}
                        className={`w-[350px] m-2 ${
                          selectedHeight === height.id
                            ? "border-2 border-blue-500"
                            : ""
                        }`}
                        onClick={() => handleHeightSelect(height.id)}
                      >
                        <CardHeader>
                          <CardTitle className="text-center">
                            {height.feet} ft
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                          <Image
                            src="/images.png"
                            alt=""
                            width="100"
                            height="50"
                          />
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </>
            )}
          </div>
          <div className="flex justify-between">
            <Button className="w-full sm:w-auto" variant="outline">
              Previous Step
            </Button>
            <Button className="w-full sm:w-auto" onClick={handleNextStep}>
              Next Step
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
