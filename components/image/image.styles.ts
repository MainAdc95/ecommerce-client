import { styled, Theme } from "@mui/material/styles";

export const Container = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",

    "&:after": {
        content: "''",
        display: "block",
    },
}));

export const Wrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
}));

export const StyledImage = styled("img")(({ theme }) => ({
    height: "100%",
    width: "100%",
    display: "block",
}));
