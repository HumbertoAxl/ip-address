import { AppBar, Box, IconButton, Link, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
    return (
        <AppBar position="" color="transparent" sx={{ top: "auto", bottom: 0 }}>
            <Toolbar sx={{ alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant="body1" color="white">
                    Humberto Axl &copy; {new Date().getFullYear()}
                </Typography>
                <Box>
                    <IconButton
                        aria-label="GitHub"
                        component={Link}
                        href="https://github.com/HumbertoAxl/ip-address"
                        target="_blank"
                        rel="noopener"
                    >
                        <GitHubIcon color="text" />
                    </IconButton>
                    <IconButton
                        aria-label="LinkedIn"
                        component={Link}
                        href="https://www.linkedin.com/in/humbertoaxl/"
                        target="_blank"
                        rel="noopener"
                    >
                        <LinkedInIcon color="text" />
                    </IconButton>
                    <IconButton
                        aria-label="Email"
                        component={Link}
                        href="mailto:humbertoaxl@gmail.com"
                        target="_blank"
                        rel="noopener"
                    >
                        <EmailIcon color="text" />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
