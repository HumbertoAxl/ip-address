import { useEffect, useState } from "react";
import { Box, InputBase, IconButton, Paper } from "@mui/material/";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({ setIPDetails, setDialog }) {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        fetchData("ip.humbertoaxl.dev");
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData(inputValue.trim().replace("http://", "").replace("https://", ""));
    };

    const fetchData = async (ipAddress) => {
        const response = await fetch(`https://ip.humbertoaxl.dev/api/${ipAddress}`);
        const data = await response.json();
        if (data.status === "success") {
            data.URL = ipAddress;
            setIPDetails(data);
            setDialog({ open: false, message: "" });
        } else {
            if (ipAddress.includes("/")) {
                setDialog({
                    open: true,
                    message:
                        "Sorry, the API cannot process search queries that include slashes or paths. Try again :)",
                });
            } else {
                setDialog({ open: true, message: "IP Address not found." });
            }
        }
    };
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                mb: 2.5,
                p: 2,
            }}
        >
            <Paper
                component="form"
                sx={{ p: "2px 6px", display: "flex", borderRadius: 4, width: 400 }}
                onSubmit={handleSubmit}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search for any IP address or domain"
                    inputProps={{ "aria-label": "search ip address or domain" }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <IconButton
                    disabled={!inputValue}
                    type="submit"
                    sx={{ p: "10px" }}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>
    );
}
