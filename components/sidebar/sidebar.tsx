import {
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { Drawer, DrawerHead, LogoContainer } from "./sidebar.styles";
import SettingsIcon from "@mui/icons-material/Settings";
import Image from "../image/image";
import Link from "next/link";
import { listData } from "./sidebar.data";
import useSidebar from "./sidebar.logic";

interface IProps {
    open: boolean;
    drawerWidth: number;
}

const Sidebar = ({ open, drawerWidth }: IProps) => {
    const { activeItem, setActiveItem } = useSidebar();

    return (
        <Drawer variant="permanent" open={open} drawerwidth={drawerWidth}>
            <DrawerHead>
                <LogoContainer>
                    <Image
                        src="/logo-square.svg"
                        alt="Crown Pheonix"
                        width={40}
                    />
                </LogoContainer>
                <Typography fontWeight="fontWeightBold" noWrap>
                    Crown Pheonix{" "}
                    <Typography component="span" variant="caption">
                        (CPMC)
                    </Typography>
                </Typography>
            </DrawerHead>
            <Divider />
            <List>
                {listData.map((item, i) => (
                    <Link href={item.link} key={i}>
                        <a>
                            <ListItem
                                onClick={() => setActiveItem(i)}
                                selected={activeItem === i}
                                button
                            >
                                <ListItemIcon>
                                    <item.icon />
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        </a>
                    </Link>
                ))}
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
