import dynamic from "next/dynamic";
import React, { useState, useRef } from "react";
import { StepDetails } from "@/interfaces/step-details";
import {
  APIProvider,
  useAdvancedMarkerRef,
  AdvancedMarker,
  ControlPosition,
} from "@vis.gl/react-google-maps";
import MapHandler from "@/components/MapHandler";
import PlaceAutocomplete from "@/components/PlaceAutocomplete";
import DrawingManagerWrapper from "@/components/DrawingManagerWrapper";
import { Button } from "@/components/ui/button";
import { parseAddress } from "@/utils/utils";
import { useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Map = dynamic(
  () => import("@vis.gl/react-google-maps").then((mod) => mod.Map),
  { ssr: false }
);
const MapControl = dynamic(
  () => import("@vis.gl/react-google-maps").then((mod) => mod.MapControl),
  { ssr: false }
);

export default function GoogleMaps(props: StepDetails) {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [totalPolylineLength, setTotalPolylineLength] = useState<number>(0);
  const [finalLength, setFinalLength] = useState<number | null>(null);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [shouldClearShapes, setShouldClearShapes] = useState<boolean>(false);
  const shapesRef = useRef<(google.maps.Polyline | google.maps.Polygon)[]>([]);
  const [doubleGate, setDoubleGate] = useState<boolean>(false);
  const { toast } = useToast();

  const isActive = props.isActive;

  if (!isActive) {
    return null;
  }

  const clearShapes = () => {
    shapesRef.current.forEach((shape) => shape.setMap(null));
    shapesRef.current = [];
    setTotalPolylineLength(0);
    setShouldClearShapes(true);
  };

  const handleSwitchChange = (checked: boolean) => {
    setDoubleGate(checked);
    console.log("Double Gate: ", checked);
  };

  const handleDone = () => {
    if (!localStorage.getItem("selectedAddress")) {
      toast({
        title: "No address selected",
        description: "Please select an address before proceeding",
        variant: "destructive",
      });
    } else {
      setFinalLength(totalPolylineLength);
      setIsDone(true);
    }
  };

  const handleNextStep = () => {
    const address = parseAddress(localStorage.getItem("selectedAddress") ?? "");
    if (!address) {
      toast({
        title: "No address selected",
        description: "Please select an address before proceeding",
        variant: "destructive",
      });
    } else {
      props.onQuote([
        ...props.quote,
        address,
        { length: finalLength, singleGate: doubleGate ? false : true },
      ]);
      setIsDone(false);
      clearShapes();
      props.onClickNext("MaterialSelection");
    }
  };

  const handleStepBack = () => {
    if (props.onBack) {
      clearShapes();
      setIsDone(false);
      props.onQuote(
        props.quote.slice(0, 0).filter((item) => Object.keys(item).length !== 0)
      );
      props.onBack("PersonalDetails");
    }
  };

  const hasShapes = shapesRef.current.length > 0;

  return (
    <div className="col-span-2 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <h2 className="text-2xl font-bold">Draw your desired fence</h2>
      <p className="m-2 text-gray-500 dark:text-gray-400">
        Search for your address. Use the map to draw the outline of your fence.
        Click on the map to draw a line, and double-click to finish drawing.
      </p>

      <APIProvider
        apiKey={API_KEY}
        solutionChannel="GMP_devsite_samples_v3_rgmautocomplete"
        libraries={["places", "drawing"]}
      >
        <Map
          style={{ width: "70vw", height: "50vh" }}
          defaultCenter={{ lat: 51.049999, lng: -114.066666 }}
          defaultZoom={10}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapTypeId={"satellite"}
          mapId="DEMO_MAP_ID"
        >
          <AdvancedMarker ref={markerRef} position={null} />
          <DrawingManagerWrapper
            setTotalPolylineLength={setTotalPolylineLength}
            shapesRef={shapesRef}
            shouldClearShapes={shouldClearShapes}
            onClearShapesHandled={() => setShouldClearShapes(false)}
          />
        </Map>

        <MapControl position={ControlPosition.BOTTOM}>
          <div className="autocomplete-control">
            <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
          </div>
        </MapControl>
        <MapControl position={ControlPosition.TOP}></MapControl>
        <MapHandler place={selectedPlace} marker={marker} />
        {totalPolylineLength > 0 && (
          <div className="mt-2 flex flex-col">
            <p className="text-lg font-bold">
              Total Length: {totalPolylineLength.toFixed(2)}ft
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <Switch
                checked={doubleGate}
                onCheckedChange={handleSwitchChange}
              />
              <Label htmlFor="">Double Gate</Label>
            </div>
          </div>
        )}
      </APIProvider>
      <div className="mt-2 flex justify-end">
        {!isDone && hasShapes && (
          <Button onClick={clearShapes} variant="destructive" className="mr-2">
            Clear Drawings
          </Button>
        )}
        {!isDone && hasShapes && (
          <Button
            onClick={handleDone}
            className="bg-green-500 hover:bg-green-600"
          >
            I'm Done
          </Button>
        )}
      </div>
      {isDone && (
        <div className="flex justify-between">
          <Button className="ml-auto" onClick={handleNextStep}>
            Next Step
          </Button>
        </div>
      )}
      <Button
        className="w-full sm:w-auto mt-1"
        variant="outline"
        onClick={handleStepBack}
      >
        Previous Step
      </Button>
    </div>
  );
}
