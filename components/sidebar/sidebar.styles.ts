import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";

const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(8)})`,
});

interface DrawerProps extends MuiDrawerProps {
    drawerwidth: number;
}

export const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})<DrawerProps>(({ theme, open, drawerwidth }) => ({
    width: drawerwidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    ...(open && {
        ...openedMixin(theme, drawerwidth),
        "& .MuiDrawer-paper": openedMixin(theme, drawerwidth),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

export const DrawerHead = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "white",
    minHeight: "70px",
    width: "100%",
    paddingLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    boxShadow: theme.shadows[5],
}));

export const LogoContainer = styled("div")(({ theme }) => ({
    marginRight: theme.spacing(2),
    borderRadius: "50%",
    boxShadow: theme.shadows[10],
}));
