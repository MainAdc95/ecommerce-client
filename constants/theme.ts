import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = (mode: "dark" | "light") =>
    createTheme({
        palette: {
            primary: {
                main: red[800],
            },
            secondary: {
                main: "#aa00ff",
            },
            mode,
        },
    });

export default theme;
