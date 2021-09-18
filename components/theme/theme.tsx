import { ThemeProvider } from "@mui/material/styles";
import theme from "../../constants/theme";
import useTheme from "./theme.logic";

interface IProps {
    children?: React.ReactNode;
}

const Theme = ({ children }: IProps) => {
    const { mode } = useTheme();

    const modeTheme = theme(mode);

    return <ThemeProvider theme={modeTheme}>{children}</ThemeProvider>;
};

export default Theme;
