import L from "leaflet";
import { useState, useEffect } from "react";
import { useMap } from "react-leaflet/hooks";
import { Box, Skeleton } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./LeafletMap.css"

L.Icon.Default.imagePath = "../../assets/leaflet_images/";

export default function LeafletMap({ searchValue, setIPDetails }) {
    useEffect(() => {
        searchValue ? fetchData(searchValue) : fetchData("");
    }, [searchValue]);
    const [position, setPosition] = useState(null);
    function FlyMapTo() {
        const map = useMap();
        useEffect(() => {
            map.flyTo(position, map.getZoom(), { animate: true });
        });

        return null;
    }
    const fetchData = async (ipAddress) => {
        const response = await fetch(`https://ip.humbertoaxl.dev/api/${ipAddress}`);
        const data = await response.json();
        if (data.status === "success") {
            setPosition([data.lat, data.lon]);
            setIPDetails(data);
        } else {
            alert("IP Address not found.");
        }
    };

    if (position) {
        return (
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    {position ? <FlyMapTo /> : ""}
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
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
