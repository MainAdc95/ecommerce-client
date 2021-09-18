import { useDispatch, useSelector } from "react-redux";
import { authRemoveUser } from "../../store/actions/auth";
import { setDarkTheme, setLightTheme } from "../../store/actions/theme";
import { RootReducer } from "../../store/reducers";

const useNavbar = () => {
    const dispatch = useDispatch();
    const mode = useSelector((state: RootReducer) => state.theme.mode);

    const handleThemeMode = (mode: "dark" | "light") => {
        switch (mode) {
            case "dark":
                return dispatch(setDarkTheme());
            case "light":
                return dispatch(setLightTheme());
        }
    };

    const handleSignout = () => {
        dispatch(authRemoveUser());
    };

    return { mode, handleThemeMode, handleSignout };
};

export default useNavbar;
