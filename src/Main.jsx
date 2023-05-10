import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme  = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1b9823",
    },
    secondary: {
      main: "#b13fb1",
    },
  },
});

const router = createBrowserRouter([
  {
      path: "/", element: <Home/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);