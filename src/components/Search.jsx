import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({ setSearchValue }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchValue(inputValue);
    };
    return (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2, p: 2 }}>
            <Paper
                component="form"
                sx={{ p: "2px 6px", display: "flex", borderRadius: 4, width: 430 }}
                onSubmit={handleSubmit}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search for any IP address or domain"
                    inputProps={{ "aria-label": "search ip address or domain" }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>
    );
}
