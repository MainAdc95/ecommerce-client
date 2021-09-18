import { ThemeActionTypes } from "../types/theme";

export const setLightTheme = (): ThemeActionTypes => ({
    type: "SET_LIGHT_THEME",
});

export const setDarkTheme = (): ThemeActionTypes => ({
    type: "SET_DARK_THEME",
});

export const themeOpenSidebar = (): ThemeActionTypes => ({
    type: "THEME_OPEN_SIDEBAR",
});

export const themeCloseSidebar = (): ThemeActionTypes => ({
    type: "THEME_CLOSE_SIDEBAR",
});
