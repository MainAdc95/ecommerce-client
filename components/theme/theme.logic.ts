import { useSelector } from "react-redux";
import { RootReducer } from "../../store/reducers";

const useTheme = () => {
    const mode = useSelector((state: RootReducer) => state.theme.mode);

    return { mode };
};

export default useTheme;
