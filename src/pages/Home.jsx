import { useState } from "react";
import { Container, Typography } from "@mui/material";
import Search from "../components/Search.jsx";
import LeafletMap from "../components/LeafletMap.jsx";
import IPAddressDetails from "../components/IPAddressDetails.jsx";
import Footer from "../components/Footer.jsx";
import AlertDialog from "../components/AlertDialog.jsx";
import "./Home.css";
export default function Home() {
    const [IPDetails, setIPDetails] = useState(null);
    const [dialog, setDialog] = useState({ open: false, message: "" });

    return (
        <Container
            className="home-container"
            maxWidth={false}
            sx={{
                height: "100vh",
                width: "100vw",
            }}
        >
            <Typography align="center" fontSize={"3vh"} color="white" sx={{ paddingTop: 2 }}>
                IP Address Tracker
            </Typography>
            <Search setIPDetails={setIPDetails} setDialog={setDialog} />
            {IPDetails ? (
                <>
                    <IPAddressDetails IPDetails={IPDetails} />
                </>
            ) : (
                <Typography align="center" fontSize={"2vh"} color="white">
                    Loading...
                </Typography>
            )}
            <AlertDialog open={dialog.open} errorMessage={dialog.message} setDialog={setDialog} />
            <LeafletMap IPDetails={IPDetails} />
            <Footer />
        </Container>
    );
}
