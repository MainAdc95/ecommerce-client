import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { RootReducer } from "../../store/reducers";
import { useDispatch, useSelector } from "react-redux";
import { themeCloseSidebar, themeOpenSidebar } from "../../store/actions/theme";

const noLayoutLinks = ["/auth/signin", "/auth/signup"];

const useLayout = () => {
    const dispatch = useDispatch();
    const open = useSelector((state: RootReducer) => state.theme.sidebarOpen);
    const router = useRouter();
    const [drawerWidth, setDrawerWidth] = useState(250);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const withNoLayout = () => noLayoutLinks.includes(router.pathname);

    const handleDrawerOpen = () => {
        dispatch(themeOpenSidebar());
    };

    const handleDrawerClose = () => {
        dispatch(themeCloseSidebar());
    };

    return {
        open,
        drawerWidth,
        handleDrawerOpen,
        handleDrawerClose,
        navbarHeight,
        setNavbarHeight,
        withNoLayout,
        mounted,
    };
};

export default useLayout;
