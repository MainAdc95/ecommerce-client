import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const listData = [
    {
        name: "Dashboard",
        icon: DashboardIcon,
        link: "/",
    },
    {
        name: "Orders",
        icon: ShoppingCartIcon,
        link: "/orders",
    },
    {
        name: "Products",
        icon: ViewModuleIcon,
        link: "/products",
    },
    {
        name: "Categories",
        icon: CategoryIcon,
        link: "/categories",
    },
    {
        name: "Media Library",
        icon: PermMediaIcon,
        link: "/mediaLibrary",
    },
];
