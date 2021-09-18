import {
    SET_DARK_THEME,
    SET_LIGHT_THEME,
    THEME_CLOSE_SIDEBAR,
    THEME_OPEN_SIDEBAR,
} from "../actionTypes";

type SetLightMode = {
    type: typeof SET_LIGHT_THEME;
};

type SetDarkMode = {
    type: typeof SET_DARK_THEME;
};

type ThemeCloseSidebar = {
    type: typeof THEME_CLOSE_SIDEBAR;
};

type ThemeOpenSidebar = {
    type: typeof THEME_OPEN_SIDEBAR;
};

export type ThemeActionTypes =
    | SetLightMode
    | SetDarkMode
    | ThemeOpenSidebar
    | ThemeCloseSidebar;

export interface ThemeState {
    mode: "dark" | "light";
    sidebarOpen: boolean;
}
