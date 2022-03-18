import { useState, useEffect, useRef } from "react";
import { useMap, FeatureGroup } from "react-leaflet";
import MapMarker from "./MapMarker";

const KmlLayer = ({ t, path, centered }) => {
  const [data, setData] = useState();
  const ref = useRef();
  const map = useMap();

  useEffect(() => {
    const init = async () => {
      const kmlRequest = await fetch(path);
      setData(await kmlRequest.json());
    }

    init();
  }, [path]);

  useEffect(() => {
    if (map && ref.current) {
      const bounds = ref.current.getBounds();
      if (bounds.isValid())
        map.fitBounds(bounds);
    }
  }, [map, centered, data, ref]);

  return (
    <FeatureGroup ref={ref}>
      {
        data && data.map((item, index) => {
          return (
            <MapMarker t={t} key={index} {...item} />
          );
        })
      }
    </FeatureGroup>
  );
}

export default KmlLayer;
