import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";

export const AnimatedBox = styled(MuiBox)(({ theme }) => ({
    width: "100%",
    transition: theme.transitions.create(["width", "padding"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

export const Content = styled(MuiBox)(({ theme }) => ({
    padding: theme.spacing(5),
}));
