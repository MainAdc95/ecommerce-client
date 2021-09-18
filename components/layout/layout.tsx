import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import useLayout from "./layout.logic";
import { AnimatedBox, Content } from "./layout.styles";

interface IProps {
    children?: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
    const theme = useTheme();
    const {
        open,
        handleDrawerClose,
        handleDrawerOpen,
        drawerWidth,
        withNoLayout,
        mounted,
    } = useLayout();

    if (!mounted) return null;
    else if (withNoLayout()) return <>{children}</>;
    return (
        <Box>
            <Navbar
                handleDrawerOpen={handleDrawerOpen}
                open={open}
                drawerWidth={drawerWidth}
                handleDrawerClose={handleDrawerClose}
            />
            <AnimatedBox
                pt="70px"
                pl={open ? drawerWidth + "px" : theme.spacing(8)}
            >
                <Sidebar open={open} drawerWidth={drawerWidth} />
                <Content>{children}</Content>
            </AnimatedBox>
        </Box>
    );
};

export default Layout;
