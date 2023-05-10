import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function IPAddressDetails({ IPDetails }) {
  const [cardContent, setCardContent] = useState([]);

  useEffect(() => {
    if (IPDetails !== null && IPDetails.status === "success") {
      setCardContent([
        {
          label: "IP Address",
          data: IPDetails.query,
        },
        {
          label: "Location",
          data: IPDetails.city,
        },
        {
          label: "Timezone",
          data: IPDetails.timezone,
        },
        {
          label: "ISP",
          data: IPDetails.isp,
        },
      ]);
    }
  }, [IPDetails]);

  return (
    <Box backgroundColor="white" sx={{ my: 4, mx: 2 }} borderRadius={1}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {cardContent.map((content, index) => {
          return (
            <Grid item key={index} xs={3}>
              <Card
                sx={{
                  borderRight:
                    index !== cardContent.length - 1
                      ? "1px solid #E0E0E0"
                      : "none",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography color="text.secondary" gutterBottom>
                    {content.label}
                  </Typography>
                  <Typography
                    fontWeight="bold"
                    sx={{ fontSize: 25, mb: 1.5 }}
                  >
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
