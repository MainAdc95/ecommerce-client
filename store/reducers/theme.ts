import {
    SET_DARK_THEME,
    SET_LIGHT_THEME,
    THEME_CLOSE_SIDEBAR,
    THEME_OPEN_SIDEBAR,
} from "../actionTypes";
import { ThemeActionTypes, ThemeState } from "../types/theme";

const INITIAL_STATE: ThemeState = {
    mode: "light",
    sidebarOpen: true,
};

const setThemeProperty = (state: ThemeState, key: string, value: any) => {
    let theme: ThemeState | string | null = localStorage.getItem("theme");

    if (theme) {
        theme = JSON.parse(theme);

        localStorage.setItem(
            "theme",
            JSON.stringify({ ...state, [key]: value })
        );
    }
};

const theme = (state = INITIAL_STATE, action: ThemeActionTypes): ThemeState => {
    switch (action.type) {
        case SET_DARK_THEME:
            setThemeProperty(state, "mode", "dark");

            return { ...state, mode: "dark" };
        case SET_LIGHT_THEME:
            setThemeProperty(state, "mode", "light");

            return { ...state, mode: "light" };
        case THEME_CLOSE_SIDEBAR:
            setThemeProperty(state, "sidebarOpen", false);

            return { ...state, sidebarOpen: false };
        case THEME_OPEN_SIDEBAR:
            setThemeProperty(state, "sidebarOpen", true);

            return { ...state, sidebarOpen: true };
        default:
            if (typeof window !== "undefined") {
                let theme: ThemeState | string | null =
                    localStorage.getItem("theme");

                if (theme) {
                    theme = JSON.parse(theme);

                    if (theme && typeof theme !== "string") {
                        theme.mode =
                            theme?.mode === "light" || theme?.mode === "dark"
                                ? theme.mode
                                : "light";
                        theme.sidebarOpen =
                            typeof theme?.sidebarOpen === "boolean"
                                ? theme.sidebarOpen
                                : true;

                        return {
                            ...state,
                            mode: theme?.mode,
                            sidebarOpen: theme?.sidebarOpen,
                        };
                    }
                } else {
                    localStorage.setItem("theme", JSON.stringify({ ...state }));
                }
            }

            return state;
    }
};

export default theme;
