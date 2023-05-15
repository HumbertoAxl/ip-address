import L from "leaflet";
import { useState, useEffect } from "react";
import { useMap } from "react-leaflet/hooks";
import { Box, Skeleton } from "@mui/material";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./LeafletMap.css"

L.Icon.Default.imagePath = "../../assets/leaflet_images/";

export default function LeafletMap({ IPDetails }) {
    const [position, setPosition] = useState(null);
    useEffect(() => {
        if (IPDetails !== null) {
          setPosition({ lat: IPDetails.lat, lon: IPDetails.lon });
        }
      }, [IPDetails]);

    function FlyMapTo() {
        const map = useMap();
        useEffect(() => {
            map.flyTo(position, map.getZoom(), { animate: true });
        });

        return null;
    }


    if (position) {
        return (
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    {position ? <FlyMapTo /> : ""}
                </Marker>
            </MapContainer>
        );
    } else {
        return (
            <Skeleton height="75vh" animation="wave">
                <Box className="leaflet-container"></Box>
            </Skeleton>
        );
    }
}
