import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function IPAddressDetails({ IPDetails }) {
    const [cardContent, setCardContent] = useState([]);

    useEffect(() => {
        if (IPDetails !== null && IPDetails.status === "success") {
            setCardContent([
                {
                    label: "URL",
                    data: IPDetails.URL,
                },
                {
                    label: "IP Address",
                    data: IPDetails.query,
                },
                {
                    label: "Location",
                    data: IPDetails.city,
                },
                {
                    label: "ISP",
                    data: IPDetails.isp,
                },
            ]);
        }
    }, [IPDetails]);

    return (
        <Box backgroundColor="white" sx={{ my: 0, mx: 0 }}>
            <Grid container spacing={"10px"} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                {cardContent.map((content, index) => {
                    return (
                        <Grid item key={index} xs={12} sm={6} lg={3} sx={{ p: "0 !important" }}>
                            <Card
                                elevation={0}
                                sx={{
                                    p: 0,
                                    borderRadius: 0,
                                    borderRight:
                                        index !== cardContent.length - 1
                                            ? "1px solid #ccc"
                                            : "none",
                                }}
                            >
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        py: "10px !important",
                                    }}
                                >
                                    <Typography color="text.secondary" gutterBottom>
                                        {content.label}
                                    </Typography>
                                    <Typography fontWeight="bold" sx={{ fontSize: "1.5vh" }}>
                                        {content.data}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}
