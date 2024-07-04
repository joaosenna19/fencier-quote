import React, { useEffect, useState } from "react";
import { useDrawingManager } from "@/hooks/useDrawingManager";
import { metersToFeet } from "@/utils/utils";

interface DrawingManagerWrapperProps {
  setTotalPolylineLength: (length: number) => void;
  shapesRef: React.MutableRefObject<
    (google.maps.Polyline | google.maps.Polygon)[]
  >;
}

const DrawingManagerWrapper: React.FC<DrawingManagerWrapperProps> = ({
  setTotalPolylineLength,
  shapesRef,
}) => {
  const drawingManager = useDrawingManager();
  const [localTotalLength, setLocalTotalLength] = useState(0);

  useEffect(() => {
    if (drawingManager) {
      google.maps.event.addListener(
        drawingManager,
        "overlaycomplete",
        (event: { type: google.maps.drawing.OverlayType; overlay: any }) => {
          const shape = event.overlay;
          shape.type = event.type;
          shapesRef.current.push(shape);

          if (event.type === google.maps.drawing.OverlayType.POLYLINE) {
            const polyline = shape as google.maps.Polyline;
            const path = polyline.getPath();
            let length = 0;
            for (let i = 0; i < path.getLength() - 1; i++) {
              length += google.maps.geometry.spherical.computeDistanceBetween(
                path.getAt(i),
                path.getAt(i + 1)
              );
            }
            const lengthInFeet = Math.floor(metersToFeet(length));
            const newTotalLength = localTotalLength + lengthInFeet;
            setLocalTotalLength(newTotalLength);
            setTotalPolylineLength(newTotalLength);
          }
        }
      );
    }
  }, [drawingManager, setTotalPolylineLength, shapesRef, localTotalLength]);

  return null;
};

export default DrawingManagerWrapper;
