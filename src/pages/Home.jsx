import { useState } from "react";
import { Container, Typography } from "@mui/material";
import Search from "../components/Search.jsx";
import LeafletMap from "../components/LeafletMap.jsx";
import IPAddressDetails from "../components/IPAddressDetails.jsx";
import "./Home.css";
export default function Home() {
    const [searchValue, setSearchValue] = useState(null);
    const [IPDetails, setIPDetails] = useState(null);

    return (
        <Container
            className="home-container"
            maxWidth={false}
            sx={{
                height: "100vh",
                width: "100vw",
            }}
        >
            <Typography align="center" fontSize={40} color="white" sx={{ paddingTop: 2 }}>
                IP Address Tracker
            </Typography>
            <Search setSearchValue={setSearchValue} />
            {IPDetails ? (
                <>
                    <IPAddressDetails IPDetails={IPDetails} />
                </>
            ) : (
                <Typography align="center" fontSize={20} color="white">
                    Loading...
                </Typography>
            )}
                    <LeafletMap searchValue={searchValue} setIPDetails={setIPDetails} />
        </Container>
    );
}
